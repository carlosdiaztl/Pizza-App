import React,{useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import './confirmacion.scss'
import { protectedRoute } from "../utils/ruta";
const ConfirmCompra = () => {
  const  navigate=useNavigate()
  useEffect(() => {
    protectedRoute(navigate)
   
    
 
    
  }, [])

const GoHome=()=>{
navigate('/')
}


  return (
    <div className='confirmation'>
    <iframe src="https://giphy.com/embed/3o7bu8sRnYpTOG1p8k" width="300" height="300" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pizza-loading-snacks-3o7bu8sRnYpTOG1p8k"></a></p>
    <section className='confirmation__parrafo'>
    <h1>Tu pedido está en proceso  </h1>
    <p> seras notificado cuando llegue el repartidor
    </p>
    </section>
    <button onClick={GoHome} className='confirmation__button'> Aceptar </button>
    
    
    </div>
  )
}

export default ConfirmCompra