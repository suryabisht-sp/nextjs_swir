// // import usePokemon from "@/hooks/usePokemon"
// // import Link from "next/link"
// // import styles from "@/app/styles/pokemonEntry.module.css"
// // import { Spinner } from "react-bootstrap"
// // import Image from "next/image"

// // const PokemonEntry = ({ name }: { name: string }) => {
// //   const { data, isLoading, error } = usePokemon(name)
// //    if (error) {
// //     return <div>Something occured while fetching the data</div>
// //   }
// //   return (
// //     <Link href={"/"+ name}>
// //       <div className={styles.entry}>
// //         {isLoading ? <Spinner animation='grow' /> :
// //           <>
// //             {data !== null ? <div className={styles.card}>
// //               <h1 className='text-center text-capitalize'>{data?.name}</h1>
// //               {data && <Image
// //                 src={`${data?.sprites?.other["official-artwork"]?.front_default}`}
// //                 width={100}
// //                 height={100}
// //                 priority
// //                 alt={"pokemon:" + data?.name}
// //               />}
// //             </div> : ""}
// //           </>}
// //         </div>
// //     </Link>
// //   )
// // }

// // export default PokemonEntry



// import usePokemon from "@/hooks/usePokemon"
// import Link from "next/link"
// import styles from "@/app/styles/pokemonEntry.module.css"
// import { Spinner } from "react-bootstrap"
// import Image from "next/image"

// const PokemonEntry = ({ name }: { name: string }) => {
//   const { data, isLoading, error } = usePokemon(name)
//    if (error) {
//     return <div>Something occured while fetching the data</div>
//   }
//   return (
//     <Link href={"/"+ name}>
//       <div className={styles.entry}>
//         {isLoading ? <Spinner animation='grow' /> :
//           <>
//             {data !== null ? <div className={styles.card}>
//               <h1 className='text-center text-capitalize'>{data?.name}</h1>
//               {data && <Image
//                 src={`${data?.sprites?.other["official-artwork"]?.front_default}`}
//                 width={100}
//                 height={100}
//                 priority
//                 alt={"pokemon:" + data?.name}
//               />}
//             </div> : ""}
//           </>}
//         </div>
//     </Link>
//   )
// }

// export default PokemonEntry
// import usePokemon from "@/hooks/usePokemon"
// import Link from "next/link"
// import styles from "@/app/styles/pokemonEntry.module.css"
// import { Spinner } from "react-bootstrap"
// import Image from "next/image"

// const PokemonEntry = ({ name }: { name: string }) => {
//   const { data, isLoading, error } = usePokemon(name)
//    if (error) {
//     return <div>Something occured while fetching the data</div>
//   }
//   return (
//     <Link href={"/"+ name}>
//       <div className={styles.entry}>
//         {isLoading ? <Spinner animation='grow' /> :
//           <>
//             {data !== null ? <div className={styles.card}>
//               <h1 className='text-center text-capitalize'>{data?.name}</h1>
//               {data && <Image
//                 src={`${data?.sprites?.other["official-artwork"]?.front_default}`}
//                 width={100}
//                 height={100}
//                 priority
//                 alt={"pokemon:" + data?.name}
//               />}
//             </div> : ""}
//           </>}
//         </div>
//     </Link>
//   )
// }

// export default PokemonEntry



import usePokemon from "@/hooks/usePokemon"
import Link from "next/link"
import styles from "@/app/styles/pokemonEntry.module.css"
import { Spinner } from "react-bootstrap"
import Image from "next/image"

const PokemonEntry = ({ name }: { name: string }) => {
  const { data, isLoading, error } = usePokemon(name)
   if (error) {
    return <div>Something occured while fetching the data</div>
  }
  return (
    <Link href={"/"+ name}>
      <div className={styles.entry}>
        {isLoading ? <Spinner animation='grow' /> :
          <>
            {data !== null ? <div className={styles.card}>
              <h1 className='text-center text-capitalize'>{data?.name}</h1>
              {data && <Image
                src={`${data?.sprites?.other["official-artwork"]?.front_default}`}
                width={100}
                height={100}
                priority
                alt={"pokemon:" + data?.name}
              />}
            </div> : ""}
          </>}
        </div>
    </Link>
  )
}

export default PokemonEntry