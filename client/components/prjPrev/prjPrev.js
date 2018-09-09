import React from 'react';
import DesktopPrjPrev from './prjPrevDesktop/prjPrevDesktop';
import MobilePrjPrev from './prjPrevMobile/prjPrevMobile';

const ProjectPrev = (props) => {
  const { isMobile } = props;

  return isMobile
    ? <MobilePrjPrev {...props} />
    : <DesktopPrjPrev {...props} />;
};

export default ProjectPrev;
