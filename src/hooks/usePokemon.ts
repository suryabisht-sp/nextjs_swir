"use client"

import * as pokemonApi from "@/network/apis"
import { AxiosError } from "axios"
import useSWR from 'swr'


const usePokemon = (name: string) => {
  const { data, isLoading, error, mutate } = useSWR(name, async () => {
  try {
   return await pokemonApi.getPokemon(name)
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      return null
    }
    else {
      throw error;
    }
  }  
})

  return {
    data: data,
    isLoading: isLoading,
    error: error,
    mutatePokemon: mutate
  }
 
}

export default usePokemon;



// import * as pokemonApi from "@/network/apis"
// import { AxiosError } from "axios"
// import useSWR from 'swr'


// const usePokemon = (name: string) => {
//   const { data, isLoading, error, mutate } = useSWR(name, async () => {
//   try {
//    return await pokemonApi.getProduct(name)
//   } catch (error) {
//     if (error instanceof AxiosError && error.response?.status === 404) {
//       return null
//     }
//     else {
//       throw error;
//     }
//   }  
// })

//   return {
//     data: data,
//     isLoading: isLoading,
//     error: error,
//     mutatePokemon: mutate
//    }
 
// }

// export default usePokemon;