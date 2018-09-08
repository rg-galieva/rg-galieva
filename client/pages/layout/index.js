import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Header from '../../components/header'
import {connect} from 'react-redux'
import switchVersion from '../../actions/switch-version'
require('../../assets/styles/common.gcss')
import s from './_styles.pcss'

export class Layout extends Component {
    componentDidMount() {
        window.addEventListener("resize", this.isMobile);
    }

    isMobile = () => {
        this.props.dispatch(switchVersion(window.innerWidth <= 800))
    }

    render() {
        return (
            <div className={s.wrap}>
                <Header isMobile={this.props.isMobile}/>

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
                        <a href="https://cdn.rg-galieva.com/cloud/[frontend]_Regina_Galieva.pdf" target="_blank">PDF-Resume</a>
                    </nav>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isMobile: state.switchVersion.isMobile
    }
};

export default connect(mapStateToProps)(Layout);