import React from 'react'
import DesktopPrjPrev from './desktop'
import MobilePrjPrev from './mobile'

const ProjectPrev = (props) => {
    const ProjectPrevFinal = (props.isMobile) ? MobilePrjPrev : DesktopPrjPrev;

    return (
        <ProjectPrevFinal {...props}/>
    )
}

export default ProjectPrev