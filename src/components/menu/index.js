import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './_styles.css'

const Menu = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/" activeClassName="is_act" exact={true}>Home</NavLink>
            <NavLink to="/about" activeClassName="is_act">About</NavLink>
            <NavLink to="/resume" activeClassName="is_act">Resume</NavLink>
            <NavLink to="/projects" activeClassName="is_act">Projects</NavLink>
            <NavLink to="/contact" activeClassName="is_act">Contact</NavLink>
        </nav>
    )
}

export default Menu;