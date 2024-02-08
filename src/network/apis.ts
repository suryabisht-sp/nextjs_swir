import { Pokemon, PokemonPage } from "@/models/Pokemon"
import axiosApi from "./axiosInstance"

type PageSize = number;

export const getPokemon = async (name: string) => {
  const response = await axiosApi.get<Pokemon>("/pokemon/" + name);
  return response.data;
}

export const getPokemonPage = async (page: number) => {
  const pageSize: PageSize = 10;
  const response = await axiosApi.get<PokemonPage>(`/pokemon?limit=${pageSize}&offset=${pageSize * (page - 1)}`);
  return response.data;
}

export const renamePokemon = async (data: Pokemon, nickname: string) => {
  console.log("sartatt", data)
  return {
    ...data, name: nickname
  }
}

// import axiosApi from "./axiosInstance"

// type PageSize = number;

// export const getProduct = async (name: string) => {
//   const response = await axiosApi.get<any>("/products/" + name);
//   return response.data;
// }

// export const getProductPage = async (page: number) => {
//   const pageSize: PageSize = 50;
//   const response = await axiosApi.get<any>(`/products?limit=${pageSize}&offset=${pageSize * (page - 1)}`);
//   return response.data;
// }

// export const renamePokemon = async (data: any, nickname: any) => {
//   console.log("sartatt", data)
//   return {
//     ...data, nickname
//   }
// }