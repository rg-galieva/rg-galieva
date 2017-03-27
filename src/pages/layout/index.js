import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import {IndexLink} from 'react-router'
import Menu from '../../components/menu'

require('../../assets/styles/common.gcss')
import s from './_styles.css'

const logo = require('./svg/logo.svg');

class Layout extends Component {

    componentDidMount() {
         window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (ev) => {
        if (window.scrollY > 50) {
            this.refs.header.className = "is_sticky";
        } else {
            this.refs.header.className = "";
        }
    }

    render() {
        return (
            <div className={s.wrap}>
                <header ref="header">
                    <section className="clearfix">
                        <IndexLink to="/" className={s.logo} dangerouslySetInnerHTML={{__html: logo}}/>
                        <Menu />
                    </section>
                </header>

                <main>
                    {this.props.children}
                </main>

                <footer>
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
