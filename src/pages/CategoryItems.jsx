import React, { useState, useEffect, useContext } from "react";

import { EcommerceCard } from "../components/EcommerceCard";
import { useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import { Spinner } from "@material-tailwind/react";
import Sidebar from "../components/Sidebar";
import { FooterWithSocialLinks } from "../components/FooterWithSocialLinks";
import { useFilter } from "../context/FilterContext";

function CategoryItems() {
  const { param } = useParams();
  const { setIsLoading, isLoading } = useProduct();
  const {search,range,ratings}=useFilter()
  const [categoryProducts, setCategoryProducts] = useState([]);
  
  const [updatedCategoryProducts,setUpdatedCategoryProducts]=useState(categoryProducts)

  console.log(param);
  async function getCategoryProducts() {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/category/${param}`
      );
      if (response.status === 200) {
        const productItems = await response.json();
        setCategoryProducts(productItems.products);
        console.log(productCategory.products);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getCategoryProducts();
  }, [param]);


  function handleCategoryFilters() {
    let filteredProducts = [...categoryProducts];

    if (search) {
      filteredProducts = categoryProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (range > 0) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= range
      );
    }
    if (ratings > 0) {
      filteredProducts = filteredProducts.filter(
        (product) => product.rating >= ratings
      );
    }
   
    setUpdatedCategoryProducts(filteredProducts)
  }

  useEffect(() => {
   
        handleCategoryFilters();
   
  }, [search, range, ratings, categoryProducts]);

  

  return (
    <div className="w-full py-4 flex gap-1 flex-wrap justify-normal ">
      {/* <div className="flex justify-items-start">
        <Sidebar className="max-h-screen" />
      </div> */}
      <div className="container mx-auto w-[80%] h-full flex flex-wrap gap-4 px-3 py-4 ">
        {isLoading && (
          <Spinner className="absolute top-1/2 left-1/2 h-40 w-40" />
        )}
        {console.log(categoryProducts)}
        {categoryProducts &&
          updatedCategoryProducts.map((el) => (
            <EcommerceCard key={el.id} product={el} />
          ))}
      </div>
      {/* <div className="w-full mt-5 py-4 px-2">

      <FooterWithSocialLinks/>
      </div> */}
    </div>
  );
}

export default CategoryItems;
