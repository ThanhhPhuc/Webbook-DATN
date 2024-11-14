// import axios from 'axios';
// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = async (userId, productId, quantity) => {
//     try {
//       const response = await axios.post(`http://localhost:5000/api/cart/${userId}`, {
//         productId,
//         quantity,
//       });
//       setCart(response.data);
//     } catch (error) {
//       console.error('Add to cart failed', error);
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Tải giỏ hàng từ localStorage khi người dùng vào lại trang
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  const addToCart = async (userId, productId, quantity) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/cart/${userId}`, {
        productId,
        quantity,
      });
      // Cập nhật giỏ hàng mới sau khi thêm sản phẩm
      const newCart = response.data;
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));  // Lưu vào localStorage
    } catch (error) {
      console.error('Add to cart failed', error);
    }
  };

  const removeFromCart = async (userId, productId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/cart/${userId}/${productId}`);
      // Cập nhật giỏ hàng sau khi xóa sản phẩm
      const newCart = response.data;
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));  // Lưu vào localStorage
    } catch (error) {
      console.error('Remove from cart failed', error);
    }
  };

  const updateQuantity = async (userId, productId, quantity) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/cart/${userId}/${productId}`, {
        quantity,
      });
      // Cập nhật giỏ hàng sau khi thay đổi số lượng
      const newCart = response.data;
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));  // Lưu vào localStorage
    } catch (error) {
      console.error('Update quantity failed', error);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
