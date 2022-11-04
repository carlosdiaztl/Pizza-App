import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./pagar.scss";
import useForm from "../hooks/useForm";
import Swal from "sweetalert2";
import regresarcarrito from '../../assets/flecha-hacia-abajo-para-navegar.png'

const Datospagar = () => {
  const [dataForm, handleChangeInput] = useForm({
    name: "",
    numeroTarjeta: "",
    fechaV: "",
    cvv: "",
    direccion: "",
  });

  const compra = JSON.parse(sessionStorage.getItem("compra"));
  console.log(compra);
  const navigate = useNavigate();
  const confirm = async (e) => {
    e.preventDefault();
    console.log(dataForm);

    if (
      dataForm.name !== "" &&
      dataForm.numeroTarjeta !== "" &&
      dataForm.fechaV !== "" &&
      dataForm.cvv !== "" &&
      dataForm.direccion !== ""
    ) {
      console.log(dataForm);
      navigate("/confirm");
    } else {
      Swal.fire("Faltan datos", "Llene los datos por favor", "error");
    }
  };
  const regresar = () => {
    navigate(`/${compra.name}`);
  };

  return (
    <>
      <section className="pagar">
        {" "}
        <button onClick={regresar} className='pagar__regresar'> <img className="pagar__regresarcarrito" src={regresarcarrito} alt="" /> Carrito de compras </button>
        <section className="pagar__infocompras">
          <article className="pagar__card">
            <img src={compra.imagenes} className="pagar__img" />
            <article>
              <h4 className="pagar__type">{compra.pizza} </h4>
              <article className="pagar__infoprecio">
                <h5>X {compra.cantidad} </h5>{" "}
                <span>
                  <h5>{compra.cantidad * compra.precio}</h5>{" "}
                </span>
              </article>
            </article>
          </article>
        </section>
        
        <form onSubmit={confirm} className="pagar__form">
          <h5 className="pagar__informacion">Información de pago</h5>
          <label className="pagar__label">
            Nombre completo
            <input
              name="name"
              onChange={handleChangeInput}
              type="text"
              placeholder="Ingrese su nombre"
              className="pagar__input"
            />
          </label>
          <label className="pagar__label">
            Numero de tarjeta de Credíto
            <input
              name="numeroTarjeta"
              onChange={handleChangeInput}
              type="number"
              placeholder="12334 1234 1234 1234 "
              className="pagar__input"
            />
          </label>
          <span>
            <label className="pagar__label">
              Fecha de vencimiento
              <input
                name="fechaV"
                onChange={handleChangeInput}
                type="date"
                min="2022-11"
                max="2026-10"
                className="pagar__input"
              />
            </label>
            <label className="pagar__label">
              CVV
              <input
                name="cvv"
                onChange={handleChangeInput}
                type="number"
                maxLength={3}
                className="pagar__input"
              />
            </label>
          </span>
          <label className="pagar__label">
            Dirección
            <input
              name="direccion"
              onChange={handleChangeInput}
              type="text"
              placeholder="av.moreno #123"
              className="pagar__input"
            />
          </label>

          <button type="submit" className="pagar__button">
            Pagar ahora
          </button>
        </form>
      </section>
    </>
  );
};

export default Datospagar;
