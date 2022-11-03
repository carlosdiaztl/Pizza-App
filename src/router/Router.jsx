import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App";
import Noexist from "../components/noExist/Noexist";
import Pizzas from "../components/pizzasComponents/Pizzas";
import SearchPizzas from "../components/searchPizzas/SearchPizzas";
export const AppContext = createContext({});

const Router = () => {
  const [value, setValue] = useState(1);
  const [user, setUser] = useState({});

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
        
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route element={<App />}>
            <Route path="/searchPizzas" element={<SearchPizzas />} />
          </Route>
          {pizzasList.map((item, index) => (
            <Route
              key={index}
              path={`/${item.name}`}
              element={<Pizzas name={item.name} />}
            />
          ))}

          <Route path="*" element={<Noexist />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Router;
