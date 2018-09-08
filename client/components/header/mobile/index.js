import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import {Link} from 'react-router-dom'
import Menu from '../../menu'
import LangMenu from '../../lang-menu'
import s from './_styles.pcss'

const icons = require('../../../assets/svg/icons.svg');

class MobileHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nav_is_act: false
        }
    }

    toggleNav = (ev) => {
        if (ev) ev.preventDefault();

        this.setState({
                nav_is_act: !this.state.nav_is_act
            },
            () => {
                if (this.state.nav_is_act) {
                    findDOMNode(this.refs.nav).classList.add('is_act');
                    document.body.classList.add('noscroll');
                } else {
                    findDOMNode(this.refs.nav).classList.remove('is_act');
                    document.body.classList.remove('noscroll');
                }
            }
        )
    }

    render() {
        return (
            <header ref="head" className={s.header}>
                <section className="clearfix">
                    <div className={s.nav_btn} ref="nav_btn" onClick={this.toggleNav}>
                        <svg viewBox="0 0 92.833 92.833">
                            <use xlinkHref={`${icons}#nav_btn`}/>
                        </svg>
                    </div>
                    <Link to="/" className={s.logo}>
                        <svg viewBox="0 0 202.87 29.94">
                            <use xlinkHref={`${icons}#logo`}/>
                        </svg>
                    </Link>
                </section>
                <div className={s.menu} ref="nav" onClick={this.toggleNav}>
                    <div className={s.menu_inner}>
                        <Menu />
                        <LangMenu css={s.lang_nav}/>
                    </div>
                    <div className={s.close_btn} onClick={this.toggleNav}>
                        <svg viewBox="0 0 493.36 219.25">
                            <use xlinkHref={`${icons}#back`}/>
                        </svg>
                    </div>
                </div>
            </header>
        )
    }
}

export default MobileHeader