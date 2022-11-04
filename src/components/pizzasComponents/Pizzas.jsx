import React,{useState,useEffect,useCallback,useContext,useMemo} from 'react'
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
const goPagar=()=>{
  const compra={
    ...busqueda,
    cantidad:value
  }
  sessionStorage.setItem('compra',JSON.stringify(compra))
  console.log(compra);
  setValue(1)
  navigate('/datos')

}
const suma=()=>{
  if (value <= 9) {
    setValue(value+1)
    
  }else{}

}

const resta=()=>{
  if (value >= 2) {
    setValue(value-1)
    
  }else{}

}
  
  return (

    <div className='pizzas'>
    <section className='pizzas__principal'>
    <figure>
    <img src={busqueda.imagenes} />
    </figure>
    <button onClick={goHome}> Todas las pizzas</button>
    buscate la pizza {name} 
    </section>

    <h2>{busqueda.pizza}  </h2>
    <h4>{busqueda.ingredientes}  </h4>
    <h3>Precio:{busqueda.precio} </h3>
    <button onClick={resta}> -</button>
    <span>Cantidad:{value} </span>
    <button onClick={suma}> +</button>
    <button> canasta</button>
    <button onClick={goPagar}> pagar</button>
    
     </div>
  )
}

export default Pizzas