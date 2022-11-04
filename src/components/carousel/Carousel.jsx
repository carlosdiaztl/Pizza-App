import React, { useState, useContext, useEffect, useCallback } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import { AppContexts } from "../App";
import { getPizzas } from "../../services/pizzas";

const ControlledCarousel = () => {
  sessionStorage.clear();
  const { theme, pizzas, setPizzas } = useContext(AppContexts);

  const traerPizzas = useCallback(async () => {
    const allPizzas = await getPizzas();

    if (allPizzas.length > 1) {
      setPizzas(allPizzas);
      console.log(pizzas);
    } else {
    }
  }, []);
  useEffect(() => {
    traerPizzas();
  }, [setPizzas]);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="pizzas-container">
      <section className="pizzas__promos">
        <article className="pizzas__cupon">
          <h2 className="pizzas__h2">
            Cupón Hawaiana <br></br>
            <span className="pizzas__cupon__span">45% OFF</span>
          </h2>
        </article>
        <article className="pizzas__cupon">
          <h2 className="pizzas__h2">
            Cupón Mediterranea <br></br>
            <span className="pizzas__cupon__span"> 25% OFF</span>
          </h2>
        </article>
        <article className="pizzas__cupon">
          <h2 className="pizzas__h2">
            Cupón Napolitana <br></br>
            <span className="pizzas__cupon__span"> 25% OFF</span>
          </h2>
        </article>
      </section>
      <Carousel
        className="pizzas-carousel-container"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {pizzas.map((item, index) => (
          <Carousel.Item className="pizzas-carousel-item" key={index}>
            <Link to={`/${item.name}`}>
              {" "}
              <img
                style={{
                  height: "100%",
                  width: "100%",
                }}
                className="d-block pizzas-carousel-img"
                src={item.imagenes}
                alt=""
              />{" "}
            </Link>
            <Carousel.Caption className="pizzas-carousel-caption">
              <h3> {item.pizza} </h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
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
  );
};

export default ControlledCarousel;
