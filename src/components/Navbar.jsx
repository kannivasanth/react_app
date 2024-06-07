import React, { useContext } from 'react'
import {Link } from "react-router-dom";
import { ProductContecxt } from '../App3';


const Navbar = () => {
    const context = useContext(ProductContecxt)
    // context = {product,setproduct,cart,setcart,cartValue,setcartValue}
  return (
    <>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart : {context.cartValue}</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar