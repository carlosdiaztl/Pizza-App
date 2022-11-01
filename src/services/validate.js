import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
const URL_USERS="https://pizzas-app-info.herokuapp.com/usuarios"
export const validateUser= async (username,password)=>{
    
    try {
        
        const{data} =await  axios.get(`${URL_USERS}?email=${username}&password=${password}`)
        console.log(data);
        return data
        
    } catch (error) {
        
        console.log(error);
        return error
        
    }

}

export const RegisterUser= async(user)=>{
    try {
        const {data}=  await axios.post(URL_USERS,user)
        
          console.log('creado con exito');
        return data
        
    } catch (error) {
        Swal.fire('upps')
        console.log('error');
        return error
        
    }
   
}