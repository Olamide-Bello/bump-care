import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./Context/AuthContext"


function ProtectedRoute({children}) {
    const {logged} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!logged) {
            return navigate('/login', {replace: true})
        }
    }, [logged, navigate])

  return children
}

export default ProtectedRoute