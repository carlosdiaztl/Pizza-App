import React, { useContext } from "react";
import { AppContext } from "../App";
import ButtonHeader from "./ButtonHeader";
import imageUsuario from "../../assets/OIP.jpg";

const Header = () => {
  const { theme, setTheme, user, setUser } = useContext(AppContext);

  const CloseSession = () => {
    setUser({});
  };

  return (
    <>
      <div className={`header header`}>
          <section className="header__section">
            <article className="header__home">
              <h2>Home</h2>
              <p>¡Que bueno verte Chris!</p>
            </article>

            <div className="header__welcome">
              {theme}
              {Object.entries(user).length === 0 ? (
                <h2> Bienvenido </h2>
              ) : (
                <>
                  <h2> Bienvenido {user.profile.name} </h2>{" "}
                  <h3> ¿Que pizza deseas el dia de hoy ?</h3>{" "}
                  <button onClick={CloseSession}> Log out</button>{" "}
                </>
              )}

              <ButtonHeader />
            </div>

            <article className="header__image">
              <figure>
                <img
                  src={imageUsuario}
                  alt="usuario"
                  className="header__usuario"
                />
              </figure>
            </article>
          </section>
      </div>
    </>
  );
};

export default Header;
