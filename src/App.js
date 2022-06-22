import React from "react";
import {BrowserRouter ,Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Cadastre from "./pages/Cadastre";
function App() {
    return(
        <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}/>
        <Route path="/cadastre" element={<Cadastre/>}/>
     </Routes>
    </BrowserRouter>
    )
};
export default App;

