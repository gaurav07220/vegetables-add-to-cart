import React from 'react'
import './EmptyCart.css'
import { NavLink } from 'react-router-dom'

const EmptyCart = () => {

    return (
        <div className='empty-cart'>
            <div className="empty-status-info">
                <h1>Your Cart Is <span className='empty-highlight'>Empty !</span></h1>
                <p>Must add items on the cart before you proceed to check out</p>
                <NavLink to='/'>Return To Shop</NavLink>
            </div>
            <div className='empty-status-img'>
                <img src="https://blogzine.webestica.com/rtl/assets/images/icon/empty-cart.svg" alt="" />
            </div>

        </div>
    )
}

export default EmptyCart
