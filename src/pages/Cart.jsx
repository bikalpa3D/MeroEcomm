import React from 'react'
import { useProduct } from '../context/ProductContext'
import { EcommerceCard } from '../components/EcommerceCard'
function Cart() {
const { cart } = useProduct();
  return (
    <div>
        {/* <h1>There is nothing in cart</h1> */}
    {cart.map(el=><EcommerceCard key={el.id} product={el}/> )}

    </div>
  )
}

export default Cart