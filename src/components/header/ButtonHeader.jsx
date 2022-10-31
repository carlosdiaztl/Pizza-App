import React, { useContext } from 'react'
import { AppContext } from '../App'
import Form from './Form';

const ButtonHeader = () => {

  const { setTheme, theme } = useContext(AppContext);

  const handleChange = ({target}) => {
    setTheme(target.value)
  }
  const ShowLogin=()=>{
    setTheme(<Form/>)
  }

  return (
    <>
    

    
    <button onClick={ShowLogin}> Loggeate </button>
    </>
  )
}

export default ButtonHeader