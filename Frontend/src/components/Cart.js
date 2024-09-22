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
 <div id="main-wrapper">
  <header className="header-transparent">
    <div className="header">
      <div className="header-bottom menu-right">
        <div className="container">
          <div className="row align-items-center">
            {/*Logo start*/}
            <div className="col-lg-3 col-md-3 col-6 order-lg-1 order-md-1 order-1">
              <div className="logo">
                <a href="/"><img src="assets/images/logo.png" width="80px" alt="logo TG shop" /></a>
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
                  <li className="menu-boxs"><a href="about.html">Tra cứu</a></li>
                  <li className="menu-boxs"><a href="contact.html">Liên hệ</a></li>
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
                <a href="cart"><i className="fa fa-shopping-cart" /></a>
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
        <div className="col-md-12 d-flex w-100 justify-content-between  px-4 py-4">
          <div className="offcanvas offcanvas-start" id="demo">
            <div className="offcanvas-header">
              {/* <h1 class="offcanvas-title">Heading</h1> */}
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" />
            </div>
            <div className="offcanvas-body">
              <ul className="menu-hiden">
                <li><a href>Trang chủ</a></li>
                <li><a href>Bài viết</a></li>
                <li><a href>Sản phẩm</a></li>
                <li><a href>Về chúng tôi</a></li>
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
          <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
          <li className="breadcrumb-item active" aria-current="shop">Sản phẩm</li>
        </ol>
      </nav>
    </div>
  </div>
  <div className="container mt120 mb-50 ">
    <div className="row">
      <div className="col-xl-8">
        <div className="card shadow-none">
          <div className="card-body cart mb-2 cart-title">
            <div className="row">
              <div className="col-7 d-flex justify-content-center">Sản phẩm</div>
              <div className="col-2 d-flex justify-content-center">Số lượng</div>
              <div className="col-2 d-flex justify-content-center">Thành tiền</div>
              <div className="col-1 d-flex justify-content-center" />
            </div>
          </div>
          <div className="card-body cart mb-2">
            <div className="row">
              <div className="col-4 col-lg-2 col-sm-4">
                <img src="assets/images/sp1.jpg" alt className="cart-img_product" />
              </div>
              <div className="col-8 col-lg-10 col-sm-8">
                <div className="cart-product_infor">
                  <div className="row h-100 align-items-center">
                    <div className="col-lg-6 col-sm-12">
                      <div className="row">
                        <div className="col-sm-12 mb-4">
                          <p>Blue Block</p>
                        </div>
                        <div className="col-sm-12">
                          <p className="cart-price price-cart_product">30000</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-9 col-sm-9">
                          <div className="row align-items-center cart-control">
                            <div className="col-lg-8 col-sm-12">
                              <input type="button" className="prev-cart_quantity input-cart_quantity" defaultValue="-" />
                              <input type="number" className="number-cart_quantity" defaultValue={0} />
                              <input type="button" className="plus-cart_quantity input-cart_quantity" defaultValue="+" />
                            </div>
                            <div className=" col-lg-4 col-sm-12 pricesum-cart_product">20000</div>
                          </div>
                        </div>
                        <div className="col-3 col-sm-3">
                          <a href="'.$linkdel.'" className="cart-text px-1 cart-icon_trash">
                            <i className="fa-solid fa-trash" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body cart mb-2">
            <div className="row">
              <div className="col-4 col-lg-2 col-sm-4">
                <img src="assets/images/sp1.jpg" alt className="cart-img_product" />
              </div>
              <div className="col-8 col-lg-10 col-sm-8">
                <div className="cart-product_infor">
                  <div className="row h-100 align-items-center">
                    <div className="col-lg-6 col-sm-12">
                      <div className="row">
                        <div className="col-sm-12 mb-4">
                          <p>Blue Block</p>
                        </div>
                        <div className="col-sm-12">
                          <p className="cart-price price-cart_product">30000</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                      <div className="row">
                        <div className="col-9 col-sm-9">
                          <div className="row align-items-center cart-control">
                            <div className="col-lg-8 col-sm-12">
                              <input type="button" className="prev-cart_quantity input-cart_quantity" defaultValue="-" />
                              <input type="number" className="number-cart_quantity" defaultValue={0} />
                              <input type="button" className="plus-cart_quantity input-cart_quantity" defaultValue="+" />
                            </div>
                            <div className=" col-lg-4 col-sm-12 pricesum-cart_product">20000</div>
                          </div>
                        </div>
                        <div className="col-3 col-sm-3">
                          <a href="'.$linkdel.'" className="cart-text px-1 cart-icon_trash">
                            <i className="fa-solid fa-trash" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body cart mb-2 cart-add_more">
            <a href>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 d-flex justify-content-center align-items-center"><i className="fa-solid fa-plus" />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <p>Thêm sản phẩm</p>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a className="cart-delete_all" href>Xóa tất cả</a>
          </div>
        </div>
        {/* <div class="cart-hollow">
              <div class="text-center">Không có sản phẩm trong giỏ hàng.</div>
              <div class="box-btn__buy text-center">
                  <a href="index.php?pg=sanpham"><button><i class="me-1 fa fa-shopping-basket"></i>Tiếp tục mua
                          hàng</button></a>
              </div>
          </div> */}
        {/* end card */}
      </div>
      <div className="col-xl-4">
        {/* <div className="mt-lg-0">
          <div className="card shadow-none bg-white">
            <div className="card-header bg-transparent price-sum_border py-3 px-4">
              <h5 className="font-size-16 mb-0 card-ck">Điểm tích lũy
              </h5>
            </div>
            <div className="card shadow-none bg-white">
              <div className=" bg-transparent  py-3 px-4">
                <div className="table-responsive">
                  <table className="mb-0 w-100">
                    <tbody>
                      <tr>
                        <td className="price-cart">
                          <p className="fw-600">
                            Số điểm bạn đang có :
                          </p>
                          <p className="fw-600">
                            <span style={{color: '#ed553b'}}>10</span> điểm
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a href className="btn-use_point__cart">Sử dụng điểm</a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="mt-lg-0">
          <div className="card shadow-none bg-white">
            <div className="card-header bg-transparent price-sum_border py-3 px-4">
              <h5 className="font-size-16 mb-0 card-ck">Đơn hàng
              </h5>
            </div>
            <div className="card-body p-4 pt-2">
              <div className="table-responsive">
                <table className="mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <form action className="d-flex align-items-end w-100">
                          <div className="voucher-input">
                            <label htmlFor style={{fontWeight: 600}}>Nhập mã giảm giá</label>
                            <input type="text" />
                          </div>
                          <div className="btn-use_voucher">
                            <input type="submit" defaultValue="Sử dụng" />
                          </div>
                        </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-0" style={{fontWeight: 600}}>Mã giảm giá</p>
                        <div className="box-voucher_cart">
                          <form action>
                            <div className="row d-flex align-items-center justify-content-start w-100 m-0">
                              <div className="box-voucher_carts col-6 d-flex align-items-center mt-2">
                                <div className="row">
                                  <div className="col-9">
                                    <div className="row">
                                      <div className="col-12 " style={{fontWeight: 600, color: '#2b648b'}}>DHFDKSS</div>
                                      <div className="col-12">20.000<sup>đ</sup></div>
                                    </div>
                                  </div>
                                  <div className="col-3 d-flex align-items-center">
                                    <input type="radio" id="vehicle1" name="vehicle1" defaultValue="Bike" onchange="toggleBoxColor(this)" />
                                  </div>
                                </div>
                              </div>
                              <div className="box-voucher_carts col-6 d-flex align-items-center mt-2">
                                <div className="row">
                                  <div className="col-9">
                                    <div className="row">
                                      <div className="col-12" style={{fontWeight: 600, color: '#2b648b'}}>DHFDKSS</div>
                                      <div className="col-12">20.000<sup>đ</sup></div>
                                    </div>
                                  </div>
                                  <div className="col-3 d-flex align-items-center">
                                    <input type="radio" id="vehicle1" name="vehicle1" defaultValue="Bike" onchange="toggleBoxColor(this)" />
                                  </div>
                                </div>
                              </div>
                              <div className="box-voucher_carts col-6 d-flex align-items-center mt-2">
                                <div className="row">
                                  <div className="col-9">
                                    <div className="row">
                                      <div className="col-12" style={{fontWeight: 600, color: '#2b648b'}}>DHFDKSS</div>
                                      <div className="col-12">20.000<sup>đ</sup></div>
                                    </div>
                                  </div>
                                  <div className="col-3 d-flex align-items-center">
                                    <input type="radio" id="vehicle1" name="vehicle1" defaultValue="Bike" onchange="toggleBoxColor(this)" />
                                  </div>
                                </div>
                              </div>
                              {/* Add similar HTML for other boxes as needed */}
                            </div>
                          </form>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-cart">
                        <p style={{fontWeight: 600}}>
                          Tiền khuyến mãi :
                        </p>
                        <p>
                          10000<sup>đ</sup>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-cart">
                        <p style={{fontWeight: 600}}>
                          Tông tiền :
                        </p>
                        <p>
                          10000<sup>đ</sup>
                        </p>
                      </td>
                    </tr>
                    <tr className="price-sum_border">
                      <td className="price-cart price-cart_sum">
                        <p style={{fontWeight: 600}}>
                          Tiền khuyến mãi :
                        </p>
                        <p className="cl-price">
                          10000<sup>đ</sup>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="row my-4 align-items-center">
                  {/* <div class=" col-6 col-lg-6 col-sm-6">
                <a href="index.php?pg=sanpham" class="btn-nextbuy">
                  <p>Tiếp tục mua sắm</p>
                </a>
              </div> end col */}
                  <div className="col-12 col-lg-12 col-sm-12 ">
                    <div className="box-btn__buy">
                      <a href="index.php?pg=donhang">
                        <button>Thanh toán</button>
                      </a>
                    </div>
                  </div> {/* end col */}
                </div> {/* end row*/}
              </div>
              {/* end table-responsive */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end row */}
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

export default Cart;
