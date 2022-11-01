import React , { useContext } from 'react'
import { useForm } from "react-hook-form";
import { AppContext } from '../App'
import '../header/style.scss'
import { validateUser } from '../../services/validate';

const Form = () => {
    const { setTheme, theme, user, setUser } = useContext(AppContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const userLogin = async(dataI) => {
        
      const  usuariologed= await validateUser(dataI.email,dataI.password)
        
        console.log(usuariologed);
        if (usuariologed) {
          setUser(usuariologed)
        console.log(user);
          
        }
        else{
          console.log('no se hallo nada');
        }
        
        
       
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