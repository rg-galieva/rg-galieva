import React from 'react'
import MobileHeader from './mobile'
import DesktopHeader from './desktop'

export const Header = (props) => {
    const Header = (props.isMobile) ? MobileHeader : DesktopHeader

    return (
        <Header {...props}/>
    )
}

export default Header