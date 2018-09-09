import { GET_PROJECTS, GET_PROJECT_BY_ID } from 'client/constants';
import projectsDB from 'client/assets/db/projects';

const projects = projectsDB.filter(project => project.isVisible);

const initialState = {
  all: projects,
  activeProject: projects[0],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        all: action.projects,
      };

    case GET_PROJECT_BY_ID:
      return {
        ...state,
        activeProject: action.activeProject,
      };

    default:
      return state;
  }
};
