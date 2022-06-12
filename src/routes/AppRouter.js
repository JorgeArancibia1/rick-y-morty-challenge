import React from 'react'
import { Home } from '../screens/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { DetailCharacter } from '../screens/DetailCharacter';
import { DetailEpisode } from '../screens/DetailEpisode';
import { DetailLocation } from '../screens/DetailLocation';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/detail-character/:id" element={<DetailCharacter />}></Route>
        <Route path="/detail-location/:id" element={<DetailLocation />}></Route>
        <Route path="/detail-episode/:id" element={<DetailEpisode />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
