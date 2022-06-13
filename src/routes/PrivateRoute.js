
import { Route, Navigate } from 'react-router-dom';


export const PrivateRoute = ({
  isAuthenticated,
  element,
  path,
  ...rest
}) => {
  console.log(element);

  return (
    isAuthenticated ?
      <Route path={path} element={element} />
      :
      <Navigate to="/login" />
  )
}