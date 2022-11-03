import axios from "axios";
export const pizzaBuscada = async (Pizza) => {
  try {
    const url_pizzas = "https://pizzas-app-info.herokuapp.com/pizzas";
    const { data } = await axios.get(`${url_pizzas}?name=${Pizza}`);
    return data;
  } catch (error) {
    return error;
  }
};