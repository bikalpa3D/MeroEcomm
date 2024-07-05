import { createContext,useContext,useEffect,useState } from 'react';


const ProductContext = createContext();

export function ProductContextProvider({children}){
    const [products,setProducts]=useState([])
    const [isLoading,setIsLoading]=useState(false);
    const [isError ,setIsError]=useState(false)

    async function fetchProducts(){
        try {
            setIsLoading(true)
            const response = await fetch('https://dummyjson.com/products')
            const data =  await response.json();
            if(response.status===200){
                setProducts(data.products)
            }
        } catch (err) {
            console.log(err);
            setIsError(true)
        }finally{
            setIsLoading(false)
            setIsError(false)
        }
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    console.log(products)
    return <ProductContext.Provider value={{products,isLoading,isError}}>{children}</ProductContext.Provider>
}

export function useProduct(){
    return useContext(ProductContext)
}
