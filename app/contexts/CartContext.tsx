import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    return (
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )
}