import React from 'react'

const RandomButton = (props) => {
    return (
        <div>
            {/* ********************************** Random Button **************************************** */}
            <button style={{
                width: '150px',
                height: '55px',
                fontSize: '30px',
            }} 
            
            onClick={() => {
                props.reset() // reset timer
                props.setRunning(false) // reset run button
                props.play()

                const rows = []
                for (let i = 0; i < props.numRows; i++) {
                    rows.push(Array.from(Array(props.numCols), () => (Math.random() > 0.8 ? 1 : 0)))
                }
                props.setGrid(rows)

            }}> Random </button>
            {/* ********************************** Random Button **************************************** */}

        </div>
    )
}

export default RandomButton
