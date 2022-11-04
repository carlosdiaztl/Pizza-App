import React, { useState,useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { pizzaBuscada } from '../../services/pizzaBuscada';
import useForm from '../hooks/useForm'
import Swal from "sweetalert2";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";


const SearchPizzas = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [pizza, setPizza] = useState([])
  
  const [dataForm, handleChangeInput] = useForm({
    pizza:""
  });
  const buscarPizza=async(e)=>{
    e.preventDefault()
    console.log(dataForm.pizza);
   const lapizza= await pizzaBuscada(dataForm.pizza)
   console.log(lapizza);
   if (lapizza.length) {
    setPizza(lapizza[0])

    
   }
   else{
    Swal.fire("lo lamentamos", "Esa pizza no la tenemos ", "error");
   }
   
  }
  const backHome=()=>{
    navigate('/')

  }
  return (
    <div>
     <button onClick={backHome}> volver</button><h1> Busca tu pizza</h1>
    <form onSubmit={buscarPizza}> 
    <input name="pizza" onChange={handleChangeInput} type="text" placeholder='ingresa la pizza que quieres buscar' />
    <button type='submit'> buscar</button>
    </form>
    <section>
    <Container className="pizzas-container">
      <h2 className="pizzas-container-heading">Que rico pizza!!!</h2>
      <Carousel
        className="pizzas-carousel-container"
        activeIndex={index}
        onSelect={handleSelect}
      >
        
          <Carousel.Item className="pizzas-carousel-item" >
            {pizza? <Link to={`/${pizza.name}`}><img 
              style={{
                height: "100%",
                width: "100%",

              }}
              className="d-block pizzas-carousel-img"
              src={`${pizza.imagenes}`}
             
              alt=""
            /></Link>:<img 
              style={{
                height: "100%",
                width: "100%",

              }}
              className="d-block pizzas-carousel-img"
              src={`https://www.eldiario.com.co/wp-content/uploads/2019/10/Nota-4-6.jpg`}
             
              alt=""
            /> }  
            <Carousel.Caption className="pizzas-carousel-caption">
              {pizza?<h3>{pizza.name} </h3>:<></>}
              
             
            </Carousel.Caption>
          </Carousel.Item>
       
        {/* <Carousel.Item className="carouselItem">
          <img
            style={{
              height: "50vh",
            }}
            className="d-block pizzas-carousel-img"
            src="https://www.pizzaspiccolo.com.co//wp-content/uploads/2020/07/010-MIXTAPIZZA-1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="pizzas-carousel-caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img
            style={{
              height: "50vh",
            }}
            className="d-block pizzas-carousel-img"
            src="https://restaurante.guide/wp-content/uploads/2019/08/pizzaspiccolo-portada3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="pizzas-carousel-caption">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </Container>



      
    </section>
    
    
    </div>
  )
}

export default SearchPizzas