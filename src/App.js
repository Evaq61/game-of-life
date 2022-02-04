import './App.css';
import React, { useState, useCallback, useRef} from 'react'

import Main from './views/Main';

function App() {

  
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;




// const [generation, setGeneration] = useState(0)

// // sound button test ***********************************
// const [play] = useSound(popSfx)
// const Popping = () => {
//   // const [play] = useSound(popSfx)
//   play()
//   }

// // sound button test ***********************************

// const [running, setRunning] = useState(false)

// const runningRef = useRef();
// runningRef.current = running

// const runSimulation = useCallback(() => {
//   if (!runningRef.current) {
//     // kill condition, if false wont run
//     console.log("Reseting Gen: " + generation)
//     return
//   }
  // simulate
  // Popping()
  
  // let nextGen = generation
  // setGeneration(nextGen)
  // console.log("current Gen: " +nextGen)

//   setGrid((g) => {

//     // go through the grid (g) and each cell in it
//     // let count = 0
//     return produce(g, gridCopy => {

//       for (let i=0; i < numRows; i++) {
//         for (let k = 0; k < numCols; k++) {
//           // check for neighbors
//           let neighbors = 0
//           operations.forEach(([x, y]) => {
//             const newI = i + x;
//             const newK = k + y;
//             // check the edges/bounds??
//             if (newI >= 0 && newI < numRows && newK >=0 && newK < numCols) {
//               neighbors += g[newI][newK]
//             }
//           })
//           // rules for live or dead
//           if (neighbors < 2 || neighbors > 3) {
//             if (g[i][k] === 1){
//               gridCopy[i][k] = 0
//               // Popping()
//               // count ++ 
//             }
//             gridCopy[i][k] = 0
            
//           } else if (g[i][k] === 0 && neighbors === 3) {
//             gridCopy[i][k] = 1
            
//           }
//           // console.log("count is: "+count);
//           // nextGen += 1

//         }
//       }
//       // if (count < 3){
//         //   Popping()
//         // }
//       })
//     })
//   // call again after timer: 1000 = 1sec
//   setTimeout(runSimulation, 1000)
// }, [])


// // sets the grid size
// const numRows = 20
// const numCols = 20

// // used for neighbor checking
// const operations = [
//   [0,1],
//   [0,-1],
//   [1,-1],
//   [-1,1],
//   [1,1],
//   [-1,-1],
//   [1,0],
//   [-1,0],
// ]

// const generateEmptyGrid = () => {
//   const rows = []
//   for (let i = 0; i < numRows; i++) {
//     rows.push(Array.from(Array(numCols), () => 0))
//   }
//   return rows
// }

// // creates the grid
// const [grid, setGrid] = useState(() => {
//   return generateEmptyGrid()
// })

// console.log(grid);





// ******************************** in the display ********************

{/* <button onClick={play}>Pop Play</button> */}
{/* <button onClick={Popping}>Pop Popping</button> */}

{/* ********************************** Start/Stop Button **************************************** */}
{/* <button onClick = {() => {
  setRunning(!running); 
  if (!running) {
    runningRef.current = true; 
    runSimulation()
  }
}}> {running ? 'Stop' : 'Run'} </button> */}
{/* ********************************** Start/Stop Button **************************************** */}


{/* ********************************** Clear Button **************************************** */}
{/* <button onClick = {() => {
  setGrid(generateEmptyGrid())
}}> Clear </button> */}
{/* ********************************** Clear Button **************************************** */}


{/* ********************************** Random Button **************************************** */}
{/* <button onClick = {() => {
  const rows = []
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => (Math.random() > 0.8 ? 1 : 0)))
  }
  setGrid(rows)

}}> Random </button> */}
{/* ********************************** Random Button **************************************** */}



{/* ********************************** display/create the grid **************************************** */}
{/* <div style={{
  display: 'grid',
  gridTemplateColumns: `repeat(${numCols}, 20px)`,
}}>
{
  grid.map((rows, i) => rows.map((col, k) => 
  <div key={`${i}-${k}`} 
  onClick = { () => {
    const newGrid = produce(grid, gridCopy => {
      gridCopy[i][k] = grid[i][k] ? 0 : 1 
    })
    setGrid(newGrid)
  }}
  style = {{ 
    width: 20, 
    height: 20, 
    backgroundColor: grid[i][k] ? 'black' : undefined,
    border: 'solid 1px black'
  }}
  />
  ))
}
</div> */}
{/* ********************************** display/create the grid **************************************** */}
