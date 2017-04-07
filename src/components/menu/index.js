import React from 'react'
import {NavLink} from 'react-router-dom'
import {FormattedMessage} from 'react-intl';
import s from './_styles.pcss'

const Menu = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/" activeClassName="is_act" exact={true}><FormattedMessage id="home"/></NavLink>
            <NavLink to="/about" activeClassName="is_act"><FormattedMessage id="about"/></NavLink>
            <NavLink to="/resume" activeClassName="is_act"><FormattedMessage id="resume"/></NavLink>
            <NavLink to="/projects" activeClassName="is_act"><FormattedMessage id="projects"/></NavLink>
            <NavLink to="/experiments" activeClassName="is_act"><FormattedMessage id="experiments"/></NavLink>
            <NavLink to="/contact" activeClassName="is_act"><FormattedMessage id="contact"/></NavLink>
        </nav>
    )
}

export default Menu;