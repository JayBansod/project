import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userData, setUserData] = useState("");
    const [accountData, setAccountData] = useState([]);
    const [transction, setTransction] = useState([]);
    //for storing token
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };
    // get current user data
    const userAuthentication = async () => {
        try {
            const response = await fetch("https://jaybansod.github.io/api/auth/user", {
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

    // show all account
    const getAccountData = async () => {
        try {
            const response = await fetch("https://jaybansod.github.io/api/account/showAllBanks", {
                method: "GET",
                headers: {
                    Authorization: token,
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log("getAccountData from auth.jsx ", data);
                setAccountData(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    //show all transcation
    const showTranscation = async () => {
        try {
            const response = await fetch("https://jaybansod.github.io/api/account/showAllTransction", {
                method: "GET",
                headers: {
                    Authorization: token,
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log("showTranscation from auth.jsx ", data);
                setTransction(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // for logout
    const logout = () => {
        setToken("");
        localStorage.removeItem("token");
    };

    // user is login or not
    let isUserLogin = !!token;

    // call functions
    const callGetAccountData = () => {
        getAccountData();
    };
    const callUserAuthentication = () => {
        userAuthentication();
    };
    const callShowTranscation = () => {
        showTranscation();
    };
    useEffect(() => {
        // setToken(localStorage.getItem("token"));
        // userAuthentication();
        // showTranscation();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                callGetAccountData,
                callUserAuthentication,
                callShowTranscation,
                storeTokenInLS,
                userData,
                accountData,
                transction,
                logout,
                isUserLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
