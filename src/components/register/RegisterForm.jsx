import  React,{ useContext } from "react";
import { useForm } from "react-hook-form";
import './register.scss';
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
    <form className="register__form" onSubmit={handleSubmit(onSent)}>
     <div className='main__register'>
       <h1>Crea tu cuenta</h1>
      <p>Disfruta de la mejor Pizza creada para las personas amantes del Código.</p>
      <input {...register("email", { required: true })} className="register__select" placeholder="Email" />
      <input
        {...register("username", { required: true })}
        placeholder="Username" className="register__select"
      />
      <input
        {...register("password", { minLength: 4 })}
        placeholder="Password" className="register__select"
        type="password"
      />
      <input
        {...register("name", { required: true })}
        placeholder="What's your name?" className="register__select"
      />
      <input
        type="date"
        {...register("Datebirth", { required: true })}
        placeholder="Date of Birth" className="register__select"
      />
      <input
        {...register("address", { required: true })}
        placeholder="Adress" className="register__select"
      />
      <button type="submit" className='register__button'>Registrarse</button>
      <button onClick={hiddenLoggin} className="register__buttonhidden"> cerrar</button>
      </div>
    </form>
  );
}

export default RegisterForm;
