import { render } from '@testing-library/react'
import React from 'react'
import logo from '../../src/images/logo.png'
import '../../src/styles/header.css'

const Header = (props) => {
    const {score,highscore} = props

    return (
        <div className='head-cont'>
            <div className='logo-head'>
                <img src={logo} className='logo-img'></img>
            </div>
            <div className='scoreboard'>
            <p>Score: {score}</p>
            <p>Highscore: {highscore}</p>
            </div>
        </div>
    )

}

export default Header