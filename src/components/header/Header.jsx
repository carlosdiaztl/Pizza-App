import React, {useContext} from 'react'
import { AppContext } from '../App';
import ButtonHeader from './ButtonHeader'

const Header = () => {

    const {theme,user,setUser} = useContext(AppContext);
    
    const CloseSession=()=>{
        setUser({})
    }


    return (
        <div className={`header header`}>
        {theme}
            <h1> Carlota pizzería</h1>
            {Object.entries(user).length === 0?<h2> Bienvenido  </h2>:<><h2> Bienvenido {user.email}   </h2> <button onClick={CloseSession}> Log out</button> </> }
            
            <ButtonHeader />
        </div>
    )
}

export default Header