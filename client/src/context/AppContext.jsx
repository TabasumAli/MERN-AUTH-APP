import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const AppContextProvider = (props) => {
    axios.defaults.withCredentials = true;

    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(false);

    const getAuthState = async () => {
        try {
            const {data} = await axios.get(backendURL + "api/auth/is-auth");
            console.log("Auth state data: ", data);
            if(data.success){
                setIsLoggedIn(true);
                getUserData();
            } else {
                setIsLoggedIn(false);
            }
        } catch (error) {
            console.log("Error in user auth: ", error);
            setIsLoggedIn(false);
        }   
    }

    const getUserData = async () => {
        try {
            const response = await axios.get(backendURL + "api/user/profile");
            // alert("Successfully set the user data");
            console.log("After login, getting user data: ", response);

            response.status === 200 ? setUserData(response.data) : toast.error("Could not fetch user data");
        } catch (error) {
            console.log("Error in fetching user data: ", error);
            toast.error("Could not fetch user data");
        }
    }


    useEffect(() => {
        axios.defaults.withCredentials = true;
        getAuthState();
    }, []);

    
    const value = {
        backendURL,
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
        getUserData
    }


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
}
export const AppContext = createContext();