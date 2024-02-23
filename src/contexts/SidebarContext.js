import React, {useState,createContext}from 'react';
export const  SidebarContext = createContext()

const SidebarProvider = ({children}) => {
  // sidebar state 
  const [isOpen,setIsOpen] = useState(true)

  const handleClose =()=>{
    setIsOpen(true)
  }

  return <SidebarContext.Provider value={{isOpen,setIsOpen,handleClose}}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
