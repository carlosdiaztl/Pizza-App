import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPizzas } from "../../services/pizzas";
import { AppContext } from "../App";
import "./style.scss";

import image3 from "../../assets/V1_WEB-PIZZAS-HAWAIANA.png";
import Rigthbar from "../rigthSidebar/Rigthbar";

const Dashboard = () => {
  const { theme, pizzas, setPizzas } = useContext(AppContext);
  const traerPizzas = async () => {
    const allPizzas = await getPizzas();
    setPizzas(allPizzas);
    console.log(pizzas);
  };

  useEffect(() => {
    traerPizzas();
  }, []);
  console.log(pizzas);

  const muestravalor = (pizzita) => {
    console.log(pizzita.pizza, pizzita.precio);
  };

  return (
    <div className="dashboard">
      <section className="dashboard_center">
        <article className="dashboard__disponibles">
          <h2>Pizzas disponibles</h2>
          <Link className="dashboard__link">Ver todas</Link>
        </article>

        <div className="slider-container">
          {pizzas.map((item, index) => {
            return (
              <section key={index} className="slider-item">
                <h1> {item.pizza} </h1>
                <Link to={`/${item.pizza}`}>
                  {" "}
                  <img src={item.imagenes} />
                </Link>
                <p>{item.ingredientes} </p>
                <h3 className="slider-costo"> ${item.precio} MXN</h3>
                <button
                  onClick={() => {
                    muestravalor(item);
                  }}
                >
                  {" "}
                  añadir
                </button>
              </section>
            );
          })}
        </div>
      </section>
      <Rigthbar />
    </div>
  );
};

export default Dashboard;
