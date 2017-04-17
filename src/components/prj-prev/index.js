import React from 'react'
import {connect} from 'react-redux'
import DesktopPrjPrev from './desktop'
import MobilePrjPrev from './mobile'

export const ProjectPrev = (props) => {
    const ProjectPrev = (props.isMobile) ? MobilePrjPrev : DesktopPrjPrev

    return (
        <ProjectPrev {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        isMobile: state.switchVersion.isMobile
    }
};

export default connect(mapStateToProps)(ProjectPrev)