import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from 'client/components/menu/menu';
import LangMenu from 'client/components/langMenu/langMenu';
import icons from 'client/assets/svg/icons.svg';

import s from './headerMobile.scss';


class MobileHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavAct: false,
    };
  }

    toggleNav = (ev) => {
      if (ev) ev.preventDefault();
      const { isNavAct } = this.state;
      const newisNavActValue = !isNavAct;

      this.setState({
        isNavAct: newisNavActValue,
      },
      () => {
        if (newisNavActValue) {
          document.getElementById('menu').classList.add('is_act');
          document.body.classList.add('noscroll');
        } else {
          document.getElementById('menu').classList.remove('is_act');
          document.body.classList.remove('noscroll');
        }
      });
    }

    render() {
      return (
        <header className={s.header}>
          <section className="clearfix">

            <div className={s.nav_btn} onClick={this.toggleNav} role="button">
              <svg viewBox="0 0 92.833 92.833">
                <use xlinkHref={`${icons}#nav_btn`} />
              </svg>
            </div>

            <Link to="/" className={s.logo}>
              <svg viewBox="0 0 202.87 29.94">
                <use xlinkHref={`${icons}#logo`} />
              </svg>
            </Link>

          </section>

          <div className={s.menu} onClick={this.toggleNav} role="button" id="menu">

            <div className={s.menu_inner}>
              <Menu />
              <LangMenu css={s.lang_nav} />
            </div>

            <div className={s.close_btn} onClick={this.toggleNav} role="button">
              <svg viewBox="0 0 493.36 219.25">
                <use xlinkHref={`${icons}#back`} />
              </svg>
            </div>

          </div>

        </header>
      );
    }
}

export default MobileHeader;
