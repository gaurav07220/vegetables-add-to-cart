import React, { useContext } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Vegetable.css'
import { ProductContext } from '../context/ProductContext'
import { CartContext } from '../context/CartContext';

const Vegetable = () => {

    const { addToCart, cart } = useContext(CartContext) // addToCart function and cart State variable from CartContext
    const vegetables = useContext(ProductContext);      // get vegetalbes data from the ProductContext 

    const handleClick = (item) => {
        const alreadyInCart = cart.find(veg => veg.id === item.id);  // check if cart item and current item is same then show an alert of already added in cart
        if (alreadyInCart) {
            window.alert('already added')
        }
        if (!alreadyInCart) {
            addToCart(item)
        }
    }

    return (
        <div className='products-list'>

            {vegetables ?
                vegetables.map((item) => {
                    const { name, price, image, category, id } = item;  // object destructure of json file keys 
                    return (
                        <div className='product' key={id}>
                            <div className="veg-img">
                                <img src={image} alt={name.slice(0, -7)} className='product-img' />
                            </div>
                            <div className="veg-details">
                                <p>{name}</p>
                                <p>Rs. {price}</p>
                                <p>{category}</p>
                            </div>

                            <span className='add-cart-icon' onClick={() => handleClick(item)}> <AddShoppingCartIcon /> </span>

                        </div>
                    )
                })
                :
                <h1>Loading....</h1>
            }

        </div>
    )
}

export default Vegetable
