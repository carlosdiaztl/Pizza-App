import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Register from "../components/register/Register";
import LoginPrincial from '../components/LoginH/LoginPrincipal'



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPrincial/>} />
        <Route path="home" element={<Home/>}></Route>
        <Route path="register" element={<Register/>} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
