import React from 'react'
import {connect} from 'react-redux'
import MobileHeader from './mobile'
import DesktopHeader from './desktop'

const Header = (props) => {
    const Header = (props.isMobile) ? MobileHeader : DesktopHeader

    return (
        <Header/>
    )
}


const mapStateToProps = (state) => {
    return {
        isMobile: state.switchVersion.isMobile
    }
};

export default connect(mapStateToProps)(Header)