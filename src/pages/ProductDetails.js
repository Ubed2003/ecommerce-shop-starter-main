import React, { useContext } from "react";
// import useParams
import {useParams} from 'react-router-dom'
// import cart context
// import { CartContext } from "../contexts/CartContext";
// import Product context
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // get the product id from the url
  const {id} = useParams()
const {products} = useContext(ProductContext)
// const {addToCart} = useContext(CartContext)

// get the single product based on the id
const product = products.find(item =>{
  return item.id === parseInt(id)
})
if (!product){
  return (
    <section>
      Loading...
    </section>
  )
}
  return <div>Product Details Page </div>;
};

export default ProductDetails;
