import React, {Component} from 'react'
import LangLink from '../lang-link'
import s from './_styles.pcss'


const LangMenu = () => {
    const handleClick = (ev) => {
        if (ev) ev.preventDefault();

    }

    return (
        <nav className={s.nav} onClick={handleClick}>
            <LangLink/>
        </nav>
    )
}

export default LangMenu;