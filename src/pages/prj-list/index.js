import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import ProjectPrev from '../../components/prj-prev'
import Slider from 'react-slick'
import config from '../../components/slider/config_main'

const ProjectList = (props) => {
    const projects = props.projects.map((project) => <div key={project.id}><ProjectPrev {...project}/></div>)

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
        projects: state.projects.all
    }
};

export default connect(mapStateToProps)(ProjectList);