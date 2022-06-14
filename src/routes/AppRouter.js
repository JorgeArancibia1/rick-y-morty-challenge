import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from '../screens/Login';
import { useSelector } from 'react-redux';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { Register } from '../screens/Register';
import { HomeRoutes } from './HomeRoutes';



export const AppRouter = () => {
  const { token, checking } = useSelector((state) => state.auth);

  // if (checking) {
  //   return <h5>Espere...</h5>;
  // }

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        } />
        <Route path="/register" element={
          <PublicRoutes>
            <Register />
          </PublicRoutes>
        } />

        <Route path="/*" element={
          <PrivateRoutes>
            <HomeRoutes />
          </PrivateRoutes>
        } />

      </Routes>
    </BrowserRouter>
  );
}
