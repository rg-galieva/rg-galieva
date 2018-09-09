import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from 'client/components/menu/menu';
import LangMenu from 'client/components/langMenu/langMenu';

import icons from 'client/assets/svg/icons.svg';
import s from './headerDesktop.scss';


class DesktopHeader extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

    handleScroll = () => {
      if (window.scrollY > 50) {
        document.getElementById('head').classList.add('is_sticky');
      } else {
        document.getElementById('head').classList.remove('is_sticky');
      }
    }

    render() {
      return (
        <header className={s.header} id="head">
          <section className="clearfix">

            <LangMenu css={s.lang_nav} />

            <Link to="/" className={s.logo}>
              <svg viewBox="0 0 202.87 29.94">
                <use xlinkHref={`${icons}#logo`} />
              </svg>
            </Link>

            <Menu />

          </section>
        </header>
      );
    }
}

export default DesktopHeader;
