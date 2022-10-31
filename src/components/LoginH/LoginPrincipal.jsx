import React, { createContext, useState } from 'react'

import '../LoginH/style.scss'
import Login from './login/Login'

export const AppContext = createContext({})

const App = () => {

    const [theme, setTheme] = useState("pink")

    return (
        <AppContext.Provider value={{
            theme,
            setTheme,
        }}>
            <div className="main">
            <Login/>
                
            </div>
        </AppContext.Provider>
    )
}

export default App