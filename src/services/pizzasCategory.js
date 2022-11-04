import axios from "axios";

export const pizzasCategory=async(categoria)=>{
    const url="https://pizzas-app-info.herokuapp.com/pizzas"
    try {
        const {data}=axios.get(`${url}?categoria=${categoria}`)
        return data
    } catch (error) {
        return error
        
    }
}