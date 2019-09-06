import React from 'react'
import logo from '../../../assets/img/ts-logo.png'

export const Logo = () => (
    <div className="logo-container">
        <img className="logo" alt="TeleSoftas logo" src={logo}/>
        <div className="logo-header-container">
            <h2 className="logo-header-top">Welcome to</h2>
            <h2 className="logo-header-bottom">TeleSoftas</h2>
        </div>
    </div>
)