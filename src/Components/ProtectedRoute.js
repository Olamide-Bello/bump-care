import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./Context/AuthContext"
import { GlobalContext } from "./Context/GlobalContext"


function ProtectedRoute({children}) {
    const {logged} = useContext(AuthContext)
    const {setPrevPath} = useContext(GlobalContext)
    const navigate = useNavigate()

    useEffect(() => {
        console.log(window.location.pathname)
        setPrevPath(window.location.pathname)
        if (!logged) {
            return navigate('/login', {replace: true})
        }
    }, [logged, navigate, setPrevPath])

  return children
}

export default ProtectedRoute