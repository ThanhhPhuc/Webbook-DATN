import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const userId = '66aa18ae4436118f4dc5291b'; // Ví dụ userId

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/cart/${userId}`);
        setCart(res.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, [userId]);

  const updateQuantity = async (productId, quantity) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/cart/${userId}/update`, {
        productId,
        quantity
      });
      setCart(res.data);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const removeItem = async (productId) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/cart/${userId}/remove/${productId}`);
      setCart(res.data);
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  if (!cart) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div>
    <header className="header">
      <div className="header-top"></div>
      <div className="header-bottom skewBg" data-header>
        <div className="container">
          <Link to="/" className="logo">BooksP</Link>
          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="/" className="navbar-link skewBg" data-nav-link>Trang chủ</a>
              </li>
              <li className="navbar-item">
                <a href="#live" className="navbar-link skewBg" data-nav-link>Sự kiện</a>
              </li>
              <li className="navbar-item">
                <a href="#features" className="navbar-link skewBg" data-nav-link>Nổi bật</a>
              </li>
              <li className="navbar-item">
                <a href="#shop" className="navbar-link skewBg" data-nav-link>Sản phẩm</a>
              </li>
              <li className="navbar-item">
                <a href="#blog" className="navbar-link skewBg" data-nav-link>Tin tức</a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link skewBg" data-nav-link>Liên hệ</a>
              </li>
            </ul>
          </nav>
          <div className="header-actions">
            <button className="cart-btn" aria-label="cart">
              <ion-icon name="cart" />
              <span className="cart-badge">0</span>
            </button>
            <button className="search-btn" aria-label="open search" data-search-toggler>
              <ion-icon name="search-outline" />
            </button>
            <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
              <ion-icon name="menu-outline" className="menu" />
              <ion-icon name="close-outline" className="close" />
            </button>
            <button className="search-btn">
              <ion-icon name="person-circle-outline" />
            </button>
          </div>
        </div>
      </div>
    </header>
    <br/><br/><br/>

<div className="container mt-5">
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>
      <div className="card">
        <div className="card-body">
          {cart.items && cart.items.length > 0 ? (
            <ul className="list-group">
              {cart.items.map(item => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={item.product._id}>
                  <div className="d-flex flex-column">
                    <h5 className="mb-1">{item.product.title}</h5>
                    <p className="mb-1">Price: ${item.product.price}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <button 
                      className="btn btn-outline-secondary btn-sm me-2" 
                      onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button 
                      className="btn btn-outline-secondary btn-sm me-2" 
                      onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button 
                      className="btn btn-danger btn-sm" 
                      onClick={() => removeItem(item.product._id)}
                    >
                      Remove
                    </button>
                    <span className="badge bg-primary rounded-pill ms-3">${(item.quantity * item.product.price)}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center">Your cart is empty.</p>
          )}
        </div>
        <div className="card-footer text-end">
          <h4>Total Price: ${cart.totalPrice}</h4>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Cart;
