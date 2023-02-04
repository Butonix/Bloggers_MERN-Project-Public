import { Navigate } from "react-router-dom";

const AdminRoute = ({ user, redirectPath, children }) => {
  return user && user?._id && user.role === "admin" ? children : <Navigate to={redirectPath} />;
};

export default AdminRoute;
