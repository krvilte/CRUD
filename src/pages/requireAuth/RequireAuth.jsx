import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

function RequireAuth() {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading) {
    return (
      // Loading State
      <div className="bg-slate-900 flex items-center justify-center h-screen">
        <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-3 border-t-blue-600"></div>
      </div>
    );
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}

export default RequireAuth;
