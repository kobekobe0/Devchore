import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
    const token = localStorage.getItem('token')
    if (!token) return false
    return true
    //add jwt verify here
}

function ProtectedRoutes() {
    const isAuth = useAuth()

    return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes
