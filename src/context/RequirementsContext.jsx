import React, { createContext, useState } from 'react';


const RequirementContext = createContext();

// Provedor do contexto
const RequirementCtxProvider = ({ children }) => {
    const [requirements, setRequirements] = useState([]);
    const [selectedRequirement, setSelectedRequirement] = useState(null)
    
    return (
        <RequirementContext.Provider value={[requirements, setRequirements, selectedRequirement, setSelectedRequirement]}>
            {children}
        </RequirementContext.Provider>
    );
};

export {RequirementContext, RequirementCtxProvider};