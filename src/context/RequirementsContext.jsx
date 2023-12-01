import React, { createContext, useState } from 'react';


const RequirementContext = createContext();

// Provedor do contexto
const RequirementCtxProvider = ({ children }) => {
    const [requirements, setRequirements] = useState([]);
    
    return (
        <RequirementContext.Provider value={[requirements, setRequirements]}>
            {children}
        </RequirementContext.Provider>
    );
};

export {RequirementContext, RequirementCtxProvider};