import React, { createContext, useState } from 'react';


const ProjectContext = createContext();

// Provedor do contexto
const ProjectCtxProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    

    return (
        <ProjectContext.Provider value={[projects, setProjects, selectedProject, setSelectedProject]}>
            {children}
        </ProjectContext.Provider>
    );
};

export {ProjectContext, ProjectCtxProvider};