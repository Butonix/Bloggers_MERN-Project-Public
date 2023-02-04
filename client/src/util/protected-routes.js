import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, redirectPath, children }) => {
  return user && user?._id ? children : <Navigate to={redirectPath} />;
};

export default ProtectedRoute;
