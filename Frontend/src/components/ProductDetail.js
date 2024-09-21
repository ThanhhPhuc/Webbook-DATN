import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handleLoginClick = () => {
    navigate('/login');
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/sach/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error('Failed to fetch product', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    const userId = '66aa18ae4436118f4dc5291b'; // Sử dụng ObjectId từ MongoDB
    addToCart(userId, product._id, 1);
    navigate('/cart'); // Chuyển hướng đến trang giỏ hàng sau khi thêm thành công
  };

  if (!product) {
    return <div className="text-center text-white">Loading...</div>;
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
              <button onClick={handleLoginClick} className="search-btn">
                <ion-icon name="person-circle-outline" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <br/><br/><br/>

      <div className="container mt-5">
        <div className="card bg-dark text-white">
          <div className="card-header">
            <h2>{product.title}</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <img src={product.image} alt={product.title} className="img-fluid rounded" />
              </div>
              <div className="col-md-6">
                <p className="card-text"><strong>Description:</strong> {product.description}</p>
                <p className="card-text"><strong>Price:</strong> <span className="badge bg-success">{product.price}</span></p>
                <p className="card-text"><strong>Author:</strong> {product.author.name}</p>
                <p className="card-text"><strong>Publisher:</strong> {product.publisher.name}</p>
                <p className="card-text"><strong>Category:</strong> {product.category.name}</p>
                <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
                  <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
