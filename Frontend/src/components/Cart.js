import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import { AuthContext } from '../context/AuthContext';

const Cart = () => {
  const { isAuthenticated } = useContext(AuthContext); // Lấy isAuthenticated từ AuthContext
  const [cart, setCart] = useState([]);
  const [voucherCode, setVoucherCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [shippingFee] = useState(30000);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const userId = "670d2d7f4f9223989b3f51ed";
  
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/api/cart/${userId}`);
        setCart(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart:', error);
        setError('Failed to load cart data');
        setLoading(false);
      }
    };
    fetchCart();
  }, [userId]);

  const deleteItemCart = async (productId) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/cart/${userId}/remove/${productId}`);
      setCart(res.data);
    } catch (error) {
      console.error('Error deleting cart item:', error);
      setError('Error deleting item from cart');
    }
  };

  const updateItemQuantity = async (productId, newQuantity) => {
    if (newQuantity <= 0) return;
    try {
      const res = await axios.put(`http://localhost:5000/api/cart/${userId}/update`, { productId, quantity: newQuantity });
      setCart(res.data);
    } catch (error) {
      console.error('Error updating item quantity:', error);
      setError('Error updating item quantity');
    }
  };

  const totalAfterDiscount = cart.totalPrice - discount + shippingFee;

  const handleCheckout = () => {
    if (!isAuthenticated) {
      alert('Bạn chưa đăng nhập, vui lòng đăng nhập');
      navigate('/login', { state: { from: '/checkout' } }); // Truyền đường dẫn đến trang thanh toán
    } else {
      // Nếu người dùng đã đăng nhập, điều hướng đến trang thanh toán
      navigate('/checkout', { state: { cart } });
    }
  };

  return (
    <div id="main-wrapper">
      <Header />
      <div className="container-fluid">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
              <li className="breadcrumb-item active" aria-current="shop">Sản phẩm</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container mt120 mb-50">
        {loading ? (
          <div>Loading cart...</div>
        ) : error ? (
          <div className="alert alert-danger">{error}</div>
        ) : cart.items && cart.items.length > 0 ? (
          <div className="row">
            <div className="col-xl-8">
              <div className="card shadow-none">
                <div className="card-body cart mb-2 cart-title">
                  <div className="row">
                    <div className="col-7 d-flex justify-content-center">
                      <strong>Sản phẩm</strong>
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                      <strong>Số lượng</strong>
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                      <strong>Chức năng</strong>
                    </div>
                  </div>
                </div>
                {cart.items.map((item) => (
                  <div key={item._id}>
                    <div className="card-body cart mb-2">
                      <div className="row align-items-center">
                        <div className="col-7 d-flex align-items-center">
                          <img 
                            src={item.product.image} 
                            alt={item.product.description} 
                            width={80} 
                            height={80} 
                            className="me-3"
                          />
                          <p className="mb-0">{item.product.title}</p>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                          <button 
                            className="btn btn-sm btn-outline-secondary" 
                            onClick={() => updateItemQuantity(item.product._id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <input 
                            type="number" 
                            className="form-control mx-2 text-center" 
                            value={item.quantity} 
                            readOnly 
                            style={{ width: "50px" }}
                          />
                          <button 
                            className="btn btn-sm btn-outline-secondary" 
                            onClick={() => updateItemQuantity(item.product._id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                          <button 
                            className="btn btn-sm btn-danger" 
                            onClick={() => deleteItemCart(item.product._id)}
                          >
                           <i className="bi bi-trash-fill" />

                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5>Tóm tắt đơn hàng</h5>
                  <p>Tổng tiền hàng: {cart.totalPrice} VND</p>
                  <p>Phí vận chuyển: {shippingFee} VND</p>
                  {/* <p>Giảm giá: {discount} VND</p> */}
                  <hr />
                  <h5>Tổng cộng: {totalAfterDiscount} VND</h5>

                  {/* <div className="mt-3">
                    <h6>Nhập mã giảm giá</h6>
                    <input 
                      type="text" 
                      className="form-control mb-2" 
                      placeholder="Nhập mã voucher" 
                      value={voucherCode} 
                      onChange={(e) => setVoucherCode(e.target.value)} 
                    />
                    <button className="btn btn-primary w-100" onClick={applyVoucher}>Áp dụng mã</button>
                  </div> */}

                  <button className="btn btn-success w-100 mt-3" onClick={handleCheckout}>Thanh toán</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">Không có sản phẩm trong giỏ hàng.</div>
        )}
      </div>

      <footer className="footer-section" style={{ backgroundColor: "#f8f9fa", padding: "40px 0" }}>
  <div className="row mb-4">
  <div className="col-md-12 text-center" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px' }}>
    <form className="d-flex justify-content-center align-items-center">
      <h4 className="mb-0 me-3" style={{ color: '#FF7F00' }}>Đăng ký nhận bản tin</h4>
      <input
        type="email"
        className="form-control me-2"
        placeholder="Nhập địa chỉ email của bạn"
        style={{ borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
      />
      <button className="btn" style={{ backgroundColor: '#FF7F00', color: '#fff', borderRadius: '5px' }} type="submit">
        Đăng ký
      </button>
    </form>
  </div>
</div>
<div className="container">
        <div className="row">
        <div className="col-lg-5 col-md-7 mb-4">
    <div className="footer-logo color-black text-dark">
        <h1><a href="/" className="text-dark">Libworld.io.vn</a></h1>
        <p>Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM</p>
        <p>Công Ty Cổ Phần Phát Hành Sách TP HCM - LIBWORLD</p>
        <p>60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam</p>
        <p>Libworld.io.vn nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả hệ thống Libworld trên toàn quốc.</p>
        <div className="footer-social d-flex">
    <a href="#" className="me-3">
        <i className="bi bi-facebook"></i>
    </a>
    <a href="#" className="me-3">
        <i className="bi bi-twitter"></i>
    </a>
    <a href="#" className="me-3">
        <i className="bi bi-instagram"></i>
    </a>
    <a href="#">
        <i className="bi bi-youtube"></i>
    </a>
</div>

    </div>
</div>
            <div className="col-lg-2 col-md-7 mb-4">
                <h4 className="title">Dịch Vụ</h4>
                <ul className="list-unstyled">
                    <li><a href="#">Điều khoản sử dụng</a></li>
                    <li><a href="#">Chính sách bảo mật thông tin cá nhân</a></li>
                    <li><a href="#">Chính sách bảo mật thanh toán</a></li>
                    <li><a href="#">Giới thiệu Libworld</a></li>
                    <li><a href="#">Hệ thống trung tâm - nhà sách</a></li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-7 mb-4">
                <h4 className="title">Hỗ Trợ</h4>
                <ul className="list-unstyled">
                    <li><a href="#">Chính sách đổi - trả - hoàn tiền</a></li>
                    <li><a href="#">Chính sách bảo hành - bồi hoàn</a></li>
                    <li><a href="#">Chính sách vận chuyển</a></li>
                    <li><a href="#">Chính sách khách sỉ</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-9 mb-4 text-dark">
                <h4 className="title">Liên Hệ</h4>
                <p>Địa chỉ: 60-62 Lê Lợi, Q.1, TP. HCM</p>
                <p>Email: cs@libworld.com.vn</p>
                <p>Điện thoại: 1900 636 467</p>
            </div>
        </div>

        <div className="row align-items-center">
            <div className="col-md-6 mb-3">
                <div className="d-flex justify-content-start">
                    <a href="#" className="me-3"><img src="assets/images/appstore.jpg" style={{ height:'50px', width: '150px' }} alt="App Store" /></a>
                    <a href="#"><img src="assets/images/ggplay.png" style={{ height:'50px', width: '150px' }} alt="Google Play" /></a>
                </div>
            </div>
        </div>



<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4544374621546!2d106.62420897412295!3d10.852999257778526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1728542762299!5m2!1svi!2s" width={'100%'} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        
        <div className="row mt-4" style={{ display: 'flex', alignItems: 'center' }}>
    <div className="col-md-12 text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <hr style={{ flex: 1, borderTop: '1px solid #aaa', margin: '0 10px' }} />
        <p className="mb-0" style={{ color: '#aaa', whiteSpace: 'nowrap' }}>
            Copyright © 2024 Nhà sách Libworld.com All rights reserved
        </p>
        <hr style={{ flex: 1, borderTop: '1px solid #aaa', margin: '0 10px' }} />
    </div>
</div>
    </div>
</footer>
    </div>
  );
};

export default Cart;
