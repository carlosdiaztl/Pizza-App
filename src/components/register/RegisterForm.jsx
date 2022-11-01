import  React,{ useContext } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

import {RegisterUser} from '../../services/validate'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { AppContext } from '../App'

const RegisterForm=()=> {
  const { setTheme, theme , user, setUser } = useContext(AppContext);
  
  const { register, handleSubmit, } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      name: "",
      Datebirth: "",
      address: "",
    },
  });

  const onSent = async(data) => {
    const userCreated = {
      email: data.email,
      username: data.username,
      password: data.password,
      profile: {
        name: data.name,
        Datebirth: data.Datebirth,
        address: data.address,
      },
     
    };
    console.log(userCreated);
    await RegisterUser(userCreated)
    setUser(userCreated)
    setTheme(<></>)
    
  };
  const hiddenLoggin=()=>{
    setTheme(false)
    
}

  return (
    <form className="formR" onSubmit={handleSubmit(onSent)}>
     
      <input {...register("email", { required: true })} placeholder="Email" />
      <input
        {...register("username", { required: true })}
        placeholder="Username"
      />
      <input
        {...register("password", { minLength: 4 })}
        placeholder="Password"
        type="password"
      />
      <input
        {...register("name", { required: true })}
        placeholder="What's your name?"
      />
      <input
        type="date"
        {...register("Datebirth", { required: true })}
        placeholder="Date of Birth"
      />
      <input
        {...register("address", { required: true })}
        placeholder="Adress"
      />
      <button onClick={hiddenLoggin}> X</button>

      <button type="submit">Registrarse</button>
      
      
    </form>
  );
}

export default RegisterForm;
