
import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { getPizzas } from '../../services/pizzas';
import { AppContext } from '../App'
import "./style.scss"
import image1 from "../../assets/V1_WEB-PIZZAS-CARNES.png";
import image2 from "../../assets/V1_WEB-PIZZAS-DOS-QUESOS-MANZANA.png";
import image3 from "../../assets/V1_WEB-PIZZAS-HAWAIANA.png";
import image4 from "../../assets/V1_WEB-PIZZAS-NAPOLITANA.png";
import image5 from "../../assets/V1_WEB-PIZZAS-POLLO-TOCINETA.png";
import image6 from "../../assets/V1_WEB-PIZZAS-SALMON-TOMATE-CHERRY.png";


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

    <div className='main_dash'>

         <div className="dashboard">
      <div className="dashboard__disponibles">
        <h2>Pizzas disponibles</h2>
        <Link className="dashboard__link">Ver todas</Link>
      </div>

      <div className="dashboard__center">
      <section className='content'>

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
      </section>
        <div className="dashboard__right">
          <figure>
            <img className="dashboard__image2" src={image2} alt="" />
            <img className="dashboard__image3" src={image3} alt="" />
          </figure>
        </div>
      </div>

      <div className="dashboard__bottom">
        <figure>
          <img className="dashboard__image4" src={image4} alt="" />
          <img className="dashboard__image5" src={image5} alt="" />
          <img className="dashboard__image6" src={image6} alt="" />
        </figure>
      </div>
      
    </div>
    
    
    

     </div>
  </>
  )
}


export default Dashboard;
