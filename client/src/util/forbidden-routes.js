import { Navigate } from "react-router-dom";

const ForbiddenRoute = ({ user, redirectPath, children }) => {
  console.log(user);
  return user && user?._id ? <Navigate to={redirectPath} /> : children;
};

export default ForbiddenRoute;
