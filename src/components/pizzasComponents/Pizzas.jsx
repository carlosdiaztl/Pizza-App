import React,{useState,useEffect,useCallback,useContext,useMemo} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { pizzaBuscada } from '../../services/pizzaBuscada';
import Header from '../header/Header';
import { AppContext } from '../../router/Router';
import './pizzas.scss'


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
    <>
    <section className='pizzas'>
    <article className='pizzas__header'>
    <figure>
    <img src={busqueda.imagenes} className='pizzas__img'/>
    </figure>

    <article className='pizzas__nav'>
    <button onClick={goHome} className='pizzas__regresarbtn'> Todas las pizzas</button>
    </article>
    </article>

    <article className='pizzas__main'>
    <h2 className='pizzas__h1'>{busqueda.pizza}  </h2>
    <h3 className='pizzas__precio'> $ {busqueda.precio} COP </h3>
    <h2 className='pizzas__h4'>Descripción</h2>
    <p className='pizzas__p'>{busqueda.ingredientes}  </p>
    </article>

    <article className='pizzas__footer'>
    <button onClick={resta} className='pizzas__minus'> -</button>
    <span className='pizzas__number'>{value} </span>
    <button onClick={suma} className='pizzas__plus'> +</button>
    <button className='pizzas__buys'> canasta</button>
    <button onClick={goPagar} className='pizzas__pay'> pagar</button>
    </article>

    </section>
    </>
  )
}

export default Pizzas