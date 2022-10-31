import React , { useContext } from 'react'
import { useForm } from "react-hook-form";
import { AppContext } from '../App'
import '../header/style.scss'

const Form = () => {
    const { setTheme, theme, user, setUser } = useContext(AppContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const userLogin = (data) => {
        console.log(data);
        setUser(data)
        console.log(user);
       
    }
    const hiddenLoggin=()=>{
        setTheme(false)
        
    }
  return (
    <>

     <form  onSubmit={handleSubmit(userLogin)} className="login-form">
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
      <button onClick={hiddenLoggin}> X</button>
      
      
      
    </form>
    
    </>
    
    
  )
}

export default Form