import React from 'react'
import {connect} from 'react-redux'
import MobileHeader from './mobile'
import DesktopHeader from './desktop'

export const Header = (props) => {
    const Header = (props.isMobile) ? MobileHeader : DesktopHeader

    return (
        <Header {...props}/>
    )
}


const mapStateToProps = (state) => {
    return {
        isMobile: state.switchVersion.isMobile
    }
};

export default connect(mapStateToProps)(Header)