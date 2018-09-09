import React from 'react';
import MobileHeader from 'client/components/header/headerMobile/headerMobile';
import DesktopHeader from 'client/components/header/headerDesktop/headerDesktop';

const Header = (props) => {
  const { isMobile } = props;
  const HeaderFinal = isMobile ? MobileHeader : DesktopHeader;

  return (
    <HeaderFinal {...props} />
  );
};

export default Header;
