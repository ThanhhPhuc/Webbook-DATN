import React from 'react';


function thanhtoan() {

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
  <div className="container-fluid">
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
          <li className="breadcrumb-item active" aria-current="page">Giỏ hàng</li>
          <li className="breadcrumb-item active" aria-current="page">Thanh toán</li>
        </ol>
      </nav>
    </div>
  </div>
  <div className="container container-checkout mb-4 mb-md-5">
    <div className="row">
      <div className="col-12 col-md-7 bdr-10 mb-3">
        <div className="container bg-white bdr-10">
          <form action method="post">
            <div className="row">
              <div className="col-12 col-md-12 p-4 form-checkout_infor">
                <h3 className="checkout-left_title">Thông tin thanh toán</h3>
                <label htmlFor="fname"><i className="fa fa-user mb-2" /> Họ và tên</label>
                <input className="form-control required mb-4" required type="text" id="fname" name="hoten" placeholder="Nhập họ và tên đầy đủ" />
                <label htmlFor="email"><i className="fa fa-envelope mb-2" /> Email</label>
                <input className="form-control  required mb-4" type="text" id="email" name="email" placeholder="Nhập email" />
                <label htmlFor="adr"><i className="fa fa-address-card-o mb-2" /> Địa chỉ</label>
                <input className="form-control mb-4 required" type="text" id="adr" name="diachi" placeholder="Nhập địa chỉ" />
                <label htmlFor="city"><i className="fa fa-institution mb-2" /> Số điện thoại</label>
                <input className="form-control mb-4 required" type="text" id="sdt" name="sdt" placeholder="Nhập số điện thoại" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-12 col-md-5 bg-white bdr-10 p-4">
        <div className="container-checkout">
          <h4 className="checkout-right_title">Giỏ hàng
            <span className="price">
              <i className="fa fa-shopping-cart" />
              <b>1</b>
            </span>
          </h4>
          <hr />
          <p>Phí vận chuyển : <span className="price">200.000<sup>đ</sup></span></p>
          <p>Tổng đơn hàng :<span className="price">200.000<sup>đ</sup></span></p>
          <hr />
          <p className="fw-600">Tổng thanh toán :<span className="price" style={{color: '#ed553b'}}>200.000<sup>đ</sup></span></p>
        </div>
        {/* <div class="container-checkout">
              </div> */}
        <div className="ui form">
          <div className="grouped fields">
            <label className="checkout-right_title">Chọn phương thức thanh toán</label>
            <div className="grouped-fields">
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="pttt" defaultValue={1} defaultChecked="checked" />
                  <label>Tiền mặt</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="pttt" defaultValue={2} />
                  <label>Ví điện tử</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="pttt" defaultValue={3} />
                  <label>Chuyển khoản</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-checkout_input">
          <input type="submit" name="donhang" defaultValue="Tiếp tục thanh toán" className="btn-checkout" />
        </div>
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
}

export default thanhtoan;
