"use client"

import styles from "./page.module.css";
import Link from "next/link";
import PokemonEntry from "@/component/PokemonEntry";
import { useSearchParams, usePathname } from 'next/navigation'
import useSWR from "swr";
import * as pokemonApi from "@/network/apis"
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useState } from "react";


interface Search {
  page: string;
}

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search: Search = { page: searchParams.get('page') as string }; // Type assertion
  const [page, setPage] = useState(parseInt(search.page || "1")); // Parse integer, default to 1 if search.page is null

  const { data, isLoading } = useSWR(["getPokemonPage", page], () => pokemonApi.getPokemonPage(page));
  if (isLoading) {
    return <Spinner animation="border" className="d-block m-auto"></Spinner>;
  }

  return (
    <main>
      <div>Catch Data
        <br />
        {data && <Row>
          {data && data?.results?.map(item => <Col key={item.name}>
            <PokemonEntry name={item?.name} />
          </Col>)}
        </Row>}
        <div className="d-flex justify-content-center gap-2 mt-4">
          {data?.previous && <Link href={`${pathname}?page=${page - 1}`}>
            <Button onClick={() => { setPage(page - 1) }}>Previous</Button>
          </Link>}
          {data?.next && <Link href={`${pathname}?page=${page + 1}`}>
            <Button onClick={() => { setPage(page + 1) }}>Next</Button>
          </Link>}
        </div>
      </div>
    </main>
  );
}




// import styles from "./page.module.css";
// import Link from "next/link";
// import PokemonEntry from "@/component/PokemonEntry";
// import { useSearchParams, usePathname } from 'next/navigation'
// import useSWR, { mutate }  from "swr";
// import * as pokemonApi from "@/network/apis"
// import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row, Spinner } from "react-bootstrap";
// import { FormEvent, Key, useState } from "react";


// interface Search {
//   page: string;
// }

// export default function Home() {
//   const pathname = usePathname();
//     const [isAddingProduct, setIsAddingProduct] = useState(false);
//   const searchParams = useSearchParams();
//   const search: Search = { page: searchParams.get('page') as string }; // Type assertion
//   const [page, setPage] = useState(parseInt(search.page || "1")); // Parse integer, default to 1 if search.page is null

//   const { data, isLoading,  } = useSWR(["getProductpage", page], () => pokemonApi.getProductPage(page));
//   console.log("datallllllll", data)
//   if (isLoading) {
//     return <Spinner animation="border" className="d-block m-auto"></Spinner>;
//   }

// const addNewProduct = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsAddingProduct(true);
//     alert("new data")
//     try {
//       const response = await fetch('https://fakestoreapi.com/products', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           title: 'test product',
//           price: 13.5,
//           description: 'lorem ipsum set',
//           image: 'https://i.pravatar.cc',
//           category: 'electronic'
//         })
//       });
//       const newData = await response.json();
//       console.log('New product added:', newData);
//       // Update the cache
//    mutate('https://fakestoreapi.com/products', async (cachedData: any) => {
//   const newDataArray = cachedData?.data || []; // Use cachedData.data if it exists, otherwise initialize newDataArray as an empty array
//   return { ...cachedData, data: [...newDataArray, newData] };
// });

//     } catch (error) {
//       console.error('Error adding product:', error);
//     } finally {
//       setIsAddingProduct(false);
//     }
//   };

//   return (
//     <main>
//       <div>Catch Data
//          <Form className="mt-4" onSubmit={addNewProduct}>
//                   <FormGroup controlId="pokemon-nickname" className="mb-3">
//                     <FormLabel>Add new Product</FormLabel>
//                     <FormControl className="mt-2" name="nickname" placeholder="Example: Monosaur" />
//                   </FormGroup>
//                   <Button type="submit" disabled={isAddingProduct}>
//                     {isAddingProduct ? 'Adding...' : 'Add Name'}
//                   </Button>
//                 </Form>
//         <br />
//         {data && <Row>
//           {data && data?.map((item: {
//             id: string; title: Key | null | undefined; name: string; 
// }) => <Col key={item.title}>
//             <PokemonEntry name={item?.id} />
//           </Col>)}
//         </Row>}
//         <div className="d-flex justify-content-center gap-2 mt-4">
//           {data && <Link href={`${pathname}?page=${page - 1}`}>
//             <Button onClick={() => { setPage(page - 1) }}>Previous</Button>
//           </Link>}
//           {data && <Link href={`${pathname}?page=${page + 1}`}>
//             <Button onClick={() => { setPage(page + 1) }}>Next</Button>
//           </Link>}
//         </div>
//       </div>
//     </main>
//   );
// }
