import React from 'react'

function SideSection(props) {
    return (
        <div className="sidesection">
            <h1>ipod</h1>
            <div className={`listitem ${props.isAct === 0 && 'active'}`}>{props.events[0].name}</div>
            <div className={`listitem ${props.isAct === 1 && 'active'}`}>{props.events[1].name}</div>
            <div className={`listitem ${props.isAct === 2 && 'active'}`}>{props.events[2].name}</div>
            <div className={`listitem ${props.isAct === 3 && 'active'}`}>{props.events[3].name}</div>
        </div>
    )
}

export default SideSection
