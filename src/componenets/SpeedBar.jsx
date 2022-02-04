import React from 'react'

const SpeedBar = (props) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <label style={{margin: '15px', fontSize:'30px',}}> Set the Cycle Speed  </label>
            <input style={{width:'175px',}}type="range" min='5' max='2000' value={props.speed} onChange={e => props.setSpeed(e.target.value)} track='inverted' />
            <p>Time Between Each Cycle: {props.speed / 1000} second(s)</p>
        </div>
    )
}

export default SpeedBar
