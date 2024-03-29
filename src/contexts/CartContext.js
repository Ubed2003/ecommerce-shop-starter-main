import React, { createContext, useState, useEffect } from "react";

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //  cart state
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total  price state
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);
  // add to cart
  const addToCart = (product) => {
    const newItem = { ...product, amount: 1 };

    // check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === product.id;
    });

    // if cart item is already  in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === product.id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }

    
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    });
    setCart(newCart);
  };

  // clear cart
  const clearcart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item);
  };
  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount === 1) {
      removeFromCart(id);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearcart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
        setTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
