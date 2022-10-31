import React from "react";
import { useForm } from "react-hook-form";
import ButttonGoRegister from "../buttonRegister/ButttonGoRegister";


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const userLogin = (data) => {
        console.log(data);
       
    }
  return (
    <>

    <form onSubmit={handleSubmit(userLogin)} className="login">
      <label>
        Email:
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>El email es obligatorio</span>}
      </label>
      <label>
        Password:
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>El password es obligatorio</span>}
      </label>
      <button type="submit">Iniciar Sesión</button>
    </form>
    <ButttonGoRegister/>
    </>
  );
};

export default Login;