import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import ProjectPrev from '../../components/prj-prev'
import Slider from 'react-slick'
import configDesktop from '../../components/slider/config_main'
import configMobile from '../../components/slider/config_mobile'

const ProjectList = (props) => {
    const projects = props.projects.map((project) => <div key={project.id}><ProjectPrev {...project}/></div>)
    const config = (props.isMobile) ? configMobile : configDesktop;

    return (
        <Slider {...config}>
            { projects }
        </Slider>
    )
}

ProjectList.PropTypes = {
    projects: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects.all,
        isMobile: state.switchVersion.isMobile
    }
};

export default connect(mapStateToProps)(ProjectList);