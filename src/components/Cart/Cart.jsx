import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartList from './CartList'
import EmptyCart from './EmptyCart'

const Cart = () => {

    const { cart } = useContext(CartContext) // cart state variable form the CartContext

    // here we apply conditional rendering . if cart length is less that or equal to 0 then empty cart component will be renderd otherwise cartlist component

    return (
        <> 
            {
                cart.length <= 0 ? <EmptyCart /> : <CartList />
            }
        </>
    )
}

export default Cart
