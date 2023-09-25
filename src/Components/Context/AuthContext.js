import { createContext, useContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, FacebookAuthProvider, signOut, onAuthStateChanged, signInWithRedirect, signInWithPopup } from 'firebase/auth'
import { auth } from '../../Firebase_setup/Firebase'
import { GlobalContext } from './GlobalContext'
import { toast } from 'react-toastify'


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
    const {matches} = useContext(GlobalContext)

    const googleSignIn = () => {
        try {
            const provider = new GoogleAuthProvider();
            if (matches) {
                signInWithPopup(auth, provider)
            } else {
                signInWithRedirect(auth, provider)
            }
        }
        catch(error) {
            toast.warning(error.message)
        }
    }

    const facebookSignIn = () => {
        try {
            const provider = new FacebookAuthProvider();
            signInWithPopup(auth, provider)

        } catch(error) {
            toast(error.message)
        }
            
    }


    const logOut = () => {
        signOut(auth)
        setUser({})
        setLogged(false)
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