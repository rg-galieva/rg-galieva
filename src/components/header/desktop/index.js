import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import {Link} from 'react-router-dom'
import Menu from '../../menu'
import LangMenu from '../../lang-menu'
import s from './_styles.pcss'

const icons = require('../../../assets/svg/icons.svg');

class DesktopHeader extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (ev) => {
        if (window.scrollY > 50) {
            findDOMNode(this.refs.head).classList.add('is_sticky');
        } else {
            findDOMNode(this.refs.head).classList.remove('is_sticky');
        }
    }

    render() {
        return (
            <header ref="head" className={s.header}>
                <section className="clearfix">
                    <LangMenu css={s.lang_nav}/>
                    <Link to="/" className={s.logo}>
                        <svg viewBox="0 0 202.87 29.94">
                            <use xlinkHref={`${icons}#logo`}></use>
                        </svg>
                    </Link>
                    <Menu />
                </section>
            </header>
        )
    }
}

export default DesktopHeader