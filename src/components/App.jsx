import React, { createContext, useState } from "react";
import "../style.scss";
import Dashboard from "./dashboard/Dashboard";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Carousel from "./carousel/Carousel";

export const AppContexts = createContext({});

const App = () => {
  const [theme, setTheme] = useState(false);
 
  const [pizzas, setPizzas] = useState([]);

  return (
    <AppContexts.Provider
      value={{
        theme,
        setTheme,
        
        pizzas,
        setPizzas,
      }}
    >
      <Header />
      <div className="main">
        <Sidebar />
        <Carousel />
        {/* <Dashboard /> */}
      </div>
      <Footer />
    </AppContexts.Provider>
  );
};
export default App;
