import { onAuthStateChangedAuthUser,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { useState, useEffect, createContext } from "react";

export const UserContext = createContext({
    setCurrentUser: () => { },
    currentUser: null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedAuthUser((authUser) => {
            if(authUser){
                createUserDocumentFromAuth(authUser);
            }
            setCurrentUser(authUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    );
};
