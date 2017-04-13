import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import {Link} from 'react-router-dom'
import Menu from '../../components/menu'
import LangMenu from '../../components/lang-menu'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import isMobile from '../../utils/useragent-check'
require('../../assets/styles/common.gcss')
import s from './_styles.pcss'

const logo = require('./svg/logo.svg');
const nav = require('./svg/menu.svg');

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nav_is_act: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (ev) => {
        if (window.scrollY > 50) {
            this.refs.head.className = "is_sticky";
        } else {
            this.refs.head.className = "";
        }
    }

    toggleNav = (ev) => {
        if (ev) ev.preventDefault();

        this.setState({
                nav_is_act: !this.state.nav_is_act
            },
            () => {
                if (this.state.nav_is_act) {
                    findDOMNode(this.refs.head).classList.add('is_act');
                } else {
                    findDOMNode(this.refs.head).classList.remove('is_act');
                }
            }
        )
    }

    render() {
        return (
            <div className={s.wrap}>
                <header ref="head">
                    <section className="clearfix">
                        <div dangerouslySetInnerHTML={{__html: nav}} className={s.nav_btn} ref="nav_btn"
                             onClick={this.toggleNav}></div>
                        <LangMenu css={s.lang_nav}/>
                        <Link to="/" className={s.logo} dangerouslySetInnerHTML={{__html: logo}}/>
                        <Menu />
                    </section>
                </header>

                <main className={s.cont}>
                    <ReactCSSTransitionGroup
                        transitionName="sliding"
                        transitionEnterTimeout={350}
                        transitionLeave={false}
                        component="section">
                        {this.props.children}
                    </ReactCSSTransitionGroup>
                </main>

                <footer className={s.footer}>
                    <nav>
                        <a href="https://www.facebook.com/rg.galieva">Facebook</a>
                        <a href="https://www.instagram.com/rg.galieva">Instagram</a>
                        <a href="https://github.com/rg-galieva/rg-galieva">Github</a>
                        <a href="https://www.linkedin.com/in/rg-galieva">LinkedIn</a>
                        <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%72%67%2E%67%61%6C%69%65%76%61%40%67%6D%61%69%6C%2E%63%6F%6D">Mail</a>
                    </nav>
                </footer>
            </div>
        )
    }
}

export default Layout
