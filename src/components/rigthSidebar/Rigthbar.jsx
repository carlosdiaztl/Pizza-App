import React,  { useState } from 'react'
import '../rigthSidebar/style.scss'
import image1 from "../../assets/V1_WEB-PIZZAS-CARNES.png";
import image2 from "../../assets/V1_WEB-PIZZAS-DOS-QUESOS-MANZANA.png";



const Rigthbar = () => {
 
  return (<>
  <div className='dashboard_rigth'>
    <img src={image1}  />
    <img src={image2}  />
    
    
    </div>



  </>
    
  )
}

export default Rigthbar