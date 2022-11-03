import React,{useState,useEffect,useCallback,useContext} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { pizzaBuscada } from '../../services/pizzaBuscada';
import Header from '../header/Header';
import { AppContext } from '../../router/Router';

const Pizzas = ({name}) => {
  const {value, setValue}=useContext(AppContext);
 const  navigate=useNavigate()
  console.log(name);
  const [busqueda, setBusqueda] = useState([])
  const traerPizza = useCallback( async() => {
    const LaPizza = await pizzaBuscada(name);
    if (LaPizza.length){
    setBusqueda(LaPizza[0])

    }
    else{}
    },
    []
  );
  useEffect(() => {
    traerPizza()

    
  }, [setBusqueda])
console.log(busqueda);
const goHome=()=>{
  navigate('/')

}
  
  return (

    <div>
    <button onClick={goHome}> Regresar</button>
    
    
    
    buscate la pizza {name} 

    <img src={busqueda.imagenes} />
    <h2>{busqueda.pizza}  </h2>
    <h4>{busqueda.ingredientes}  </h4>
    <h3>Precio:{busqueda.precio} </h3>
    <button> -</button>
    <span>Cantidad:{value} </span>
    <button> +</button>
    <button> canasta</button>
    <button> pagar</button>
    
     </div>
  )
}

export default Pizzas