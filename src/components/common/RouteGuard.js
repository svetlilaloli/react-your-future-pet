import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export function RouteGuard () {
    const { isAuthenticated } = AuthContext();
    
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />
};