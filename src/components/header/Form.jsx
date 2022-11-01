import React , { useContext } from 'react'
import { useForm } from "react-hook-form";
import { AppContext } from '../App'
import '../header/style.scss'
import { validateUser } from '../../services/validate';
import Swal from 'sweetalert2/dist/sweetalert2.js'


const Form = () => {
  
  const getuser= async (email,password)=>{
    const  usuarioEncontrado = await validateUser(email,password)
    if (usuarioEncontrado.length) {
           setUser(usuarioEncontrado[0])
         console.log(user);
         
           
         }
         else{
           console.log('no se hallo nada');
         }
 
 }

    const { setTheme, theme, user, setUser } = useContext(AppContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const userLogin = async(data) => {
      console.log(data);
      console.log(data.email, data.password);
      getuser(data.email, data.password)
        
      
        
        
        
        
        
       
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