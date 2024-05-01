import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectAuth } from "../features/authSlice";

function ProtectedRoute() {
  const { token } = useSelector(selectAuth);
  if (!token) return <Navigate to="/login" />;
  return <Outlet />;
}

export default ProtectedRoute;
