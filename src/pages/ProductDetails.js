import React, { useContext } from "react";
// import useParams
import { useParams } from "react-router-dom";
// import cart context
import { CartContext } from "../contexts/CartContext";
// import Product context
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const {addToCart} = useContext(CartContext)

  // get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  if (!product) {
    return <section>Loading...</section>;
  }
  // destructure product
  console.log(products)
  const { title, price, description, images } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row  items-center">
          <div>
            <img src={images}/>
          </div>
          <div>
            {title}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
