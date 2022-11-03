import React,  { useState } from 'react'
import '../rigthSidebar/style.scss'
import image1 from "../../assets/V1_WEB-PIZZAS-CARNES.png";
import image2 from "../../assets/V1_WEB-PIZZAS-DOS-QUESOS-MANZANA.png";



const Rigthbar = () => {
 
  return (<>
  <div className='dashboard_rigth'>
    <img className='dashboard__image1' src={image1}  />
    <img  className='dashboard__image'src={image2}  />
    </div>
  </>
    
  )
}

export default Rigthbar