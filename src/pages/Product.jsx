import React from 'react'
import { useProduct } from '../context/ProductContext'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  spinner,
} from "@material-tailwind/react";
// import { CardPlacehoderSkeleton } from '../components/CardPlacehoderSkeleton'
import { Spinner } from "@material-tailwind/react";
import { EcommerceCard } from '../components/EcommerceCard';

const Product = () => {
  const {products,isLoading,isError} = useProduct()
  return (
    <div className='container mx-auto flex gap-3 flex-wrap'>
     
      {isLoading && <spinner/> }
      {isError && <h1>Error occured</h1>}
      {products.map(el=><EcommerceCard key={el.id} product={el}/>)}

    </div>
  )
}

export default Product