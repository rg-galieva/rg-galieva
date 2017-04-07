import {GET_PROJECT_BY_ID, GET_PROJECTS} from '../constants'
import projectsDB from '../assets/db/projects'

const findProjectById = (id, projects) => {
    return projects.filter((project) => {
        return +project.id === +id
    })[0]
}

export const getProjectById = (id, projects = projectsDB) => {
    console.log("---", id);
    return {
        type: GET_PROJECT_BY_ID,
        active_project: findProjectById(id, projects)
    }
};

export const getProjects = () => {
    return {
        type: GET_PROJECTS,
        all: projectsDB
    }
}