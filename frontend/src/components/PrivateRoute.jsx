import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // check login
  if (!token) {
    return <Navigate to="/login" />; // redirect if not logged in
  }
  return children; // allow access if logged in
};

export default PrivateRoute;
