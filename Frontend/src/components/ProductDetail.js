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
    <div className="container p-0">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
          <li className="breadcrumb-item active" aria-current="page">Sản phẩm</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Single Product Section Start */}
  <div className>
    <div className="single-product-section section   pt-md-70 pt-sm-60 pb-100 pb-lg-80 pb-md-70 pb-sm-30 pb-xs-20">
      <div className="container">
        <div className="row bg-white p-2 mt-xs-2 pt-4 bdr-10">
          <div className="col-md-5 d-flex justify-content-center">
            <div className="img-single_product">
              <img src="assets/images/sp1.jpg" alt />
            </div>
          </div>
          <div className="col-md-7">
            {/*Product Details Content Start*/}
            <div className="product-details-content">
              <h2>Giày Bóng Đá Nike Mercurial</h2>
              <div className="single-product-price">
                <span className="price new-price">500.000<sup>đ</sup></span>
                {/* <span class="regular-price">$77.00</span> */}
              </div>
              {/* <div class="single-product-reviews">
                          <i style="color: #febb0a;" class="fa fa-star"></i>
                          <i style="color: #febb0a;" class="fa fa-star"></i>
                          <i style="color: #febb0a;" class="fa fa-star"></i>
                          <i style="color: #febb0a;" class="fa fa-star"></i>
                          <i style="color: #febb0a;" class="fa fa-star"></i>
                          <a style="color: #febb0a;" class="review-link" href="#">(3 lượt đánh giá)</a>
                      </div> */}
              <div className="product-description">
                <p>Giày bóng đá Soccer Beck làm từ chất liệu tốt nhất , mang lại cho người dùng cảm giác êm chân khi trải nghiệm giày, đây là mẫu Giày Bóng Đá Nike Mercurial mới nhất của chúng tôi, mong các bạn có 1 trải nghiệm thật tốt với sản phẩm !</p>
              </div>
              <div className="single-product-quantity">
                <form className="add-quantity" action="#">
                  <div className="product-quantity">
                    <input defaultValue={1} type="number" />
                  </div>
                  <div className="add-to-link">
                    <button className="product-add-btn" data-text="add to cart">thêm vào giỏ hàng</button>
                  </div>
                </form>
              </div>
              <div className="product-meta">
                <span className="posted-in">
                  Thể loại:
                  <a href="#">Giày bóng đá </a>,
                  <a href="#">giày đế đinh</a>
                </span>
              </div>
              <div className="product-meta">
                <span className="posted-in">
                  Tác giả:
                  <a href="#">Giày bóng đá </a>
                </span>
              </div>
            </div>
            {/*Product Details Content End*/}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Single Product Section End */}
  {/*Product Description Review Section Start*/}
  <div className="product-description-review-section section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 bg-white p-5 bdr-10">
          <div className="product-review-tab">
            {/*Review And Description Tab Menu Start*/}
            <ul className="nav dec-and-review-menu">
              <li>
                <a className="active" data-toggle="tab" href="#description">Mô tả</a>
              </li>
              <li>
                <a data-toggle="tab" href="#reviews">Đánh giá (3)</a>
              </li>
            </ul>
            {/*Review And Description Tab Menu End*/}
            {/*Review And Description Tab Content Start*/}
            <div className="tab-content product-review-content-tab" id="myTabContent-4">
              <div className="tab-pane fade active show" id="description">
                {/* Mô tả */}
                <div className="single-product-description row">
                  <div className="col-4 col-sm-4 col-lg-2 d-flex justify-content-end">
                    <img src="assets/images/sp1.jpg" alt className="mt-img" />
                  </div>
                  <div className="col-8 col-sm-8 col-lg-10">
                    <p className="mt-content">
                      - Nội dung: fdsfds <br />
                      - Thể loại: dsgo sgđ
                    </p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="reviews">
                <div className="review-page-comment">
                  <h2>3 đánh giá</h2>
                  <ul>
                    <li>
                      <div className="product-comment mb-20">
                        <img src="assets/images/user1.png" alt />
                        <div className="product-comment-content">
                          <div className="product-reviews">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                          </div>
                          <p className="meta">
                            <strong>Ngọc Huy</strong> - <span>November 22, 2018</span>
                          </p><div className="description">
                            <p>Sản phẩm tốt !</p>
                          </div>
                        </div>
                      </div>
                      <div className="product-comment mb-20">
                        <img src="./assets/images/user2.png" height="60px" alt />
                        <div className="product-comment-content">
                          <div className="product-reviews">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <p className="meta">
                            <strong>Thạch Phát</strong> - <span>November 22, 2018</span>
                          </p><div className="description">
                            <p>Sản phẩm sử dụng ok !</p>
                          </div>
                        </div>
                      </div>
                      <div className="product-comment mb-20">
                        <img src="./assets/images/user3.png" alt />
                        <div className="product-comment-content">
                          <div className="product-reviews">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <p className="meta">
                            <strong>Thái Lộc</strong> - <span>November 22, 2018</span>
                          </p><div className="description">
                            <p>Phù hợp với giá tiền !</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="review-form-wrapper">
                    <div className="review-form">
                      <span className="comment-reply-title">Thêm một bài đánh giá </span>
                      <form action="#">
                        <p className="comment-notes">
                        </p><div className="input-element">
                          <div className="comment-form-comment">
                            <label>Comment</label>
                            <textarea name="message" cols={40} rows={8} defaultValue={""} />
                          </div>
                          {/* <div class="review-comment-form-author">
                                                      <label>Name </label>
                                                      <input required="required" type="text">
                                                  </div>
                                                  <div class="review-comment-form-email">
                                                      <label>Email </label>
                                                      <input required="required" type="text">
                                                  </div> */}
                          <div className="comment-submit">
                            <button type="submit" className="form-button">Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Review And Description Tab Content End*/}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Product Description Review Section Start*/}
  {/*Product section start*/}
  <div className="product-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-65 pb-lg-45 pb-md-35 pb-sm-25 pb-xs-15">
    <div className="container bg-white p-5 bdr-10">
      <div className="row">
        {/* Section Title Start */}
        <div className="col">
          <div className="section-title mb-40 mb-xs-20">
            <h2>Những sản phẩm tương tự</h2>
          </div>
        </div>
        {/* Section Title End */}
      </div>
      <div className="row tf-element-carousel" data-slick-options="{
          &quot;slidesToShow&quot;: 4,
          &quot;slidesToScroll&quot;: 1,
          &quot;infinite&quot;: true,
          &quot;arrows&quot;: true,
          &quot;prevArrow&quot;: {&quot;buttonClass&quot;: &quot;slick-btn slick-prev&quot;, &quot;iconClass&quot;: &quot;fa fa-angle-left&quot; },
          &quot;nextArrow&quot;: {&quot;buttonClass&quot;: &quot;slick-btn slick-next&quot;, &quot;iconClass&quot;: &quot;fa fa-angle-right&quot; }
          }" data-slick-responsive="[
          {&quot;breakpoint&quot;:1199, &quot;settings&quot;: {
          &quot;slidesToShow&quot;: 3
          }},
          {&quot;breakpoint&quot;:992, &quot;settings&quot;: {
          &quot;slidesToShow&quot;: 2
          }},
          {&quot;breakpoint&quot;:768, &quot;settings&quot;: {
          &quot;slidesToShow&quot;: 2,
          &quot;arrows&quot;: false,
          &quot;autoplay&quot;: true
          }},
          {&quot;breakpoint&quot;:576, &quot;settings&quot;: {
          &quot;slidesToShow&quot;: 1,
          &quot;arrows&quot;: false,
          &quot;autoplay&quot;: true
          }}
          ]">
        <div className="col-lg-3 px-3">
          {/* Single Product Start */}
          <div className="single-product mb-30">
            <div className="product-img">
              <a href="single-product.html">
                <img src="assets/images/sp1.jpg" alt />
              </a>
              <span className="descount-sticker">-15%</span>
              <div className="product-action d-flex justify-content-between">
                <a className="product-btn" href="#">Thêm vào giỏ</a>
                <ul className="d-flex">
                  <li><a href="#quick-view-modal-container" data-toggle="modal" title="Quick View"><i className="fa fa-eye" /></a></li>
                  <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                  <li><a href="#"><i className="fa fa-exchange" /></a></li>
                </ul>
              </div>
            </div>
            <div className="product-content">
              <h3><a href="single-product.html">Giày Bóng Đá TQ Nike </a></h3>
              <h4 className="price"><span className="new">310.00 đ</span><span className="old">430.00 đ</span></h4>
            </div>
          </div>
          {/* Single Product End */}
        </div>
        <div className="col-lg-3 px-3">
          {/* Single Product Start */}
          <div className="single-product mb-30">
            <div className="product-img">
              <a href="single-product.html">
                <img src="assets/images/product/yeunhungdieukhonghoanhao.jpg" alt />
              </a>
              <span className="descount-sticker">-10%</span>
              <div className="product-action d-flex justify-content-between">
                <a className="product-btn" href="#">Thêm vào giỏ</a>
                <ul className="d-flex">
                  <li><a href="#quick-view-modal-container" data-toggle="modal" title="Quick View"><i className="fa fa-eye" /></a></li>
                  <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                  <li><a href="#"><i className="fa fa-exchange" /></a></li>
                </ul>
              </div>
            </div>
            <div className="product-content">
              <h3><a href="single-product.html">Giày Bóng Đá Nike Lunar </a></h3>
              <h4 className="price"><span className="new">900.00 đ</span><span className="old">1.130.000 đ</span></h4>
            </div>
          </div>
          {/* Single Product End */}
        </div>
        <div className="col-lg-3 px-3">
          {/* Single Product Start */}
          <div className="single-product mb-30">
            <div className="product-img">
              <a href="single-product.html">
                <img src="./assets/images/product/muonkiepnhansinh1.jpeg" alt />
              </a>
              <span className="descount-sticker">-10%</span>
              <div className="product-action d-flex justify-content-between">
                <a className="product-btn" href="#">Thêm vào giỏ</a>
                <ul className="d-flex">
                  <li><a href="#quick-view-modal-container" data-toggle="modal" title="Quick View"><i className="fa fa-eye" /></a></li>
                  <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                  <li><a href="#"><i className="fa fa-exchange" /></a></li>
                </ul>
              </div>
            </div>
            <div className="product-content">
              <h3><a href="single-product.html">Giày Bóng Đá Nike Tiempo</a></h3>
              <h4 className="price"><span className="new">710.00 đ</span><span className="old">930.00 đ</span></h4>
            </div>
          </div>
          {/* Single Product End */}
        </div>
        <div className="col-lg-3 px-3">
          {/* Single Product Start */}
          <div className="single-product mb-30">
            <div className="product-img">
              <a href="single-product.html">
                <img src="./assets/images/product/7.webp" alt />
              </a>
              <span className="descount-sticker">-10%</span>
              <div className="product-action d-flex justify-content-between">
                <a className="product-btn" href="#">Thêm vào giỏ</a>
                <ul className="d-flex">
                  <li><a href="#quick-view-modal-container" data-toggle="modal" title="Quick View"><i className="fa fa-eye" /></a></li>
                  <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                  <li><a href="#"><i className="fa fa-exchange" /></a></li>
                </ul>
              </div>
            </div>
            <div className="product-content">
              <h3><a href="single-product.html">Giày Bóng Đá TQ Nike II</a></h3>
              <h4 className="price"><span className="new">610.00 đ</span><span className="old">1.200.000 đ</span></h4>
            </div>
          </div>
          {/* Single Product End */}
        </div>
        <div className="col-lg-3 px-3">
          {/* Single Product Start */}
          <div className="single-product mb-30">
            <div className="product-img">
              <a href="single-product.html">
                <img src="./assets/images/product/10.webp" alt />
              </a>
              <span className="descount-sticker">-10%</span>
              <div className="product-action d-flex justify-content-between">
                <a className="product-btn" href="#">Thêm vào giỏ</a>
                <ul className="d-flex">
                  <li><a href="#quick-view-modal-container" data-toggle="modal" title="Quick View"><i className="fa fa-eye" /></a></li>
                  <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                  <li><a href="#"><i className="fa fa-exchange" /></a></li>
                </ul>
              </div>
            </div>
            <div className="product-content">
              <h3><a href="single-product.html">Giày Bóng Đá TQ Nike React</a></h3>
              <h4 className="price"><span className="new">710.00 đ</span><span className="old">930.00 đ</span></h4>
            </div>
          </div>
          {/* Single Product End */}
        </div>
        <div className="col-lg-3 px-3">
          {/* Single Product Start */}
          <div className="single-product mb-30">
            <div className="product-img">
              <a href="single-product.html">
                <img src="./assets/images/product/9.webp" alt />
              </a>
              <span className="descount-sticker">-20%</span>
              <div className="product-action d-flex justify-content-between">
                <a className="product-btn" href="#">Thêm vào giỏ</a>
                <ul className="d-flex">
                  <li><a href="#quick-view-modal-container" data-toggle="modal" title="Quick View"><i className="fa fa-eye" /></a></li>
                  <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                  <li><a href="#"><i className="fa fa-exchange" /></a></li>
                </ul>
              </div>
            </div>
            <div className="product-content">
              <h3><a href="single-product.html">Giày Bóng Đá Wika NEO</a></h3>
              <h4 className="price"><span className="new">810.00 đ</span><span className="old">1.130.000 đ</span></h4>
            </div>
          </div>
          {/* Single Product End */}
        </div>
        <div className="col-lg-3 px-3">
          {/* Single Product Start */}
          <div className="single-product mb-30">
            <div className="product-img">
              <a href="single-product.html">
                <img src="./assets/images/product/11.webp" alt />
              </a>
              <span className="descount-sticker">-20%</span>
              <div className="product-action d-flex justify-content-between">
                <a className="product-btn" href="#">Thêm vào giỏ</a>
                <ul className="d-flex">
                  <li><a href="#quick-view-modal-container" data-toggle="modal" title="Quick View"><i className="fa fa-eye" /></a></li>
                  <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                  <li><a href="#"><i className="fa fa-exchange" /></a></li>
                </ul>
              </div>
            </div>
            <div className="product-content">
              <h3><a href="single-product.html">Giày Bóng Đá Wika NEO I</a></h3>
              <h4 className="price"><span className="new">810.00 đ</span><span className="old">1.130.000 đ</span></h4>
            </div>
          </div>
          {/* Single Product End */}
        </div>
        <div className="col-lg-3 px-3">
          {/* Single Product Start */}
          <div className="single-product mb-30">
            <div className="product-img">
              <a href="single-product.html">
                <img src="./assets/images/product/3.webp" alt />
              </a>
              <span className="descount-sticker">-15%</span>
              <div className="product-action d-flex justify-content-between">
                <a className="product-btn" href="#">Thêm vào giỏ</a>
                <ul className="d-flex">
                  <li><a href="#quick-view-modal-container" data-toggle="modal" title="Quick View"><i className="fa fa-eye" /></a></li>
                  <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                  <li><a href="#"><i className="fa fa-exchange" /></a></li>
                </ul>
              </div>
            </div>
            <div className="product-content">
              <h3><a href="single-product.html">Giày Bóng Đá TQ Nike </a></h3>
              <h4 className="price"><span className="new">310.00 đ</span><span className="old">430.00 đ</span></h4>
            </div>
          </div>
          {/* Single Product End */}
        </div>
      </div>
    </div>
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


      {/* <div className="container mt-5">
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
      </div> */}
    </div>
  );
};

export default ProductDetail;
