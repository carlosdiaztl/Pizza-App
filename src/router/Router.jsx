import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App";
import ConfirmCompra from "../components/confirmacionCompra/ConfirmCompra";
import Noexist from "../components/noExist/Noexist";
import Datospagar from "../components/pagar/Datospagar";
import Pizzas from "../components/pizzasComponents/Pizzas";
import SearchPizzas from "../components/searchPizzas/SearchPizzas";
export const AppContext = createContext({});

const Router = () => {
  const [value, setValue] = useState(1);
  const [user, setUser] = useState({});
  const [busqueda, setBusqueda] = useState([])

  const pizzasList = [   { name: "Carnes", }, { name: "Dosquesomanzana",}, {name: "Hawaiana",}, { name: "Mediterranea",}, { name: "Napolitana",
    },{ name: "Peperoniychampiñones", }, {  name: "Polloytocineta",},{  name: "Quesoazulsalmon",},{  name: "Quesoazuljamon",},{  name: "Tocinetamaiztierno",},
  ];
  console.log(pizzasList);
  return (
    <AppContext.Provider
      value={{
        value,
        setValue,
        user,
        setUser,
        busqueda,
        setBusqueda
        
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route element={<App />}>
          </Route>
            <Route path="/searchPizzas" element={<SearchPizzas />} />
          {pizzasList.map((item, index) => (
            <Route
              key={index}
              path={`/${item.name}`}
              element={<Pizzas name={item.name} />}
            >
            </Route>
          ))}
          <Route path="datos" element={<Datospagar/>} />
          <Route path="/confirm" element={<ConfirmCompra/>} />
          

          <Route path="*" element={<Noexist />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Router;
