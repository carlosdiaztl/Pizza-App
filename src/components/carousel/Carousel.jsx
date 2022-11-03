import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import "./style.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="pizzas-container">
      <h2 className="pizzas-container-heading">Mira nuestras ricas pizzas</h2>
      <Carousel
        className="pizzas-carousel-container"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item className="pizzas-carousel-item">
          <img
            style={{
              height: "50vh",
            }}
            className="d-block pizzas-carousel-img"
            src="https://www.pizzaspiccolo.com.co//wp-content/uploads/2020/07/010-MIXTAPIZZA-1.jpg"
            alt=""
          />
          <Carousel.Caption className="pizzas-carousel-caption">
            <h3>First slide label</h3>
            <p>PIZZA elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
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
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ControlledCarousel;
