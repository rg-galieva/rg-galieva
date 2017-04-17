import React from 'react'
import MobileHeader from './mobile'
import DesktopHeader from './desktop'

export const Header = (props) => {
    const HeaderFinal = (props.isMobile) ? MobileHeader : DesktopHeader

    return (
        <HeaderFinal {...props}/>
    )
}

export default Header