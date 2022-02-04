import React, { useState, useEffect, useCallback, useRef } from 'react'
// npm install immer???
import produce, { current } from 'immer'
//  npm install use-sound
import useSound from 'use-sound'
import popSfx from '../sounds/pop_sfx.mp3'

import RunButton from './RunButton'
import ClearButton from './ClearButton'
import RandomButton from './RandomButton'
import ColorOptions from './ColorOptions'
import SpeedBar from './SpeedBar'

const Grid = (props) => {



    // ***************************************** Timer  ********************************************

    const [isActive, setIsActive] = useState(false)
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)

    function toggle() {
        setIsActive(!isActive)
    }

    function reset() {
        setSeconds(0)
        setMinutes(0)
        setHours(0)
        setIsActive(false)
    }

    useEffect(() => {
        let interval = null
        if (isActive) {
            interval = setInterval(() => {
                if (seconds < 59) {
                    setSeconds(seconds => seconds + 1)
                } else if (seconds === 59 && minutes < 59) {
                    setSeconds(0)
                    setMinutes(minutes => minutes + 1)
                } else if (seconds === 59 && minutes === 59) {
                    setSeconds(0)
                    setMinutes(0)
                    setHours(hours => hours + 1)
                }
            }, speedRef.current) // uses setSpeed State to match run time
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive, seconds])

    // ************************************* Color Handler *****************************************

    const [color, setColor] = useState('black')

    const colorHandler = (color) => {
        setColor(color)
    }
    // **************************************** run button fuctions ************************************************

    const [running, setRunning] = useState(false)

    const runningRef = useRef();
    runningRef.current = running

    // ******************************** set the speed of the simulation ***********************************

    const [speed, setSpeed] = useState(1000)

    const speedRef = useRef()
    speedRef.current = speed

    // ***************************************** Sound  ********************************************


    const [volume, setVolume] = useState(0.5)
    const volumeRef = useRef()
    volumeRef.current = volume

    const [play] = useSound(popSfx, { volume: volumeRef.current })


    // ************************************sets the grid size ************************************************

    const numRows = 30
    const numCols = 30

    // used for neighbor checking
    const operations = [
        [0, 1],
        [0, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
        [-1, -1],
        [1, 0],
        [-1, 0],
    ]


    // ******************************************** Simulation Handler ****************************************
    const runSimulation = useCallback(() => {
        // kill condition
        if (!runningRef.current) {
            return
        }
        // play()
        setGrid((g) => {
            // go through the grid (g) and each cell in it
            return produce(g, gridCopy => {
                for (let i = 0; i < numRows; i++) {
                    for (let k = 0; k < numCols; k++) {
                        // check for neighbors
                        let neighbors = 0
                        operations.forEach(([x, y]) => {
                            const newI = i + x;
                            const newK = k + y;
                            // check the edges/bounds??
                            if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                                neighbors += g[newI][newK]
                            }
                        })
                        // rules for live or dead
                        if (neighbors < 2 || neighbors > 3) {
                            if (g[i][k] === 1) {
                                gridCopy[i][k] = 0
                            }
                            gridCopy[i][k] = 0
                        } else if (g[i][k] === 0 && neighbors === 3) {
                            gridCopy[i][k] = 1
                        }
                    }
                }
            })
        })
        // call again after timer: 1000 = 1sec
        setTimeout(runSimulation, speedRef.current)
    }, [])

    // ******************************************* Clears the grid *********************************************************

    const generateEmptyGrid = () => {
        play()
        const rows = []
        for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => 0))
        }
        return rows
    }

    // ********************************************* Creates the initial grid *****************************************************

    const [grid, setGrid] = useState(() => {
        return generateEmptyGrid()
    })
    // console.log(grid);


    // *************************************** DISPLAY ****************************************
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {/* ************************************** Timer ************************************** */}
            <div>
                <section style={{fontSize:'20px', margin:'10px',}}>This Simulation has lasted:</section>
                <section>{hours.toString().padStart(2, 0)}:{minutes.toString().padStart(2, 0)}:{seconds.toString().padStart(2, 0)}</section>
            </div>
            {/* ************************************** Color Options ************************************** */}
            <div style={{
                    // outline: '2px solid green',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <ColorOptions colorHandler={colorHandler} />
                {/* ********************************** display/create the grid **************************************** */}

                <div style={{
                    outline: '10px solid black',
                    display: 'grid',
                    gridTemplateColumns: `repeat(${numCols}, 20px)`,
                    margin: '20px'
                }}>
                    {
                        grid.map((rows, i) => rows.map((col, k) =>
                            <div key={`${i}-${k}`}
                                onClick={() => {
                                    const newGrid = produce(grid, gridCopy => {
                                        gridCopy[i][k] = grid[i][k] ? 0 : 1
                                    })
                                    setGrid(newGrid)
                                }}
                                style={{
                                    width: 20,
                                    height: 20,
                                    backgroundColor: grid[i][k] ? `${color}` : undefined,
                                    border: 'solid 1px black'
                                }}
                            />
                        ))
                    }
                </div>

                {/* ********************************** Speed and Volume Sliders **************************************** */}
                <div style={{
                        // outline: '2px solid red',
                        margin: '10px',
                        width: '250px',
                        height: '400px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                    <div style={{
                        // outline: '2px solid red',
                        display: 'flex', 
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <label style={{fontSize:'30px', margin: '15px',}}> Volume</label>
                        <input style={{width:'175px',}}type="range" min='0' max='1' step='0.02' track = 'inverted' value={volume} onChange={e => setVolume(e.target.value)} />
                        <button style={{margin:'20px',}} onClick={play} > POP </button>

                    </div>
                    <SpeedBar speed={speed} setSpeed={setSpeed} />
                </div>

            </div>
            {/* ********************************** Grid Buttons **************************************** */}
            <div style={{
                // outline: '2px solid purple',
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '700px',
                margin: '10px'
            }}>
                <RunButton
                    runSimulation={runSimulation}
                    setRunning={setRunning}
                    running={running}
                    runningRef={runningRef}
                    toggle={toggle}
                // start = {start}
                />
                <ClearButton
                    setGrid={setGrid}
                    generateEmptyGrid={generateEmptyGrid}
                    reset={reset}
                    setRunning={setRunning}
                />
                <RandomButton
                    setGrid={setGrid}
                    numCols={numCols}
                    numRows={numRows}
                    reset={reset}
                    setRunning={setRunning}
                    play={play}
                />
            </div>
        </div>
    )
}

export default Grid
