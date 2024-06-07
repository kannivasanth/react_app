import React, { useEffect, useState } from "react";
import axios from 'axios'

const App2 = () => {
  const [product, setproduct] = useState([]);

// 1.
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((data) => setproduct(data))
//       .catch((err) => console.log(err));
//   }, []);


    // 2.
    // function getData(){
    //     return new Promise((res,rej)=>{
    //         fetch("https://fakestoreapi.com/products")
    //         .then((response) => response.json())
    //         .then((data) => res(data))
    //         .catch((err) => rej(err));
    //     })
    // }

    // useEffect(() => {
    //     getData().then(data => setproduct(data)).catch(err => console.log(err))
    // }, [])

    // 3.
    // async function getResponse(){
    //     try {
    //         const response = await fetch("https://fakestoreapi.com/products")
    //         const data = response.json()
    //         return data
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // async function getData(){
    //     try {
    //         const allproducts = await getResponse()
    //         setproduct(allproducts)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(()=>{
    //     getData()
    // },[])

    // 4. axios 

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
    console.log(product);
    
  return (
    <>
      <div>
        {product.map((products, index) => {
          return (
            <div key={index}>
              <h1>{products.title}</h1>
              <img
                src={products.image}
                alt={products.title}
                width={150}
                height={150}
              />
              <h3>{products.description}</h3>
              <h4>Price : Rs {products.price}</h4>
              <h4>Rating : {products.rating.rate} </h4>
              <h4>Available Count : {products.rating.count} </h4>
              <button>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App2;
