import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import ProjectPrev from '../../components/prj-prev'
import Slider from 'react-slick'
import configDesktop from '../../components/slider/config_main'
import configMobile from '../../components/slider/config_mobile'

const ProjectList = (props) => {
    const projects = props.projects.map(
        (project) => {
            return <div key={project.id}>
                <ProjectPrev {...project} isMobile={props.isMobile}/>
            </div>
        }
    )

    const config = (props.isMobile) ? configMobile : configDesktop;

    return (
        <Slider {...config}>
            { projects }
        </Slider>
    )
}

ProjectList.PropTypes = {
    projects: PropTypes.array.isRequired,
    isMobile: ProjectList.bool
}

const mapStateToProps = ({projects, switchVersion}) => {
    return {
        projects: projects.all,
        isMobile: switchVersion.isMobile
    }
};

export default connect(mapStateToProps)(ProjectList);