import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom'; // Thêm Link từ react-router-dom

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [permissions, setPermissions] = useState([]);
    const { register } = useContext(AuthContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        await register({ username, password, email, address, phone, permissions });
    };

    const handleLoginClick = () => {
        navigate('/login');
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


    {/* -----------------------------End Form login------------------------- */}
    <div className="form-register container-sm">
      <div className="fl-left">
        <h1 className="name-lg">Đăng kí</h1>
        <form action>
          <div className="rg-user_name">
            <div className="rg-user_name__input">
              <div className="input-group">
                <input required type="text" name="text" autoComplete="off" className="input input-login-register input-user_name" />
                <label className="user-label">Tên đăng nhập</label>
                <i className="fa-solid fa-user" />
              </div>
            </div>
            <div className="err-user_name">
              <small className="hide">Vui lòng nhập tên đăng nhập</small>
            </div>
          </div>
          <div className="rg-email">
            <div className="rg-email__input">
              <div className="input-group">
                <input required type="text" name="text" autoComplete="off" className="input input-login-register input-email" />
                <label className="user-label">Email</label>
                <i className="fa-solid fa-envelope" />
              </div>
            </div>
            <div className="err-user_name">
              <small className="hide">Vui lòng nhập email</small>
            </div>
          </div>
          <div className="rg-password">
            <div className="rg-password__input">
              <div className="input-group">
                <input required type="password" name="text" autoComplete="off" className="input input-login-register input-password rg-password_input" />
                <label className="user-label">Mật khẩu</label>
                <i className="fa-solid fa-eye showPassword" />
              </div>
            </div>
            <div className="err-password">
              <small className="hide rg-err">Mật khẩu không đủ 8 kí tự</small>
            </div>
          </div>
          <div className="rg-password_confirm">
            <div className="rg-passwordConfirm__input">
              <div className="input-group">
                <input required type="password" name="text" autoComplete="off" className="input input-login-register input-password rg-password_confirm__input" />
                <label className="user-label">Nhập lại mật khẩu</label>
                <i className="fa-solid fa-eye showPassword" />
                {/* <i class="fa-regular fa-eye"></i> */}
              </div>
            </div>
            <div className="err-password">
              <small className="hide rg-err__2">Mật khẩu không trùng khớp</small>
            </div>
          </div>
          <div className="btn-register">
            <input type="submit" defaultValue="Đăng kí" />
          </div>
          <div className="d-xxl-none d-flex justify-content-center align-items-center mt-2">
            Bạn đã có tài khoản
            <div onClick={handleLoginClick} 
      style={{cursor: 'pointer'}} className="login login-now ml-2 ">Đăng nhập ngay !</div>
          </div>
        </form>
      </div>
      <div className="fl-right">
        {/* <img src="/asset/img/sl1.jpg" alt=""> */}
        <h1>Bạn đã có tài khoản ?</h1>
        <div onClick={handleLoginClick} 
      style={{cursor: 'pointer'}} className="login-now">Đăng nhập ngay !!!</div>
      </div>
    </div>
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
        <div className="col-lg-4 col-md-7 mb-4">
    <div className="footer-logo color-black text-dark">
        <h1><a href="/" className="text-dark">Libworld.com</a></h1>
        <p>Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM</p>
        <p>Công Ty Cổ Phần Phát Hành Sách TP HCM - LIBWORLD</p>
        <p>60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam</p>
        <p>Libworld.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả hệ thống Libworld trên toàn quốc.</p>
        <div className="footer-social d-flex">
            <a href="#" className="me-3"><i className="fa fa-facebook" /></a>
            <a href="#" className="me-3"><i className="fa fa-twitter" /></a>
            <a href="#" className="me-3"><i className="fa fa-instagram" /></a>
            <a href="#"><i className="fa fa-youtube" /></a>
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
            <div className="col-lg-4 col-md-9 mb-4 text-dark">
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

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4544374621546!2d106.62420897412295!3d10.852999257778526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1728542762299!5m2!1svi!2s" width={1296} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
   

        <div className="row mt-4">
            <div className="col-md-12 text-center">
                <p className="mb-0" style={{ color: '#aaa' }}>Giấy chứng nhận Đăng ký Kinh doanh số 03041332047 do Sở Kế hoạch và Đầu tư thành phố Hồ Chí Minh cấp ngày 20/12/2005, đăng ký thay đổi lần thứ 10, ngày 20/05/2022.</p>
            </div>
        </div>
    </div>
</footer>
</div>
  
    );
};

export default Register;
