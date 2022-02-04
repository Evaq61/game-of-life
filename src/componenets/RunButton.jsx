import React, { useState, useCallback, useRef} from 'react'

const RunButton = (props) => {


    return (
        <div>

            {/* ********************************** Start/Stop Button **************************************** */}
            <button style={{
                width: '150px',
                height: '55px',
                fontSize: '30px',
            }} 
            
            onClick={() => {
                props.setRunning(!props.running);
                props.toggle() //toggle timer
                if (!props.running) {
                    props.runningRef.current = true;
                    props.runSimulation()
                }
            }}> {props.running ? 'Stop' : 'Run'} </button>
            {/* ********************************** Start/Stop Button **************************************** */}

        </div>
    )
}

export default RunButton
