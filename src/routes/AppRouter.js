import React from 'react'
import { Home } from '../screens/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { DetailCharacter } from '../screens/DetailCharacter';
import { DetailEpisode } from '../screens/DetailEpisode';
import { DetailLocation } from '../screens/DetailLocation';
import { useSelector } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  const { token, checking } = useSelector((state) => state.auth);
  // const { uid, checking } = state;
  console.log(token);

  // if (checking) {
  //   return <h5>Espere...</h5>;
  // }

  return (
    <BrowserRouter>
      <Routes>
        <PrivateRoute
          path="/test"
          element={<Home />}
          isAuthenticated={false} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/detail-character/:id" element={<DetailCharacter />}></Route>
        <Route path="/detail-location/:id" element={<DetailLocation />}></Route>
        <Route path="/detail-episode/:id" element={<DetailEpisode />}></Route>

        <Route path="*" element={<h1>404 Not found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
