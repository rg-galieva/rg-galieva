import {GET_PROJECTS, GET_PROJECT_BY_ID} from '../constants'
import projectsDB from '../assets/db/projects.json'

const initialState = {
    projects: projectsDB
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.projects
            }

        case GET_PROJECT_BY_ID:
            return {
                ...state,
                project: action.project
            }

        default:
            return state;
    }
}