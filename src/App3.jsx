import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

export const ProductContecxt = createContext()


const App3 = () => {

  const [product, setproduct] = useState([]);
  const [cart, setcart] = useState([])
  const [cartValue, setcartValue] = useState(cart.length)

  async function getData(){
    try {
       const response =  await axios.get("https://fakestoreapi.com/products") // {  }
       setproduct(response.data);
    } catch (error) {
        console.log(error);
    }
}
useEffect(()=>{
    getData()
},[])
  return (
    <ProductContecxt.Provider value={{product,setproduct,cart,setcart,cartValue,setcartValue}}>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
    </ProductContecxt.Provider>
  )
}

export default App3