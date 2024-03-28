import React, { useContext } from "react";

// // import Link
import { Link } from "react-router-dom";

// import icons
import { IoMdCloseCircle } from "react-icons/io";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

// import cart context
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";


const CartItem = ({ item }) => {
  const {  handleClose } = useContext(SidebarContext);
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  // destructure item
  const { id, images,category, title, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 boredr-b-gray-200 w-full font-light  text-gray-500  ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* {image} */}
        <Link  onClick={handleClose} to={`/product/${id}`}>
          <img className="max-w-[80px]" src={images} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* {title & remove icons} */}
          <div   className="flex justify-between mb-2">
            {/* {title} */}
            <Link to={`/product/${id}`}>{title}</Link>
            {/* {remove icons} */}
            <div
              onClick={() => {
                removeFromCart(id);
              }}
              className="text-xl cursor-pointer"
            >
              <IoMdCloseCircle className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm">
            {/* {qauntity} */}
            <div className="flex flex-1 max-w[100px]  items-center h-full border text-primary font-medium  ">
              {/* {minus icon } */}
              <div
                onClick={() => {
                  decreaseAmount(id);
                }}
                className="flex-1 flex justify-center items-center cursor-pointer h-full"
              >
                <IoMdRemove />
              </div>

              {/* {amount} */}
              <div className="h-full flex justify-center items-center px-2 ">
                {amount}
              </div>
              {/* {plus icon} */}
              <div
                onClick={() => {
                  increaseAmount(id);
                }}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>

            {/* {item price} */}
            <div className="flex-1 flex items-center justify-around">
              ${price}
            </div>
            {/* {final price} */}
            {/* {make the price at 2 decimals } */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${price * amount}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
