import React from 'react'
import logo from '../../../assets/img/kurts-logo.svg'

export const Logo = () => (
    <div className="logo-container">
        <div className="logo-header-container">
            <h2 className="logo-header-top">Welcome to</h2>
            <img className="logo" alt="Kurts logo" src={logo}/>
        </div>
    </div>
)