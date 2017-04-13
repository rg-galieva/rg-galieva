import React from 'react'
import isMobile from '../../utils/useragent-check'
import MobileHeader from './mobile'
import DesktopHeader from './desktop'

const Header = (isMobile) ? MobileHeader : DesktopHeader

export default Header