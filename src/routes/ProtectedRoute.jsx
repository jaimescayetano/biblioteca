import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Loading from "../components/Loading";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />
  }

  if (user) {
    return children;
  }

  return <Navigate to="/auth/login" replace="true" />
}

export default ProtectedRoute
