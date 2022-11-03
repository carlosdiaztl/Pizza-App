import React, { useContext } from 'react'
import { AppContexts } from '../App'
import RegisterForm from '../register/RegisterForm';
import Form from './Form';

const ButtonHeader = () => {

  const { setTheme, theme } = useContext(AppContexts);

  const handleChange = ({target}) => {
    setTheme(target.value)
  }
  const ShowLogin=()=>{
    setTheme(<Form/>)
  }
  const ShowRegister=()=>{
    setTheme(<RegisterForm/>)
  }

  return (
    <>
    <div className='header__buttonss'>
    <button onClick={ShowLogin} className="header__buttons"> Ingresar </button>
    <button onClick={ShowRegister} className="header__buttons"> Registrate </button>
    </div>
    
    </>
  )
}

export default ButtonHeader