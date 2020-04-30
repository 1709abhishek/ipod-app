import React from 'react'
import SideSection from './SideSection'
import MainSection from './MainSection'

function Display(props) {
    return (
        <div className="display">
            <SideSection events={props.list} isAct={props.isAct} />
            <MainSection />
        </div>
    )
}

export default Display
