import React from "react";
import {BrowserRouter ,Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Cadastre from "./pages/Cadastre";
import User from "./pages/User";
function App() {
    return(
        <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}/>
        <Route path="/cadastre" element={<Cadastre/>}/>
        <Route path="/hospede" element={<Cadastre/>}/>
        <Route path="/comercios" element={<Cadastre/>}/>
        <Route path="/user" element={<User/>}/>
     </Routes>
     </BrowserRouter>

    )
};
export default App;

