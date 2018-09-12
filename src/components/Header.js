import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Matthew Shan</h1>
        <p>Notre Dame Class of 2021<br />
        Aspiring Software Engineer</p>
    </header>
)

export default Header
