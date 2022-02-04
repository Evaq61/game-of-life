import React, { useState, useCallback, useRef } from 'react'

const ClearButton = (props) => {

    return (
        <div>

            {/* ********************************** Clear Button **************************************** */}
            <button style={{
                width: '150px',
                height: '55px',
                fontSize: '30px',
            }} 
            
            onClick={() => {
                props.setGrid(props.generateEmptyGrid())
                props.reset() // reset timer
                props.setRunning(false) // reset run button
            }}> Clear </button>
            {/* ********************************** Clear Button **************************************** */}

        </div>
    )
}

export default ClearButton
