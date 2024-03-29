import React, { useState,useContext, useEffect } from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// cart context
import { CartContext } from "../contexts/CartContext";
// import icons
import { FaShoppingBag } from "react-icons/fa";
// import Link
import { Link } from "react-router-dom";
// import logo
import Logo from "../img/logo.svg";

const Header = () => {
  // header state 
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // event listener  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 800 ? setIsActive(true): setIsActive(false )
    })
  })

  return (
    <header className={`${isActive ? 'bg-none py-4 shadow-md ':'bg-white py-6'} fixed w-full z-10 transition-all`} >
      <div className=" container mx-auto flex  items-center justify-between h-full">  

     
      {/* logo */}
      <Link to={"/"}>
        <div>
          <img className="w-[40px]" src={Logo} alt="" />{" "}
        </div>
      </Link>
      {/* {cart} */}
      <div
        onClick={() => {
          setIsOpen(!true);
        }}
        className="cursor-pointer flex relative "
      >
        <FaShoppingBag className="text-2xl" />
        <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
          {itemAmount}
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
