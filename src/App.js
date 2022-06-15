import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Cadastre from "./pages/Cadastre";
function App() {
    return(
        <div>
     <Home/>
     <Routes>
        <Route path="/cadastre" element={Cadastre}/>
     </Routes>
        </div>
    )
};
export default App;

