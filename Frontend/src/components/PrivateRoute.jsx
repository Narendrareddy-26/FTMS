import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, role }) {
  const userRole = localStorage.getItem("role");

  if (!userRole) return <Navigate to="/" />;
  if (userRole !== role) return <Navigate to="/" />;

  return children;
}
