import { createContext, useContext, useState } from 'react';
import { auth } from "../api/firebase";
import { onAuthStateChanged } from "firebase/auth"


export const AuthContext = createContext();
export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    onAuthStateChanged(auth, data => {
        if (data) {
            setUser(data)
        } else {
            setUser(null)
        }
    })

     return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
     )
}
