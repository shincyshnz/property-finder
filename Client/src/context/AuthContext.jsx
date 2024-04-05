import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children })=>{
    const [userData, setUserData] = useState(null);

    const handleUserData =(user)=>{
        setUserData(user);
    }

    const deleteUserData = ()=>{
        setUserData(null);
    }

    return <AuthContext.Provider value={{userData, handleUserData, deleteUserData}}>
        {children}
    </AuthContext.Provider>
};

