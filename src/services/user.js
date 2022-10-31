import axios from "axios"
const URL_USERS="https://giros-react.herokuapp.com/usuarios"

validate= async(email,pass)=>{
    const URL=`${URL_USERS}? `
    try {
        const {data} = axios.get(URL)
        return data
    } catch (error) {
        console.log(error);
        return error
        
    }
}