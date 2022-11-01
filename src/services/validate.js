import axios from "axios";
URL_USERS="https://pizzas-app-info.herokuapp.com/usuarios"
export const validateUser= async(data)=>{
    const urlgenerado=`${URL_USERS}?email=${data.email}&username=${data.username}`
    console.log(urlgenerado);
const {data} =axios.get(urlgenerado)
}
