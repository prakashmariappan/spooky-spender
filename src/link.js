import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from './components/landingpage';
import Dashboard from "./components/dashboard";
const Link = () => {
    return (
        <>
             <BrowserRouter>
             <Routes>
             <Route path="/" element={<Landingpage />} exact />
             <Route path="/dashboard" element={<Dashboard/>} exact/>
             </Routes>
             </BrowserRouter>
        </>
    );
}

export default Link;
