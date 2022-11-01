import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
const URL_USERS="https://pizzas-app-info.herokuapp.com/usuarios"
export const validateUser= async(username,password)=>{
    
    try {
        
        const {data} = axios.get(`${URL_USERS}?email=${username}&password=${password}`)
        return data
        
    } catch (error) {
        Swal.fire('upps')
        console.log('error');
        return error
        
    }

}

export const RegisterUser=(user)=>{
    try {
        const {data}= axios.post(URL_USERS,user)
        Swal.fire(
            'nice',
            'user created',
            'success'
          )
          console.log('creado con exito');
        return data
        
    } catch (error) {
        Swal.fire('upps')
        console.log('error');
        return error
        
    }
   
}