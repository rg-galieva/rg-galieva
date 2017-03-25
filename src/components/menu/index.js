import React from 'react'
import {Link} from 'react-router'
import s from './_styles.css'

const Menu = () => {
    return (
        <nav className={s.nav}>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Menu;