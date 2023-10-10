import React, { createContext, useState } from 'react';


const ProjectContext = createContext();

// Provedor do contexto
const ProjectCtxProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    return (
        <ProjectContext.Provider value={[projects, setProjects]}>
            {children}
        </ProjectContext.Provider>
    );
};

export {ProjectContext, ProjectCtxProvider};