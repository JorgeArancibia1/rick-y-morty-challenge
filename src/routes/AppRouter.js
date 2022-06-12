import React from 'react'
import { Home } from '../screens/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from '../screens/Login';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
