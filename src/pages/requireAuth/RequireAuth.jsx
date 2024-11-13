import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import Home from "../home/Home";

function RequireAuth() {
  const { user } = useAuthContext();
  const location = useLocation();

  return user ? <Home /> : <Navigate to="/login" state={{ from: location }} />;
}

export default RequireAuth;
