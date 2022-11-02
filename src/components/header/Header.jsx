import React, {useContext} from 'react'
import { AppContext } from '../App';
import ButtonHeader from './ButtonHeader'

const Header = () => {
   

    const {theme, setTheme,user,setUser} = useContext(AppContext);
   
    
    const CloseSession=()=>{
        setUser({})
        
    }


    return (
        <>
        <div className={`header header`}>
            <div>
        {theme}
            <h1> Carlota pizzería</h1>
            {Object.entries(user).length === 0?<h2> Bienvenido  </h2>:<><h2> Bienvenido {user.profile.name}   </h2>  <h3> ¿Que pizza deseas el dia de hoy ?</h3> <button onClick={CloseSession}> Log out</button> </> }
            
            <ButtonHeader />
            </div>
            </div>
            </>
    )
}

export default Header