import React, { useState } from 'react'

const ColorOptions = (props) => {


    // const [color, setColor] = useState('black')

    // const colorHandler = (color) => {
    //     setColor(color)
    // }

    return (
        <div style={{
                // outline: '2px solid red',
                width: '250px',
                height: '500px',
                margin: '10px',
            }}>
            <div style={{
                // outline: '2px solid red',
                display: 'flex',
                justifyContent: 'space-evenly',

            }}>
                <div style={{
                        // outline: '2px solid blue',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        // flexWrap: 'wrap',

                        width: '250px',
                        height: '400px'
                    }}>
                    <label style={{fontSize:'30px',}}> Pick a Color </label>
                    <button style={{fontSize:'20px', backgroundColor:'black', color:'white', margin: '10px', height:'40px', width:'100px',}} onClick={e => props.colorHandler('black')}> Black </button>
                    <button style={{fontSize:'20px', backgroundColor:'red', color:'black', margin: '10px', height:'40px', width:'100px',}} onClick={e => props.colorHandler('red')}> Red </button>
                    <button style={{fontSize:'20px', backgroundColor:'yellow', color:'black', margin: '10px', height:'40px', width:'100px',}} onClick={e => props.colorHandler('yellow')}> Yellow </button>
                    <button style={{fontSize:'20px', backgroundColor:'green', color:'white', margin: '10px', height:'40px', width:'100px',}} onClick={e => props.colorHandler('green')}> Green </button>
                    <button style={{fontSize:'20px', backgroundColor:'blue', color:'white', margin: '10px', height:'40px', width:'100px',}} onClick={e => props.colorHandler('blue')}> Blue </button>
                </div>
            </div>
            <div style={{
                        // outline: '2px solid orange',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems:'center',
                    }}>
                <label style={{fontSize:'30px', marginTop: '15px',}}> Enter Your Own Color </label>
                <input style={{fontSize:'20px', width: '150px',margin:'10px',}} type="text" onChange={e => props.colorHandler(e.target.value)} />
            </div>
        </div>
    )
}

export default ColorOptions
