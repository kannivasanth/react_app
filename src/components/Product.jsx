import React, { useContext } from "react";
import { ProductContecxt } from "../App3";

const Product = () => {
  const context = useContext(ProductContecxt);
  // context = {product,setproduct,cart,setcart,cartValue,setcartValue}
  return (
    <>
      <div>
        {context.product.map((products, index) => {
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

export default Product;
