import { createContext, useEffect, useMemo, useRef, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

export const GlobalContext = createContext({
    logUser: () => { },
    upperCase: () => { },
    logged: false,
    logOut: () => { },
    handleReset: () => {},
    openReset: false,
    user: {},
    token: "",
    handleUser: () => { },
    matches: window.matchMedia("(max-width: 780px)").matches,
    normalScreen: window.matchMedia("(min-width: 781px) and (max-width: 1100px)").matches
})

function GlobalState({ children }) {
    const [openReset, setOpenReset] = useState(false)
    const [logged, setLogged] = useState(false)
    const [token, setToken] = useState(
        () => {
            const savedSession = localStorage.getItem("token");
            if (savedSession) {
                return savedSession;
            } else {
                return "";
            }
        }
    )
    const [user, setUser] = useState(
        () => {
            const savedUser = localStorage.getItem("user");
            if (token) {
                setLogged(true)
                return JSON.parse(savedUser);
            } else {
                return {};
            }
        }
    )
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 780px)").matches
    )
    const [normalScreen, setNormalScreen] = useState(
        window.matchMedia("(min-width: 781px) and (max-width: 1100px)").matches
    )

    const handleReset = () => {
        setOpenReset(!openReset)
    }


    const logOut = () => {
        setLogged(false)
    }


    const logUser = (newToken) => {
        setToken(newToken)
        setLogged(true)
    }

    const handleUser = (userData) => {
        setUser(userData)
    }

    useEffect(() => {
        window
            .matchMedia("(max-width: 780px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    useEffect(() => {
        window
            .matchMedia("(min-width: 781px) and (max-width: 1100px)")
            .addEventListener('change', e => setNormalScreen(e.matches));
    }, []);
    

    const contextValue = {
        logUser,
        logged,
        logOut,
        matches,
        handleReset,
        openReset,
        user,
        token,
        handleUser,
        normalScreen
    }
    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState