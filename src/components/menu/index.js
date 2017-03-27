import React from 'react'
import {Link, IndexLink} from 'react-router'
import s from './_styles.css'

const Menu = () => {
    return (
        <nav className={s.nav}>
            <IndexLink to="/" activeClassName="is_act">Home</IndexLink>
            <Link to="/about" activeClassName="is_act">About</Link>
            <Link to="/resume" activeClassName="is_act">Resume</Link>
            <Link to="/projects" activeClassName="is_act">Projects</Link>
            <Link to="/contact" activeClassName="is_act">Contact</Link>
        </nav>
    )
}

export default Menu;