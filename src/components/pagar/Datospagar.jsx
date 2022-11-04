import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import './pagar.scss'

const Datospagar = () => {
    const navigate=useNavigate()
const confirm=()=>{
    navigate('/confirm')
}
  return (
    <div className='pagar'>Datospagar 
    <button onClick={confirm} className='pagar__button'>Pagar ahora</button>
    
    </div>
  )
}

export default Datospagar