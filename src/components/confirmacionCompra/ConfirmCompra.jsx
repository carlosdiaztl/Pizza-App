import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const ConfirmCompra = () => {
  const  navigate=useNavigate()
const GoHome=()=>{
navigate('/')
}
  return (
    <div>ConfirmCompra
    <button onClick={GoHome} > Aceptar </button>
    
    
    </div>
  )
}

export default ConfirmCompra