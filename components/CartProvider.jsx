"use client";

import { useState } from "react";
import { CartContext } from "./context";

export default function CartProvider({ children }) {
  const cartHook = useState([]);

  return (
    <CartContext.Provider value={cartHook}>
      {children}
    </CartContext.Provider>
  );
}