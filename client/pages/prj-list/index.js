import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import ProjectPrev from '../../components/prj-prev'
import Slider from 'react-slick'
import configDesktop from '../../components/slider/config_main'
import configMobile from '../../components/slider/config_mobile'

class ProjectList extends Component {
    getProjects = () => this.props.projects.map(
        (project) => {
            return <div key={project.id}>
                <ProjectPrev {...project} isMobile={this.props.isMobile}/>
            </div>
        }
    )

    getConfig = () => {
        let config = (this.props.isMobile) ? configMobile : configDesktop;
        if (this.props.match.params.id) {
            config.initialSlide = +(this.props.match.params.id) - 1
        }

        return config
    }


    render() {
        return (
            <Slider {...this.getConfig()} ref='slider'>
                { this.getProjects() }
            </Slider>
        )
    }
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