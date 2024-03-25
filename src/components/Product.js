import React, { useContext } from "react";
//import link
import { Link } from "react-router-dom";
// import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";
// import cart context
import { CartContext } from "../contexts/CartContext";
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  // destructure product
  const { id, images, category, title, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[200px] mb-4 relative overflow-hidden group transition bg-cover ">
        <div className="w-full h-full flex justify-center items-center overflow-hidden bg-cover">
          {/* {image} */}
          <div className="mx-auto flex justify center items-center bg-cover">
            <img
              className="max-h-[140px] group-hover:scale-110 transition duration-300 bg-cover"
              src={images}
              alt=""
            />
          </div>
        </div>
        {/* {buttons} */}
        <div className="absolute top-6 -right-11 group-hover:right-5 bg-red-500/40 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <button onClick={() => addToCart(product, id )}>
            <Link className="flex justify-center items-center text white w-12 h-12 bg-red-500">
              {" "}
              <BsPlus className="text-3xl" />
            </Link>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* {category & title & price } */}
      <div>
        <div className="text-sm captialize text-gray-500 mb-1">
          {category.name}
        </div>
        <Link>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>

        <div className="font-semibold ">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
