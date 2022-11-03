import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Datospagar = () => {
    const navigate=useNavigate()
const confirm=()=>{
    navigate('/confirm')
}
  return (
    <div>Datospagar 
    <button onClick={confirm}>Pagar ahora</button>
    
    </div>
  )
}

export default Datospagar