import React, { Component } from 'react'
import { useRef } from 'react';
import './try.css'

export const TryBubbling = () => {

    const bubble4Ref = useRef();
    const bubble2Ref = useRef();



    const handleBubble1 = (e) => {
        console.log(e.target.className)

    }
    const handleBubble2 = (e) => {
        console.log(bubble4Ref.current.classList.value)

    }
    const handleBubble3 = (e) => {
        console.log("3")

    }
    const handleBubble4 = (e) => {
        console.log(bubble4Ref.current.classList.value)

    }
    return (
        <>
            <div className='bubble b1' onClick={handleBubble1}>
                <div className='bubble b2' ref={bubble2Ref} onClick={handleBubble2}>
                    <div className='bubble b3' onClick={handleBubble3}>
                        <div ref={bubble4Ref} className='bubble b4' onClick={handleBubble4}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

