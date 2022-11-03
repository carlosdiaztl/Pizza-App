import React from 'react'
import './style.scss'
import image4 from "../../assets/V1_WEB-PIZZAS-NAPOLITANA.png";
import image5 from "../../assets/V1_WEB-PIZZAS-POLLO-TOCINETA.png";
import image6 from "../../assets/V1_WEB-PIZZAS-SALMON-TOMATE-CHERRY.png";
import lupa from '../../assets/lupas.png'
import carrro from '../../assets/cesta-de-la-compra.png'
import home from '../../assets/libro.png'

const Footer = () => {
  return (
   <footer className='footer'>
          <button className='footer__buttons'><img src={home} className="footer_imgs" /></button>
          <button className='footer__buttonsCenter'><img src={carrro} className="footer_imgs" /></button>
          <button className='footer__buttons'><img src={lupa} className="footer_imgs"/></button> 
   </footer>
  )
}

export default Footer