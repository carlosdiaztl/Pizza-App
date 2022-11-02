import React, { createContext, useState } from "react";
import "../style.scss";
import Dashboard from "./dashboard/Dashboard";
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
                <Dashboard />
            </div>
        </AppContext.Provider>
    )
}
export default App