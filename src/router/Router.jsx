import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "../components/App";
import Noexist from "../components/noExist/Noexist";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                    <Route element={<App/>}>
                        {/* <Route path="vuelo"  element={<SelectVuelos/> } />
                        <Route path="vueloidavuelta"  element={<Vueloidaregresp/> } /> */}
                    </Route>
                    
                    <Route path="*" element={<Noexist/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;