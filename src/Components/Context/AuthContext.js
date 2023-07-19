import { createContext, useContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, FacebookAuthProvider, signOut, onAuthStateChanged, signInWithPopup, signInWithRedirect } from 'firebase/auth'
import { auth } from '../../Firebase_setup/Firebase'


export const AuthContext = createContext({
    googleSignIn: () => { },
    user: {},
    facebookSignIn: () => { },
    logOut: () => { },
    setUser: () => { }
})
// // UserAuth Function Must Begin With Capital Letter Cos Of useContext Call
// export const UserAuth = () => {
//     return useContext(AuthContext)
// };

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        // signInWithPopup(auth, provider)
        signInWithRedirect(auth, provider)
            // .then((result) => {
            //     console.log(result)
            //     setUser(result.user)
            // }).catch((error) => {
            //     const errorCode = error.code
            //     const errorMsg = error.message
            //     alert(error)
            //     console.log(error)
            // })
    }

    const facebookSignIn = () => {
        const provider = new FacebookAuthProvider();
        // signInWithPopup(auth, provider)
        signInWithRedirect(auth, provider)
            .then((result) => {
                setUser(result.user)
            }).catch((error) => {
                const errorCode = error.code
                const errorMsg = error.message
                alert(error)
                console.log(error)
            })
    }


    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const manageUserState = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('user', currentUser)
        })
        console.log(user)
        return () => {
            manageUserState();
        }
    }, [])

    return (
        <AuthContext.Provider value={{ googleSignIn, facebookSignIn, user, setUser, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider