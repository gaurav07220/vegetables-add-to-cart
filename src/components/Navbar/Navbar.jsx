import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const Navbar = () => {

    const { cart } = useContext(CartContext);
    return (
        <nav>
            <NavLink to='/' className='nav-link'>Products</NavLink>
            <span className='bag'>
                <NavLink to='cart' className='nav-link'>
                    <ShoppingBagIcon className='shopping-bag-icon' />
                    <span className='cart-quantity'>{cart.length}</span>
                </NavLink>
            </span>

        </nav>
    )
}

export default Navbar
