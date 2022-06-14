import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoutes = ({ children }) => {

  const { token } = useSelector((state) => state.auth);

  return !!token
    ? <Navigate to="/" />
    : children
}