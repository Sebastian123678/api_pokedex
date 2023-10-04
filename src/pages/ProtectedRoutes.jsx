import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {

    const trainer = useSelector(store => store.trainer) // Traemos el estado global

    if (trainer.length > 2) {
        return <Outlet /> // Outlet renderizar las rutas hijas
    } else {
        return <Navigate to='/'/> // Navegar a la home
    }
}

export default ProtectedRoutes