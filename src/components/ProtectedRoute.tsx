import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../app/store";

function ProtectedRoute() {
  const { token } = useSelector((state: RootState) => state.auth);
  if (!token) return <Navigate to="/login" />;
  return <Outlet />;
}

export default ProtectedRoute;
