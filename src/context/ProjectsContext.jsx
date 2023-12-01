import React, { createContext, useEffect, useRef, useState } from 'react';
import { GetAllProjects } from '../api/ProjectsEndPoint';

const ProjectContext = createContext();

const ProjectCtxProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [forceReload, setForceReload] = useState(false);


  useEffect(() => {
    async function fetchProjetos() {
      console.log("projectsContext")
      const data = await GetAllProjects();
      setProjects(data);
    }

    fetchProjetos();
  }, [projects, selectedProject]); // Observa mudanças em selectedProject e forceReload



  return (
    <ProjectContext.Provider value={[projects, setProjects, selectedProject, setSelectedProject, setForceReload]}>
      {children}
    </ProjectContext.Provider>
  );
};





export { ProjectContext, ProjectCtxProvider };