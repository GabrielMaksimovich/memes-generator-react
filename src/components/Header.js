import React from 'react'
import face from '../images/Troll Face.png'

export default function  Header() {
    return (
        <header className='header'>
            <img className='header__img' src={face} alt="troll face"/>
            <h3 className='header__title'>Meme Generator</h3>
            <p className='header__suptitle'>React course - Project 3</p>
        </header>
    )
}


