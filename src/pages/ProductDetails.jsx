import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { EcommerceCard } from '../components/EcommerceCard';
import { Spinner } from '@material-tailwind/react';
import { useProduct } from '../context/ProductContext';

const ProductDetails = () => {
  const {productId}=useParams();
  const {isLoading}=useProduct()
  const [singleProduct,setSingeProduct]=useState({})
  async function getProductDetails(){
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();
      if(response.status===200){
        setSingeProduct(data)
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getProductDetails()
  
  },[productId])
  return (
    <div className='flex justify-center items-center w-full h-full'>
      {isLoading && <Spinner/>}
      <EcommerceCard product={singleProduct}/>
    </div>
  )
}

export default ProductDetails