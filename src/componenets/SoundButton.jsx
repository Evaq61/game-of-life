import React, { useState, useCallback, useRef } from 'react'
//  npm install use-sound
import useSound from 'use-sound'
import popSfx from '../sounds/pop_sfx.mp3'


const SoundButton = () => {

    // sound button test ***********************************
    const [play] = useSound(popSfx)
    const Popping = () => {
        // const [play] = useSound(popSfx)
        play()
    }

    // sound button test ***********************************
    return (
        <div>
            <button onClick = {play} >Pop</button>
        </div>
    )
}

export default SoundButton
