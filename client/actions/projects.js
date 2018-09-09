import { GET_PROJECT_BY_ID, GET_PROJECTS } from '../constants';
import projectsDB from '../assets/db/projects';

const findProjectById = (id, projects) => projects.filter(project => +project.id === +id)[0];

export const getProjectById = (id, projects = projectsDB) => {
  const prj = findProjectById(id, projects);

  return {
    type: GET_PROJECT_BY_ID,
    activeProject: prj,
  };
};

export const getProjects = () => ({
  type: GET_PROJECTS,
  all: projectsDB,
});
