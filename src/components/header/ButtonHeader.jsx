import React, { useContext } from 'react'
import { AppContext } from '../App'
import RegisterForm from '../register/RegisterForm';
import Form from './Form';

const ButtonHeader = () => {

  const { setTheme, theme } = useContext(AppContext);

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
    

    
    <button onClick={ShowLogin}> Loggeate </button>
    <button onClick={ShowRegister}> Registrate </button>
    </>
  )
}

export default ButtonHeader