import { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, FacebookAuthProvider, signOut, onAuthStateChanged, signInWithRedirect } from 'firebase/auth'
import { auth } from '../../Firebase_setup/Firebase'


export const AuthContext = createContext({
    googleSignIn: () => { },
    user: {},
    facebookSignIn: () => { },
    logOut: () => { },
    setUser: () => { },
    logged: false
})


const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [logged, setLogged] = useState(false)

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }

    const facebookSignIn = () => {
        const provider = new FacebookAuthProvider();
        signInWithRedirect(auth, provider)
            
    }


    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const manageUserState = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            if(currentUser) {
                setLogged(true)
            }
            console.log('user', currentUser)
        })
        return () => {
            manageUserState();
        }
    }, [])

    return (
        <AuthContext.Provider value={{ googleSignIn, facebookSignIn, user, setUser, logOut, logged }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider