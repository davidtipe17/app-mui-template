import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

const [user, setUser] = useState({});

const login = (user, pass) => {
    if(user === "admin" && pass === "1234") {

        const authUser = {
            user: user,
            name: "David Tipe"
        }
        setUser(authUser);
        return true;
    }
    return false;
}

const logout = () => {
    setUser({});
}
const isAuth = () => {
    return user.name ? true : false;
}


  return <AuthContext.Provider value={{user, login, logout, isAuth}}>{children}</AuthContext.Provider>;
};
