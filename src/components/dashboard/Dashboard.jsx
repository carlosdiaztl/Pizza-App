import React, {useContext} from 'react'
import { AppContext } from '../App'

const Dashboard = () => {

  const {theme} = useContext(AppContext);

  return (
    <div className= "dashboard">Dashboard
    <img src="https://i.ibb.co/CnkQwPN/V1-WEB-PIZZAS-CARNES.png" alt="V1-WEB-PIZZAS-CARNES"  />
    <a href="https://ibb.co/jLcD8JB"><img src="https://i.ibb.co/CnkQwPN/V1-WEB-PIZZAS-CARNES.png" alt="V1-WEB-PIZZAS-CARNES" border="0" /></a>1
    <a href="https://ibb.co/G7fBmJp"><img src="https://i.ibb.co/1ZYhcnQ/V1-WEB-PIZZAS-NAPOLITANA.png" alt="V1-WEB-PIZZAS-NAPOLITANA" border="0" /></a>2
    <a href="https://ibb.co/82y5WWm"><img src="https://i.ibb.co/ft3phhX/V1-WEB-PIZZAS-POLLO-TOCINETA.png" alt="V1-WEB-PIZZAS-POLLO-TOCINETA" border="0" /></a>3
    <a href="https://ibb.co/mSyKfqV"><img src="https://i.ibb.co/hCdN3WJ/V1-WEB-PIZZAS-PEPPERONI-CHAMPINONES.png" alt="V1-WEB-PIZZAS-PEPPERONI-CHAMPINONES" border="0" /></a>4
    <a href="https://ibb.co/FhdrNGh"><img src="https://i.ibb.co/S6ZjWq6/V1-WEB-PIZZAS-HAWAIANA.png" alt="V1-WEB-PIZZAS-HAWAIANA" border="0" /></a>5
    <a href="https://ibb.co/VQ7Tbh4"><img src="https://i.ibb.co/2sDdRL4/V1-WEB-PIZZAS-SALMON-TOMATE-CHERRY.png" alt="V1-WEB-PIZZAS-SALMON-TOMATE-CHERRY" border="0" /></a>6
    <a href="https://ibb.co/mHNwWTL"><img src="https://i.ibb.co/VvwZ497/V1-WEB-PIZZAS-MEDITERRANEA.png" alt="V1-WEB-PIZZAS-MEDITERRANEA" border="0" /></a>7
    <a href="https://ibb.co/kBbJ3cx"><img src="https://i.ibb.co/dMCtbKr/V1-WEB-PIZZAS-DOS-QUESOS-MANZANA.png" alt="V1-WEB-PIZZAS-DOS-QUESOS-MANZANA" border="0" /></a>8
    <a href="https://ibb.co/8N8w8TV"><img src="https://i.ibb.co/VJBGBr8/V1-WEB-PIZZAS-SETAS-HORTALIZAS.png" alt="V1-WEB-PIZZAS-SETAS-HORTALIZAS" border="0" /></a>9
    <a href="https://ibb.co/njHbpGP"><img src="https://i.ibb.co/jDcTtNJ/V1-WEB-PIZZAS-TOCINETA-MAIZTIERNO.png" alt="V1-WEB-PIZZAS-TOCINETA-MAIZTIERNO" border="0" /></a>10
    
    </div>
  )
}

export default Dashboard