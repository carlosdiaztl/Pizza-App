import React from 'react'
import './style.scss'
import image4 from "../../assets/V1_WEB-PIZZAS-NAPOLITANA.png";
import image5 from "../../assets/V1_WEB-PIZZAS-POLLO-TOCINETA.png";
import image6 from "../../assets/V1_WEB-PIZZAS-SALMON-TOMATE-CHERRY.png";
import lupa from '../../assets/lupa.png'
import carrro from '../../assets/carrocompras.png'
import home from '../../assets/librohome.png'

const Footer = () => {
  return (
   <footer className='footer'>

    
          <img className="dashboard__image4" src={image4} alt="" />
          <img className="dashboard__image5" src={image5} alt="" />
          <img className="dashboard__image6" src={image6} alt="" />
          
          <img src={home} className="footer_imgs" />
          <img src={carrro} className="footer_imgs" />
          <img src={lupa} className="footer_imgs" />

        
   </footer>
  )
}

export default Footer