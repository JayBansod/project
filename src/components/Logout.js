import { useEffect } from "react";
import { useAuth } from "../middleware/auth";
import { Navigate } from "react-router-dom";
function Logout() {
    const { logout } = useAuth();
    useEffect(() => {
        logout();
    }, [logout]);
    return <Navigate to="/login" />;
}
export default Logout;
