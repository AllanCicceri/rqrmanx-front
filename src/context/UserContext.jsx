import React, { createContext, useState } from 'react';


const UserCtx = createContext();

// Provedor do contexto
const UserCtxProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    

    return (
        <UserCtx.Provider value={[user, setUser]}>
            {children}
        </UserCtx.Provider>
    );
};

export {UserCtx, UserCtxProvider};