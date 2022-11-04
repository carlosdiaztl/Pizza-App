import axios from "axios";

export const sendCompra =(compra)=>{
    try {const url="https://pizzas-app-info.herokuapp.com/compras"
    const {data}= axios.post(url,compra)
    return data
        
    } catch (error) {
        return error
        
    }
    

}