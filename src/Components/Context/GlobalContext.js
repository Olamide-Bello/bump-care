import { createContext, useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

export const GlobalContext = createContext({
    upperCase: () => { },
    handleReset: () => { },
    openReset: false,
    prevPath: "",
    setPrevPath: () => { },
    matches: window.matchMedia("(max-width: 780px)").matches,
})

function GlobalState({ children }) {
    const [openReset, setOpenReset] = useState(false)
    const [prevPath, setPrevPath] = useState("")
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 780px)").matches
    )

    const handleReset = () => {
        setOpenReset(!openReset)
    }


    useEffect(() => {
        window
            .matchMedia("(max-width: 780px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    

    const contextValue = {
        matches,
        handleReset,
        openReset,
        prevPath,
        setPrevPath
    }
    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState