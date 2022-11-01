import React, { createContext, useState } from "react";
import "../style.scss";
import Dashboard from "./dashboard/Dashboard";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import RegisterForm from "./register/RegisterForm";
export const AppContext = createContext({});

const App = () => {

    const [theme, setTheme] = useState(false)
    const [user, setUser] = useState({})

    return (
        <AppContext.Provider value={{
            theme,
            setTheme,
            user,
            setUser
        }}>
            <Header />
            <div className="main">
                <Sidebar />
                <Dashboard />
                <RegisterForm />
            </div>
        </AppContext.Provider>
    )
}
