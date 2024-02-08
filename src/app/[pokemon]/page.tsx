"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button, Form, FormControl, FormGroup, FormLabel, Spinner } from 'react-bootstrap'
import Image from 'next/image'
import usePokemon from '@/hooks/usePokemon'
import { FormEvent } from 'react'
import * as PokemonApi from "@/network/apis"

const PokemonDetailPage = () => {
  const pathname = usePathname()
  const { data, isLoading, error, mutatePokemon } = usePokemon(pathname)
  if (error) {
    return <div>Something occured while fetching the data</div>
  } 

  const handleNameChange = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const nickName = formData.get("nickname")?.toString().trim();
    if (!data || !nickName) return;
    console.log("nuicknake", nickName)
    const update = await PokemonApi.renamePokemon(data, nickName)
    mutatePokemon(update, { revalidate: false })
    // we are not actually posting anything to the server so added revalidate false
}

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <p><Link href="/" className='link-light'>Go Back</Link></p>
        {isLoading ? <Spinner animation='grow' /> :
          <>
            {data !== null ? <>
            <h1 className='text-center text-capitalize'>{data?.name}</h1>
            {data && <Image
              src={`${data?.sprites?.other["official-artwork"]?.front_default}`}
              width={200}
              height={200}
              alt={"pokemon:" + data?.name}
            />}
            <div className="d-inline-block mt-2">
              <div>
                <strong>Type:</strong> {data?.types?.map(pok => pok.type.name).join(", ")}
                <br />
                <strong>Height:</strong> {data && data?.height * 10} cm
                <br />
                <strong>Weight:</strong> {data && data?.weight * 10} kg
              </div>
              </div>
              <Form className='mt-4' onSubmit={handleNameChange}>
                <FormGroup controlId='pokemon-nickname' className='mb-3'>
                  <FormLabel>Change Name of this Pokemon</FormLabel>
                  <FormControl className='mt-2' name="nickname" placeholder='Example: Monosaur'></FormControl>
                </FormGroup>
<Button type='submit'>Add Name</Button>
              </Form>
          </> :
            <div>data not found</div>}
          </>}
      </div>
    </>
  )
}

export default PokemonDetailPage