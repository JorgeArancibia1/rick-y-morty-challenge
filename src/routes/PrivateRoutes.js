import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoutes = ({ children, isAutenticathed }) => {

  const { token } = useSelector((state) => state.auth);

  return children

  // return !!token
  //   ? children
  //   : <Navigate to="/login" />
}