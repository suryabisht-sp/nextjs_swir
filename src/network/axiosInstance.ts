import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  // baseURL: "https://fakestoreapi.com/",
  timeout: 5000,
})

export default axiosInstance;