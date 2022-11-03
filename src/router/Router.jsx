import React ,{createContext, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "../components/App";
import Noexist from "../components/noExist/Noexist";
import Pizzas from "../components/pizzasComponents/Pizzas";
export const AppContext = createContext({});

const Router = () => {
    const pizzasList=[
        {
            name:"Carnes"
        },
        {
            name:"Mediterranea"

        },
        {
            name:"Napolitana"
        }

    ]
    console.log(pizzasList);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                    <Route element={<App/>}>
                    

                    
                    </Route>
                    {pizzasList.map((item,index)=>(
                        <>

                        <Route key={index} path={`/${item.name}`} element={<Pizzas name={item.name} />} />
                        
                        </>

                    ))}
                    
                    
                    
                    <Route path="*" element={<Noexist/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;