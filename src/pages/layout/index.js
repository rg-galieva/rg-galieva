import React from 'react'
import Menu from '../../components/menu'
require ('../../assets/styles/common.gcss')
import s from './_styles.css'
import {Link} from 'react-router'

export default function (props) {
    return (
        <div className={s.wrap}>
            <header>
                <Link to="/" className={s.logo}>Regina Galieva</Link>
                <Menu />
            </header>

            <main>
                {props.children}
            </main>

            <footer>
                <nav>
                    <a href="">Facebook</a>
                    <a href="">Instagram</a>
                    <a href="">Github</a>
                    <a href="">LinkedIn</a>
                </nav>
            </footer>
        </div>
    );
}

