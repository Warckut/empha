import { Navigate, useOutletContext, Route } from "react-router-dom";
import { PropsWithChildren } from "react";

interface ProtectedRouteParams extends PropsWithChildren {
  role: string;
}

const ProtectedRoute = ({ role, children }: ProtectedRouteParams) => {
  const context = useOutletContext();
  console.log(role);
  console.log(context);
  // if (!context.user || !context.user?.role.includes(role)) {
  // return <Navigate to="/" replace />;
  // }

  return <Route>{children}</Route>;
  // return <Outlet context={context}>{children}</Outlet>;
};

export default ProtectedRoute;
