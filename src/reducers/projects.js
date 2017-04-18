import {GET_PROJECTS, GET_PROJECT_BY_ID} from '../constants'
import projectsDB from '../assets/db/projects'

const projects = projectsDB.filter((project) => { return project.isVisible })

const initialState = {
    all: projects,
    active_project: projects[0]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                all: action.projects
            }

        case GET_PROJECT_BY_ID:
            return {
                ...state,
                active_project: action.active_project
            }

        default:
            return state;
    }
}