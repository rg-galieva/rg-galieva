import React, { PropTypes, Component } from 'react'
import ProjectPrev from '../../components/prj-prev'
import {Link} from 'react-router-dom'
import projectsDB from '../../assets/db/projects.json'
import s from './_styles.pcss'

class ProjectList extends Component {
    constructor() {
        super();

        this.state = {
            projects: projectsDB
        }
    }

    getProjects = () => {
        let projects = projectsDB.map((project) => <ProjectPrev key={project.id} {...project} url={`/projects/${project.id}`}/>);
        return projects
    }

    render() {
        return (
            <div className={s.page}>
                <ProjectPrev {...this.state.projects['0']}/>

                <div className={s.slider}>
                    <Link to="/projects"/>
                </div>
            </div>
        )
    }
}

export default ProjectList;