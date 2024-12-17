  import React, { useState, useContext } from 'react';
  import { AuthContext } from '../context/AuthContext';
  import { Link, useNavigate } from 'react-router-dom';
  import Header from './Header';
  const Login = () => {
      const navigate = useNavigate();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const { login } = useContext(AuthContext); // Lấy hàm login từ AuthContext

      const handleLogin = async (e) => {
          e.preventDefault();
          
          // Gọi hàm login từ AuthContext
          await login(email, password); // Chuyển email và mật khẩu vào hàm login

          // Sau khi đăng nhập thành công, bạn có thể điều hướng người dùng nếu cần
          // (Tùy thuộc vào logic trong AuthContext)
      };

      const handleRegisterClick = () => {
          navigate('/register'); // Điều hướng đến trang đăng ký
      };

      return (
<div id="main-wrapper">
<Header/>
  <div className="container-login">
    {/*-------------------------------- Form login-------------------------- */}
    <div className="form-login container-sm">
  <div className="fl-left">
    <h1 className="name-lg">Đăng nhập</h1>
    <form onSubmit={handleLogin}>
      <div className="lg-user_name">
        <div className="lg-user_name__input">
          <div className="input-group">
            <input
              required
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              className="input input-login-register input-user_name"
            />
            <label className="user-label">Email</label>
            {/* Bootstrap Icon thay thế */}
            <i className="bi bi-person-circle" />
          </div>
        </div>
      </div>
      <div className="lg-password">
        <div className="lg-password__input">
          <div className="input-group">
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              className="input input-login-register input-password"
            />
            <label className="user-label">Mật khẩu</label>
            {/* Bootstrap Icon thay thế */}
            <i className="bi bi-eye" />
          </div>
        </div>
      </div>
      <div className="fg-pass">
        <a href="/quenmatkhau">Quên mật khẩu ?</a>
      </div>
      <div className="btn-login">
        <input type="submit" defaultValue="Đăng nhập" />
      </div>
      <div className="d-xxl-none d-flex justify-content-center align-items-center mt-2">
        Bạn chưa có tài khoản
        <div
          onClick={handleRegisterClick}
          style={{ cursor: "pointer" }}
          className="register-now ml-2"
        >
          Đăng ký ngay !
        </div>
      </div>
    </form>
  </div>
  <div className="fl-right">
    <h1>Bạn chưa có tài khoản ?</h1>
    <div
      onClick={handleRegisterClick}
      style={{ cursor: "pointer" }}
      className="register-now"
    >
      Đăng ký ngay !
    </div>
  </div>
</div>

    {/* -----------------------------End Form login------------------------- */}

  </div>
  <div className="fixed-icons">
  <a href="tel:+84123456789" className="icon-phone">
    <img src="../assets/images/phone.png" alt="Phone" />
  </a>
  <a href="#" className="icon-zalo">
    <img src="../assets/images/messenger.png" alt="messenger" />
  </a>
  <a href="#" className="icon-facebook">
    <img src="../assets/images/facebook.png" alt="Facebook" />
  </a>
  <a href="#" className="icon-tiktok">
    <img src="../assets/images/tiktok.png" alt="TikTok" />
  </a>
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
                <p>Email: cs@libworld.io.vn</p>
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
            Copyright © 2024 Nhà sách Libworld.io.vn All rights reserved
        </p>
        <hr style={{ flex: 1, borderTop: '1px solid #aaa', margin: '0 10px' }} />
    </div>
</div>
    </div>
</footer>
</div>

    );
};

export default Login;
