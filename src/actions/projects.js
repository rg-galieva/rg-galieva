import {GET_PROJECT_BY_ID, GET_PROJECTS} from '../constants'
import projectsDB from '../assets/db/projects.json'

const findProjectById = (id, projects) => {
    return projects.filter((project) => {
        return project.id === id
    })[0]
}

export const getProjectById = (id) => {
    return {
        type: GET_PROJECT_BY_ID,
        project: findProjectById(id, projectsDB)
    }
};

export const getProjects = () => {
    return {
        type: GET_PROJECTS,
        projects: projectsDB
    }
}