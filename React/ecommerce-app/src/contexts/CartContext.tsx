import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types/product';

export type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
};
// Creates a context object to share cart state across the app
const CartContext = createContext<CartContextType | undefined>(undefined);

// This component provides the cart context to its child components
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  // Function Adds a new product to the cart.
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function Removes a product by filtering out the one matching the given id.
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  // The CartProvider wraps its children in a CartContext.Provider, passing the cart state and the two functions (addToCart and removeFromCart) as its value
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// useCart Hook
// Calls useContext(CartContext) to retrieve the context value.
// If CartContext is undefined, it throws an error, ensuring the hook is only used within a CartProvider
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
