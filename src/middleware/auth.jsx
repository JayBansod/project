import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userData, setUserData] = useState("");
    //for storing token
    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };
    // get current user data
    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: token,
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log("user data from auth.jsx", data);
                setUserData(data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        userAuthentication();
    }, []);

    return <AuthContext.Provider value={{ storeTokenInLS, userData }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
