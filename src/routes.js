import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";

import Cadastre from '../src/pages/Cadastre/index';
function Routes(){
    return(
        <BrowserRouter>
            <Route path="/cadastre-se" component={Cadastre}/>
        </BrowserRouter>
    )
}
export default Routes;