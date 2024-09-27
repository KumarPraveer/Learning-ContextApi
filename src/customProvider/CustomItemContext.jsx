import React, { createContext, useContext } from "react";

import { useState } from "react";
import CardModal from "../components/CardModal";

const totalItemContext = createContext();

function useValue() {
  let value = useContext(totalItemContext);
  return value;
}

function CustomItemContext({ children }) {
  const [totalItem, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (prod) => {
    const index = cart.findIndex((item) => item.id == prod.id);
    if (index == -1) {
      setCart([...cart, { ...prod, quantity: 1 }]);
      setTotalPrice((prev) => prev + prod.price);
    } else {
      cart[index].quantity += 1;
      setTotalPrice((prev) => prev + prod.price);
      setCart(cart);
    }
    setTotalItem((prev) => prev + 1);
    console.log(cart);
  };

  const clearCart = () => {
    setCart([]);
    setTotalPrice(0);
    setTotalItem(0);
  };

  const handleRemoveFromCart = (id, price) => {
    const index = cart.findIndex((item) => item.id == id);
    if (index == -1) return;
    if (cart[index].quantity == 1) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity -= 1;
    }
    setCart(cart);
    if (totalItem <= 0) return;
    setTotalItem((prev) => prev - 1);
    setTotalPrice((prev) => prev - price);
  };

  const handleReset = () => {
    setTotalItem(0);
    setTotalPrice(0);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <totalItemContext.Provider
        value={{
          totalItem,
          totalPrice,
          handleAddToCart,
          handleRemoveFromCart,
          handleReset,
          toggleCart,
          cart,
          clearCart,
        }}
      >
        {showCart && <CardModal />}
        {children}
      </totalItemContext.Provider>
    </>
  );
}

export { useValue };
export default CustomItemContext;
