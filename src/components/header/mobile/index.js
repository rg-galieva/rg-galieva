import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import {Link} from 'react-router-dom'
import Menu from '../../menu'
import LangMenu from '../../lang-menu'
import s from './_styles.pcss'

const logo = require('../svg/logo.svg');
const nav = require('./svg/menu.svg');
const back = require('../../../assets/svg/arrow.svg');

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
                    <div dangerouslySetInnerHTML={{__html: nav}} className={s.nav_btn} ref="nav_btn"
                         onClick={this.toggleNav}></div>
                    <Link to="/" className={s.logo} dangerouslySetInnerHTML={{__html: logo}}/>
                </section>
                <div className={s.menu} ref="nav" onClick={this.toggleNav}>
                    <div className={s.menu_inner}>
                        <Menu />
                        <LangMenu css={s.lang_nav}/>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: back}} className={s.close_btn}
                         onClick={this.toggleNav}></div>
                </div>
            </header>
        )
    }
}

export default MobileHeader