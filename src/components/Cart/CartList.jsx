// import React, {  } from 'react'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import './CartList.css'
import { CartContext } from '../context/CartContext'
import { useContext, useEffect } from 'react'

const CartList = () => {
    const { cart, removeCartItem, increaseQuantity, decreaseQuantity } = useContext(CartContext)
    // above const from the CartContext 


    // change the cart items quantity 
    const handleIncrement = (item) => {
        increaseQuantity(item) // call function with arguments for CartContext logic
    }

    const handleDecrement = (item) => {
        decreaseQuantity(item)  // call function with arguments for CartContext logic
    }

    // calculate subtotal using all cart products price and quantity 
    const calculateSubtotal = () => {
        let subtotal = 0;
        cart.forEach((item) => {
            subtotal += item.price * item.quantity;
        });
        return subtotal;
    };
    const subtotal = calculateSubtotal();   // assign calculate function to subtotal variable because you cannot access let variable out of block
    const total = subtotal - 20;    // finla total will be minus from the subtotal 


    // added onlick by handleclick and call the removecartitem function which in imported from cartContext 
    const handleDelete = (id) => {
        removeCartItem(id)    // passing id in the removeCart function to logic for Context file (remove cart item by using delete icon)
    }





    return (

        <div className='cart-section'>

            <div className="cart-items">
                <h1>Shopping Cart</h1>
                {
                    cart.map((item) => {
                        const { name, image, price, id } = item;
                        return (
                            <div className='cart-product' key={id}>
                                <img src={image} alt="" />
                                <p>{name}</p>
                                <div className='quantity-btns'>
                                    <button onClick={() => handleIncrement(item)}>+</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleDecrement(item)}>-</button>
                                </div>
                                <p>Rs. {price}</p>
                                <button onClick={() => handleDelete(id)} className='remove-cart-item'> <DeleteForeverRoundedIcon /> </button>
                            </div>
                        )
                    })
                }
            </div>
            <div className="sub-total">
                <h1>Sub Total</h1>
                <div className="sub-total-details">

                    <span>
                        {/* if totol items is less than or eaual to 9 the add 0 before value otherwise show as it is  */}
                        <p className='sub-total-text'>Total Items </p> <p>{cart.length <= 9 ? "0" + cart.length : cart.length}</p>
                    </span>

                    <span>
                        <p className='sub-total-text'>Total Price </p> <p>Rs. {subtotal}</p>
                    </span>

                    <span>
                        <p className='sub-total-text'>Discount</p>
                        <p>Rs. 20</p>
                    </span>

                    <hr />

                    <span>
                        <p className='sub-total-text'>Total Amount </p> <p>Rs. {total}</p>
                    </span>
                </div>


            </div>

        </div>

    )
}

export default CartList
