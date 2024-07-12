import { createContext,useContext,useEffect,useState } from 'react';


const ProductContext = createContext();

export function ProductContextProvider({children}){
    const [products,setProducts]=useState([])
    const [isLoading,setIsLoading]=useState(false);
    const [isError ,setIsError]=useState(false);
    const [category,setCategory] = useState([])
    const [cart,setCart]=useState([])

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
    async function getCategory(){
        try {
            const response = await fetch(`https://dummyjson.com/products/category-list`)
            if(response.status===200){
            const data =  await response.json()
                setCategory(data)
                console.log(data);
            }
        } catch (error) {
            console.error(error);
        }
    }
     
    useEffect(()=>{
        fetchProducts()
        getCategory()
    },[])

    console.log(products)

    function handleCart(id){
        setIsLoading(true);
        const alreadyCart = cart.some(product=>product.id===id)
        if(alreadyCart){
            setIsLoading(false)
            return;
        }
        let updateCart = products.find(product=>product.id===id) 
        setCart([...cart,{...updateCart}])
        console.log({...updateCart});
        setIsLoading(false)
        
    }
    return <ProductContext.Provider value={{products,setProducts,isLoading,setIsLoading,isError,category,handleCart,cart}}>{children}</ProductContext.Provider>
}

export function useProduct(){
    return useContext(ProductContext)
}
