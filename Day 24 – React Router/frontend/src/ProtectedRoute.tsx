import {Navigate} from "react-router-dom";
import type { JSX } from "react/jsx-dev-runtime";

const ProtectedRoute = ({
  isLoggedIn,
  children,     
}: {
  isLoggedIn: boolean;
  children: JSX.Element;   
}) => {
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default ProtectedRoute; 