import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import Header from 'client/components/header/header';
import switchVersion from 'client/actions/switch-version';
import s from './layout.scss';

import 'client/assets/styles/common.scss';

class Layout extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.isMobileSubscriber);
  }

    isMobileSubscriber = () => {
      const { dispatch } = this.props;
      dispatch(switchVersion(window.innerWidth <= 800));
    };

    render() {
      const { isMobile, children } = this.props;

      return (
        <div className={s.wrap}>
          <Header isMobile={isMobile} />

          <main className={s.cont}>
            <CSSTransition
              classNames="sliding"
              timeout={350}
              exit={false}
              component="section"
            >
              {children}
            </CSSTransition>
          </main>

          <footer className={s.footer}>
            <nav>
              <a href="https://www.facebook.com/rg.galieva">Facebook</a>
              <a href="https://www.instagram.com/rg.galieva">Instagram</a>
              <a href="https://github.com/rg-galieva/rg-galieva">Github</a>
              <a href="https://www.linkedin.com/in/rg-galieva">LinkedIn</a>
              <a
                href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%72%67%2E%67%61%6C%69%65%76%61%40%67%6D%61%69%6C%2E%63%6F%6D"
              >
                          Mail
              </a>
              <a
                href="https://cdn.rg-galieva.com/cloud/[frontend]_Regina_Galieva.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                          PDF-Resume
              </a>
            </nav>
          </footer>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  isMobile: state.switchVersion.isMobile,
});

export default connect(mapStateToProps)(Layout);
