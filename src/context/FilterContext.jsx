import { createContext, useContext, useEffect, useState } from "react";
import { useProduct } from "./ProductContext";

const FilterContext = createContext();

export function FilterContextProvider({ children }) {
  const { products,} = useProduct();
  const [search, setSearch] = useState("");
  const [ratings, setRatings] = useState(0);
  const [range, setRange] = useState(0);
  const [updatedProducts,setUpdatedProducts]=useState(products)

   

  function handleFilters() {
    let filteredProducts = [...products];

    if (search) {
      filteredProducts = products.filter((product) =>
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
   setUpdatedProducts(filteredProducts)
  
  }

  useEffect(() => {
   
        handleFilters();
   
  }, [search, range, ratings, products]); // Added 'products' to dependency array

  return (
    <FilterContext.Provider
      value={{
        search,
        setSearch,
        range,
        setRange,
        ratings,
        setRatings,
       
        updatedProducts,
        setUpdatedProducts,
       
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
