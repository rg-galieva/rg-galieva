import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './_styles.pcss'

const LangMenu = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/" activeClassName="is_act" exact={true}>En</NavLink>
            <NavLink to="/ru" activeClassName="is_act">Ru</NavLink>
        </nav>
    )
}

export default LangMenu;