import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { getPizzas } from '../../services/pizzas';
import { AppContext } from '../App'
import '../dashboard/style.scss'


const Dashboard = () => {


  const {theme,pizzas,setPizzas} = useContext(AppContext);
  const traerPizzas= async()=>{
    const allPizzas= await getPizzas()
    setPizzas(allPizzas)
    console.log(pizzas);

  }
  
  useEffect(() => {
    traerPizzas()
    
  }, [])
  console.log(pizzas);
  
  const muestravalor=(pizzita)=>{
    console.log(pizzita.pizza,pizzita.precio);
  }

  return (
  <>

    <div className= "slider-container">
    
    { pizzas.map((item,index)=>{
      return(
        <section key={index} className="slider-item"> 
        <h1> {item.pizza} </h1>
        <Link to={`/${item.pizza}`}>  <img   src={item.imagenes} /></Link>
        <p>{item.ingredientes} </p>
        <h3>Costo: {item.precio} </h3>
        <button onClick={()=>{muestravalor(item)} }> añadir</button>
        
        
        </section>
       
         
         
      )
    })}

    
</div>  

        
    
    
    

  </>
  )
}

export default Dashboard