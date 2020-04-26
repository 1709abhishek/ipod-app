
import './App.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import ZingTouch from "zingtouch"; // npm install --save zingtouch
import MenuIcon from '@material-ui/icons/Menu';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Display from './components/Display';





class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    this.activeRegion = ZingTouch.Region(this.region);

    this.activeRegion.bind(this.element1, "rotate", event => {
      this.setState({ events: [...this.state.events, "rotate"] });
      console.log(event.detail.distanceFromLast); // inspect the "event" object whatevert.
      // yourAPI.post({ ... });
    });

  }

  componentWillUnmount() {
    this.activeRegion.unbind(this.element1, "rotate");
  }

  render() {
    return (
      <div>
        <Display />
        <div className="wheel-box" ref={element => (this.region = element)}>
          <div className="inner-circle" ref={element => (this.element1 = element)}>
            <div className="menu"><MenuIcon /></div>
            <div className="forward"><FastForwardIcon /></div>
            <div className="rewind"><FastRewindIcon /></div>
            <div className="centre-button">
              <div className="play"><PlayArrowIcon /></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

