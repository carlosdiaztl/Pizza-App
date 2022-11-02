import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../App";
import "../header/style.scss";
import { validateUser } from "../../services/validate";
import Swal from "sweetalert2/dist/sweetalert2.js";

const Form = () => {
  const getuser = async (email, password) => {
    const usuarioEncontrado = await validateUser(email, password);
    if (usuarioEncontrado.length) {
      setUser(usuarioEncontrado[0]);
      console.log(user);
    } else {
      console.log("no se hallo nada");
    }
  };

  const { setTheme, theme, user, setUser } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userLogin = async (data) => {
    console.log(data);
    console.log(data.email, data.password);
    getuser(data.email, data.password);
  };
  const hiddenLoggin = () => {
    setTheme(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit(userLogin)} className="login__form">
      <div className='main__login'>
        <h1>Inicia sesión en tu cuenta</h1>
      <p>Disfruta de la mejor Pizza creada para las personas amantes del Código.</p>
    <label>
          <input type="email" {...register("email", { required: true })} className="login__email" placeholder='USUARIO'/>
          {errors.email && <span>El email es obligatorio</span>}
        </label>
        <label>
          <input
            type="password"
            {...register("password", { required: true })} className="login__password" placeholder='CONTRASEÑA'/>
          {errors.password && <span>El password es obligatorio</span>}
        </label>
        <button type="submit" className='login__button'>Iniciar Sesión</button>
        <span>Restablecer contraseña</span>

        <div className="login__final">
          <p>¿No tienes una cuenta? </p> <span>Registrate Aquí</span>
        </div>
        <button onClick={hiddenLoggin} className="form__buttonhidden"> cerrar</button>
    </div>
        
      </form>
    </>
  );
};

export default Form;
