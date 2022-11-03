import React, { createContext, useState } from "react";
import "../style.scss";
import Dashboard from "./dashboard/Dashboard";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

export const AppContext = createContext({});

const App = () => {

    const [theme, setTheme] = useState(false)
    const [user, setUser] = useState({})
    const [pizzas, setPizzas] = useState([])

    return (
        <AppContext.Provider value={{
            theme,
            setTheme,
            user,
            setUser,
            pizzas,
            setPizzas
        }}>
            <Header />
            <div className="main">
                <Sidebar />
                {/* <Dashboard /> */}
            </div>
            <Footer/>
        </AppContext.Provider>
    )
}
export default App