import React, { useState, createContext } from "react";
export const CartContext = createContext();
export const CartProvider = (props) => {
  const [items, setItem] = useState([]);
  return (
    <CartContext.Provider value={[items, setItem]}>
      {props.children}
    </CartContext.Provider>
  );
};
