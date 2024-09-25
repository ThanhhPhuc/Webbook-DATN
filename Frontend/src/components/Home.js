import AddBook from './AddBook'; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="slick-prev slick-arrow"><i className="fa fa-angle-left"></i></button>,
    nextArrow: <button className="slick-next slick-arrow"><i className="fa fa-angle-right"></i></button>,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  };
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const handleLoginClick = () => {
    navigate('/login');
  };
  useEffect(() => {
    axios.get('http://localhost:5000/api/sach')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);
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
                <a href="index.html"><img src="assets/images/logo.png" width="80px" height="88" alt="logo TG shop" /></a>
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
  <div id="slider" className="carousel slide mb-60" data-bs-ride="carousel">
    {/* Indicators/dots */}
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#slider" data-bs-slide-to={0} className="active" />
      <button type="button" data-bs-target="#slider" data-bs-slide-to={1} />
      <button type="button" data-bs-target="#slider" data-bs-slide-to={2} />
    </div>
    {/* The slideshow/carousel */}
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="assets/images/6828743.jpg" alt="Los Angeles" className="d-block" style={{width: '100%'}} />
      </div>
      <div className="carousel-item">
        <img src="assets/images/FahasaSaleT3_BlackFriday_Banner_Web_1920x700.jpg" alt="Chicago" className="d-block" style={{width: '100%'}} />
      </div>
      <div className="carousel-item">
        <img src="https://cdn.pixabay.com/photo/2023/10/01/13/54/bird-8287451_640.jpg" alt="New York" className="d-block" style={{width: '100%'}} />
      </div>
    </div>
    {/* Left and right controls/icons */}
    <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" />
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
      <span className="carousel-control-next-icon" />
    </button>
  </div>
  <div class="container mt-30 mb-50">
            <div class="catalog-item bg-white bdr-10">
                <p class="title-cata_sm">Thể loại</p>
                <h1 class="title-cata">Các thể loại của chúng tôi</h1>
                <div class="product-section section">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="products">
                                        <div class="row tf-element-carousel" data-slick-options='{  
                                    "slidesToShow": 4,      
                                    "slidesToScroll": 1,
                                    "infinite": true,
                                    "rows": 1,
                                    "arrows": true,
                                    "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "fa fa-angle-left" },
                                    "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "fa fa-angle-right" }
                                    }' data-slick-responsive='[
                                    {"breakpoint":1199, "settings": {
                                    "slidesToShow": 4
                                    }},
                                    {"breakpoint":992, "settings": {
                                    "slidesToShow": 2
                                    }},
                                    {"breakpoint":768, "settings": {
                                    "slidesToShow": 2,
                                    "arrows": false,
                                    "autoplay": true
                                    }},
                                    {"breakpoint":576, "settings": {
                                    "slidesToShow": 1,
                                    "arrows": false,
                                    "autoplay": true
                                    }}
                                    ]'>
                    <div className="col-12 px-3">
                    <ul>
                    <Slider {...settings}>
        {books.map((book) => (
          <div key={book._id} className="px-3">
            <div className="shop-card">
              <figure className="card-banner img-holder" style={{ width: 300, height: 260 }}>
                <img
                  src={book.image}
                  width={300}
                  height={260}
                  loading="lazy"
                  alt={book.title || 'Book image'}
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <Link to={`/sach/${book._id}`} className="card-badge skewBg">
                  {book.publisher && book.publisher.name ? book.publisher.name : 'Unknown Publisher'}
                </Link>
                <h3 className="h3">
                  <Link to={`/sach/${book._id}`} className="card-title">
                    {book.title || 'Untitled Book'}
                  </Link>
                </h3>
                <div className="card-wrapper">
                  <p className="card-price">{book.price ? `${book.price} VND` : 'Price not available'}</p>
                  <button className="card-btn">
                    <ion-icon name="basket" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container product-big">
    <div className="product-section section pt-4 bg-white bdr-10 mb-5">
      <div className="container">
        <p className="title-sp_sm">Sản phẩm</p>
        <div className="row">
          <div className="col pl-24">
            <div className="product-tab-menu mb-xs-20">
              <ul className="nav">
                {/* <li><a class="active" data-toggle="tab" href="#products"> Sản phẩm mới</a></li> */}
                <li><a data-toggle="tab" href="#product"> Sản phẩm</a></li>
                <li><a data-toggle="tab" href="#onsale"> Đang giảm giá !</a></li>
                <li><a data-toggle="tab" href="#featureproducts"> Mới !</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="product">
                <div className="row tf-element-carousel" data-slick-options="{  
                          &quot;slidesToShow&quot;: 4,
                          &quot;slidesToScroll&quot;: 1,
                          &quot;infinite&quot;: true,
                          &quot;rows&quot;: 2,
                          &quot;arrows&quot;: true,
                          &quot;prevArrow&quot;: {&quot;buttonClass&quot;: &quot;slick-btn-main slick-prev&quot;, &quot;iconClass&quot;: &quot;fa fa-angle-left&quot; },
                          &quot;nextArrow&quot;: {&quot;buttonClass&quot;: &quot;slick-btn-main slick-next&quot;, &quot;iconClass&quot;: &quot;fa fa-angle-right&quot; }
                          }" data-slick-responsive="[
                          {&quot;breakpoint&quot;:1199, &quot;settings&quot;: {
                          &quot;slidesToShow&quot;: 4
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
                          &quot;slidesToShow&quot;: 2,
                          &quot;arrows&quot;: false,
                          &quot;autoplay&quot;: true
                          }}
                          ]">
<div className="col-12 px-3">
      {/* Single Product Start */}
      
      {/* thẻ này giúp tạo slider để tạo thanh di chuyển */}
      <Slider {...settings}> 
      {books.map((book) => (
      <div className="single-product mb-30 mt-30">
         <figure className="card-banner img-holder" style={{ width: 300, height: 260 }}>
                  <img
                    src={book.image}
                    width={300}
                    height={260}
                    loading="lazy"
                    alt={book.title || 'Book image'}
                    className="img-cover"
                  />
                </figure>
        <div className="product-img">
        <Link to={`/sach/${book._id}`} className="card-badge skewBg">
                    {book.publisher && book.publisher.name ? book.publisher.name : 'Unknown Publisher'}
                  </Link>
          {/* Sticker for new product */}
          <Link to={`/sach/${book._id}`} className="card-title">
                      {book.title || 'Untitled Book'}
                    </Link>
        </div>
        <div className="product-content">
          <h3>
            <Link to="/single-product">Giày Bóng Đá Nike Mercurial</Link>
          </h3>
 
          <h4 className="price">
            <span className="new">400.00 đ</span>
            <span className="old">730.00 đ</span>
          </h4>
          <input type="submit" className="btn-main" name="hienthi" value="Add to Cart" />
        </div>
      </div>
      ))}
       </Slider>
      {/* Single Product End */}
    </div>           
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="guaranteed container">
    <div className="grid wide">
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <div className="guaranteed-item">
            <div className="guaranteed-icon">
              <i className="fa-solid fa-truck-fast" />
            </div>
            <h1>GIAO HÀNG TOÀN QUỐC</h1>
            <p>Gửi hàng đi trong ngày</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="guaranteed-item">
            <div className="guaranteed-icon">
              <i className="fa-solid fa-rotate-right" />
            </div>
            <h1>HOÀN TIỀN NHANH TRONG NGÀY</h1>
            <p>Không để khách hàng đợi lâu</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="guaranteed-item">
            <div className="guaranteed-icon">
              <i className="fa-solid fa-thumbs-up" />
            </div>
            <h1>SẢN PHẨM UY TÍN, AN TOÀN</h1>
            <p>Đảm bảo nhu cầu dịch vụ của khách hàng</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid product-h1">
    <div className="container product-h1_sm">
      <div className="product-representative">
        <div className="row product-representative_item">
          <div className="col-6 d-flex justify-content-end align-items-center product-representative_imgAll">
            <img src="assets/images/sp1.jpg" alt className="product-representative_img" />
          </div>
          <div className="col-6 d-flex align-items-center">
            <div className="product-representative_items">
              <h1 className="product-representative_tittle">
                Sách nổi bật
              </h1>
              <p className="product-representative_name">
                By Timur Hood
              </p>
              <p className="product-representative_author">
                By Timur Hood
              </p>
              <p className="product-representative_subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vel dicta
                praesentium
                perferendis obcaecati
              </p>
              <p className="product-representative_price">
                450000 <sup>đ</sup>
              </p>
              <div className="product-representative_btn-main">
                <button className="btn-main">
                  <p>
                    Xem ngay
                  </p>
                  <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className=" banner2">
      <div className="container h-100">
        <div className="banner2-content">
          <p>THE BOOK OF <br /> MY LIFE</p>
          <div className>
            <button className="btn-main" href>TÌM HIỂU THÊM</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container brand">
    <div className="container">
      <div className="row">
        <div className="col">
          <img src="assets/images/brand1.png" alt className="brand-img" />
        </div>
        <div className="col">
          <img src="assets/images/brand2.png" alt className="brand-img" />
        </div>
        <div className="col">
          <img src="assets/images/brand3.png" alt className="brand-img" />
        </div>
        <div className="col">
          <img src="assets/images/brand4.png" alt className="brand-img" />
        </div>
        <div className="col">
          <img src="assets/images/brand5.png" alt className="brand-img" />
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
              <a href="/"><img src="./assets/images/logo.png" width="50" height="50" /></a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    {/*Footer bottom end*/}
  </footer>
</div>


  );
}


export default Home;

