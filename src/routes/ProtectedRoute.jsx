import { Navigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { PATHS } from "./path";



const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to={PATHS.LOGIN} replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
