import axios from "axios";
export const getPizzas = async () => {
  try {
    const url_pizzas = "https://pizzas-app-info.herokuapp.com/pizzas";
    const { data } = await axios.get(`${url_pizzas}`);
    return data;
  } catch (error) {
    return error;
  }
};
