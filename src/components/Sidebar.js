import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import Icons
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
// import components
import CartItem from "../components/CartItem";
// import cartItem from '../components/CartItem'
// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// import cart context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearcart, total, itemAmount } = useContext(CartContext);
  return (
    <>
      <div
        className={`${
          isOpen ? "-right-full" : "right-0"
        } w-full bg-white fixed top-0 h-full shadow-2xl sm:max-w-[100vw] md:max-w-[100vw] lg:max-w-[45vw]   xl:max-w-[45vw]  transition-all duration-300 z-20 px-4 `}
      >
        <div className="flex items-center justify-between py-6  ">
          <div className="uppercase text-sm font-semibold">
            Shopping bag({itemAmount})
          </div>
          
          {/* {icon} */}
          <div
            onClick={handleClose}
            className="cursor-pointer w-8 h-8 flex justify-center items-center  "
          >
            <FaLongArrowAltRight className="text-2xl" />
          </div>
        </div>
        
        <div className=" flex flex-col gap-y-2 h-[300px] overflow-x-hidden      ">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
                  </div>
         
        
        <div className=" flex flex-col gap-y-3 py-4 mt-4  bottom-0  ">
          <div className=" flex w-full justify-between   ">
            {/* {total} */}
            <div className="uppercase font-semibold ">
              <span className="mr-2">Total:</span>$
              {parseFloat(total).toFixed(2)}
            </div>
            {/* {clear cart icon } */}
            <div
              onClick={clearcart}
              className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl "
            >
              <FiTrash2 />
            </div>
          </div>
  
        </div>
        </div>
        

     

    </>
  );
};

export default Sidebar;
