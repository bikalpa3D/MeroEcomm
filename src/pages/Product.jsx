import React from "react";
import { useProduct, } from "../context/ProductContext";
import { useEffect } from "react";

// import { CardPlacehoderSkeleton } from '../components/CardPlacehoderSkeleton'
import { Spinner } from "@material-tailwind/react";
import { EcommerceCard } from "../components/EcommerceCard";

import { FooterWithSocialLinks } from "../components/FooterWithSocialLinks";
import { useFilter } from "../context/FilterContext";


const Product = () => {
  const { products, isLoading, isError,setProducts } = useProduct();
 const {updatedProducts}=useFilter()

  return (
    <div className="container w-[100%] mx-auto  ">
    
      {isLoading && <Spinner className="absolute top-1/2 left-1/2 h-40 w-40" />}
      {isError && <h1>Error occured</h1>}
<div className="container mx-auto flex flex-wrap gap-4 px-3 py-4 ">
      {updatedProducts.map((el) => (
          <EcommerceCard key={el.id} product={el} />
      ))}
</div>
        
    </div>
  );
};

export default Product;
