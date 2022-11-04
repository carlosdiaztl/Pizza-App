import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const ConfirmCompra = () => {
  const  navigate=useNavigate()
const GoHome=()=>{
navigate('/')
}
  return (
    <div>
    
    
    <h1>Tu pedido está en proceso  </h1>
    <p> seras notificado cuando llegue el repartidor</p>
    <button onClick={GoHome} > Aceptar </button>
    
    
    </div>
  )
}

export default ConfirmCompra