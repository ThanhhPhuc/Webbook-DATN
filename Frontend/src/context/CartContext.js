import axios from 'axios';
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (userId, productId, quantity) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/cart/${userId}`, {
        productId,
        quantity,
      });
      setCart(response.data);
    } catch (error) {
      console.error('Add to cart failed', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
