
import './App.css';
import React, { Component } from "react";
// import ReactDOM from "react-dom";
import ZingTouch from "zingtouch"; // npm install --save zingtouch
import MenuIcon from '@material-ui/icons/Menu';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Display from './components/Display';


let currentAngle = 0;
let lastRoundAngle = 0;
// const rotatable = React.useRef(null);


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      events: [
        { index: 0, name: "Coverflow", isActive: true },
        { index: 1, name: "Games", isActive: false },
        { index: 2, name: "Music", isActive: false },
        { index: 3, name: "Setting", isActive: false }
      ],
      active: 0,
      // lastRoundAngle: 0,
      // myAngle: 0
    }
  }

  increaseActive = () => {
    // if (this.state.active >= 0) {
    //   var eventPresent = { index: 1, name: "", isActive: true }
    //   eventPresent.index = this.state.active
    //   eventPresent.name = this.state.events[this.state.active].name
    //   eventPresent.isActive = false
    //   const eve = this.state.events.filter((event) => event.index !== this.state.active);
    //   this.setState({
    //     events: [eve, eventPresent]
    //   })
    // }
    if (this.state.active >= 3) {
      this.setState({
        active: -1
      })
    }
    this.setState({
      active: this.state.active + 1
    })
    console.log("active is:", this.state.active);

    // setActive(active => {
    //   console.log(active);
    //   let nextActive = active + 1;
    //   if (nextActive >= imageLength) nextActive = 0;
    //   console.log(nextActive);
    //   return nextActive;
    // });
  };

  decreaseActive = () => {
    // if (this.state.active >= 0) {
    //   var eventPresent = { index: 1, name: "", isActive: true }
    //   eventPresent.index = this.state.active
    //   eventPresent.name = this.state.events[this.state.active].name
    //   eventPresent.isActive = false
    //   const eve = this.state.events.filter((event) => event.index !== this.state.active);
    //   this.setState({
    //     events: [eve, eventPresent]
    //   })
    // }
    if (this.state.active <= 0) {
      this.setState({
        active: 4
      })
    }
    this.setState({
      // console.log(active);
      active: this.state.active - 1
    })
  };





  componentDidMount() {
    this.activeRegion = ZingTouch.Region(this.region);

    this.activeRegion.bind(this.element1, "rotate", event => {
      this.setState({ events: [...this.state.events, "rotate"] });
      console.log(event.detail.distanceFromLast); // inspect the "event" object whatevert.
      currentAngle += event.detail.distanceFromLast;
      const cal = Math.round(currentAngle % 360);
      // myAngle = cal
      console.log("adv", cal)
      // this.setState({
      //   myAngle: cal
      // })

      if (Math.abs(lastRoundAngle - cal) >= 15) {
        if (event.detail.distanceFromLast > 0) {
          console.log("whatever")
          this.increaseActive();
        } else {
          this.decreaseActive();
        }
        lastRoundAngle = cal
        // const x = this.state.myAngle
        // this.setState({
        //   lastRoundAngle: x
        // })
      }
      // var eventPresent = { index: 1, name: "", isActive: true }
      // eventPresent.index = this.state.active
      // eventPresent.name = this.state.events[this.state.active].name
      // eventPresent.isActive = true
      // const eve = this.state.events.filter((event) => event.index !== this.state.active);
      // this.setState({
      //   events: [eve, eventPresent]
      // })


      // rotatable.current.style.transform = "rotate(" + currentAngle + "deg)";
      // yourAPI.post({ ... });
    });

  }

  componentWillUnmount() {
    this.activeRegion.unbind(this.element1, "rotate");
  }

  //   function activeHandler() {

  // }

  render() {
    return (
      <div className="App">
        <Display list={this.state.events} isAct={this.state.active} />
        <div className="wheel-box" ref={element => (this.region = element)}>
          <div className="inner-circle" ref={element => (this.element1 = element)}>
            <div className="menu"><MenuIcon /></div>
            <div className="forward"><FastForwardIcon /></div>
            <div className="rewind"><FastRewindIcon /></div>
            <button className="centre-button" onClick={this.handleClick} />
            <div className="play"><PlayArrowIcon /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

