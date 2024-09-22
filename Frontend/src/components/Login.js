import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            setError('');
        } catch (error) {
            setError(error.error);
        }
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };
    const handleBackClick = () => {
        navigate('/');
    };

    return (
<div id="main-wrapper">
  <header className="header-transparent">
    <div className="header">
      <div className="header-bottom menu-right">
        <div className="container">
          <div className="row align-items-center h-90">
            {/*Logo start*/}
            <div className="col-lg-3 col-md-3 col-6 order-lg-1 order-md-1 order-1">
              <div className="logo">
                <a href="index.html"><img src="assets/images/logo.png" width="80px" alt="logo TG shop" /></a>
              </div>
            </div>
            {/*Logo end*/}
            {/*Menu start*/}
            <div className="col-lg-6 col-md-6 col-12 order-lg-2 order-md-2 order-3 d-flex justify-content-center">
              <nav className="main-menu menu-box">
                <ul className="my-0">
                  <li className="menu-boxs"><a href="/">Trang chủ</a>
                  </li>
                  <li className="menu-boxs"><a href="shop">Sản phẩm</a>
                  </li>
                  <li className="menu-boxs"><a href="baiviet">Bài viết</a>
                  </li>
                  {/* <li class="menu-boxs"><a href="about.html">About Us</a></li> */}
                  <li className="menu-boxs"><a href="tracuu">Tra cứu</a></li>
                </ul>
              </nav>
            </div>
            {/*Menu end*/}
            {/*Search Cart Start*/}
            <div className="col-lg-3 col-md-3 col-6 order-lg-3 order-md-3 order-2 d-flex justify-content-end">
              <div className="header-user">
                <a href="/login">
                  <i className="fa-solid fa-user" />
                </a>
              </div>
              {/* <ul class="ht-us-menu d-flex my-2">
                              <li class=""><a href="#">
                                  <img src="assets/images/user1.png" alt="" class="avatar-user">
                              </a>
                                  <ul class="ht-dropdown right">
                                      <li><p class="name-user">Chào mừng rossivo</p></li>
                                      <li><a href="my-account.html">Thông tin tài khoản</a></li>
                                      <li><a href="">Đăng xuất</a></li>
                                  </ul>
                              </li>
                          </ul> */}
              <div className="header-search">
                <button className="header-search-toggle"><i className="fa fa-search" /></button>
                <div className="header-search-form">
                  <form action="#">
                    <input type="text" placeholder="Nhập thông tin tiềm kiếm ..." />
                    <button><i className="fa fa-search" /></button>
                  </form>
                </div>
              </div>
              <div className="header-cart">
                <a href="/cart"><i className="fa fa-shopping-cart" /></a>
                {/*Mini Cart Dropdown Start*/}
                {/*Mini Cart Dropdown End*/}
              </div>
            </div>
            {/*Search Cart End*/}
          </div>
          {/*Mobile Menu start*/}
          <div className="row">
            <div className="col-12 d-flex d-lg-none">
              <div className="mobile-menu" />
            </div>
          </div>
          {/*Mobile Menu end*/}
        </div>
      </div>
    </div>
    <div className="header-tab-mobile">
      <div className="row justify-content-center bg-main">
        <img src="assets/images/logo2.png" alt className="logo-tab_mobile" />
      </div>
      <div className="row bg-main sticky-top">
        <div className="col-md-12 d-flex w-100 justify-content-between  px-4 py-4 pt-0">
          <div className="offcanvas offcanvas-start" id="demo">
            <div className="offcanvas-header">
              {/* <h1 class="offcanvas-title">Heading</h1> */}
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" />
            </div>
            <div className="offcanvas-body">
              <ul className="menu-hiden">
                <li><a href="/">Trang chủ</a></li>
                <li><a href>Blog</a></li>
                <li><a href="shop">Sản phẩm</a></li>
                <li><a href>Tra cứu</a></li>
                <li><a href>Liên hệ</a></li>
              </ul>
              {/* <button class="btn btn-secondary" type="button">A Button</button> */}
            </div>
          </div>
          {/* Button to open the offcanvas sidebar */}
          <div className="btn-open_menu__mobile">
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
              <i className="fa-solid fa-bars" />
            </button>
          </div>
          <div className="input-search_mb">
            <form action>
              <input type="text" />
              <input type="submit" defaultValue />
            </form>
          </div>
          <div className="control-tab_mobile">
            <a href><i className="fa-regular fa-user" /></a>
            {/* <a href="">
                          <img src="assets/images/user1.png" alt="" style="height: 39px; height: 39px; border-radius: 50%;">
                      </a> */}
            <a href><i className="fa-solid fa-cart-shopping" /></a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="container-login">
    {/*-------------------------------- Form login-------------------------- */}
    <div className="form-login container-sm ">
      <div className="fl-left">
        <h1 className="name-lg">Đăng nhập</h1>
        <form action>
          <div className="lg-user_name">
            <div className="lg-user_name__input">
              <div className="input-group">
                <input required type="text" name="text" autoComplete="off" className="input input-login-register input-user_name" />
                <label className="user-label">Tên đăng nhập</label>
                <i className="fa-solid fa-user" />
              </div>
            </div>
            {/* <div class="err-user_name">
                          <small class="hide">Vui lòng nhập tên đăng nhập</small>
                      </div> */}
          </div>
          <div className="lg-password">
            <div className="lg-password__input">
              <div className="input-group">
                <input required type="password" name="text" autoComplete="off" className="input input-login-register input-password" />
                <label className="user-label">Mật khẩu</label>
                <i className="fa-solid fa-eye showPassword" />
                {/* <i class="fa-regular fa-eye"></i> */}
              </div>
            </div>
            <div className="err-password">
              <small className="hide">Tên tài khoản hoặc Mật khẩu sai</small>
            </div>
          </div>
          <div className="fg-pass">
            <a href>Quên mật khẩu ?</a>
          </div>
          <div className="btn-login">
            <input type="submit" defaultValue="Đăng nhập" />
          </div>
          <div className="d-xxl-none d-flex justify-content-center align-items-center mt-2">
            Bạn chưa có tài khoản
            <div href="/register" className="register-now ml-2 ">Đăng ký ngay !</div>
          </div>
        </form>
      </div>
      <div className="fl-right">
        {/* <img src="/asset/img/sl1.jpg" alt=""> */}
        <h1>Bạn chưa có tài khoản ?</h1>
        <div href="/register" className="register-now">Đăng ký ngay !</div>
      </div>
    </div>
    {/* -----------------------------End Form login------------------------- */}

  </div>
  <footer className="footer-section section">
    {/*Footer Top start*/}
    <div className="footer-top section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-45 pb-lg-25 pb-md-15 pb-sm-5 pb-xs-0">
      <div className="container">
        <div className="row row-25">
          {/*Footer Widget start*/}
          <div className="footer-widget col-lg-4 col-md-6 col-sm-6 col-12 mb-40 mb-xs-35">
            <img src="assets/images/logo2.png" alt className="logo-footer" />
            <div className="footer-social">
              <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
              <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
              <a href="#" className="google"><i className="fa fa-google-plus" /></a>
              <a href="#" className="linkedin"><i className="fa fa-instagram" /></a>
              <a href="#" className="pinterest"><i className="fa fa-pinterest-p" /></a>
              <a href="#" className="pinterest"><i className="fa fa-vimeo" /></a>
            </div>
          </div>
          {/*Footer Widget end*/}
          {/*Footer Widget start*/}
          <div className="footer-widget col-lg-4 col-md-6 col-sm-6 col-12 mb-40 mb-xs-35">
            <h4 className="title"><span className="text">Thể loại</span></h4>
            <ul className="ft-menu">
              <li><a href="#">New products</a></li>
              <li><a href="#">Top sellers</a></li>
              <li><a href="#">Specials</a></li>
              <li><a href="#">Manufacturers</a></li>
              <li><a href="#">Suppliers</a></li>
              <li><a href="#">Specials</a></li>
              <li><a href="#">Service</a></li>
            </ul>
          </div>
          {/*Footer Widget end*/}
          {/*Footer Widget start*/}
          <div className="footer-widget col-lg-4 col-md-6 col-sm-6 col-12 mb-40 mb-xs-35">
            <h4 className="title"><span className="text">Liên hệ</span></h4>
            <ul className="address">
              <li><i className="fa fa-home" /><span>HH2 BacHa building, Tohuu Street Hanoi,
                  Vietnam</span>
              </li>
              <li><i className="fa fa-phone" /><span><a href="#">(08) 123 456 7890</a></span></li>
              <li><i className="fa fa-envelope-o" /><span><a href="#">yourmail@domain.com</a></span>
              </li>
            </ul>
            <div className="payment-box mt-15 mb-15">
            <a href="/"><img src="./assets/images/logo.png" width="80px" height="80" /></a>
            </div>
          </div>
          {/*Footer Widget end*/}
        </div>
      </div>
    </div>
    {/*Footer Top end*/}
    {/*Footer bottom start*/}
    <div className="footer-bottom section">
      <div className="container ft-border pt-40 pt-xs-20 pb-xs-20">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-8">
            <div className="copyright text-left">
              <p>Copyright ©2019 <a href="#">Theface</a>. All rights reserved.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-4">
            {/* <div className="footer-logo text-right">
              <a href="index.html"><img src="./assets/images/logo scb.jpg" alt /></a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    {/*Footer bottom end*/}
  </footer>
</div>

    );
};

export default Login;
