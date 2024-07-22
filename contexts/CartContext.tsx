"use client";
import { createContext, useEffect, useState } from "react";
const CartContext = createContext(0);
export default CartContext;

export const CartProvider = ({ children } : {children: any}) => {

    return (
        <CartContext.Provider value={1}>
            {children}
        </CartContext.Provider>
    )
}