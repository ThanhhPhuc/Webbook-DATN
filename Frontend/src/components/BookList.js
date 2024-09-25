import React, { useEffect, useState } from 'react';
import API from '../api';

const BookList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await API.get('/api/sach');
                setProducts(res.data);
            } catch (error) {
                console.error('Failed to fetch products', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
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
  {/* <div class="container btn-cata_show py-2">
    <button data-bs-toggle="collapse" data-bs-target="#cata-se" class="btn-main">Thể loại</button>

<div id="cata-se" class="collapse">
    <ul class="sidebar-list">
  <li><a href="#"><i class="fa fa-angle-right"></i>Red <span class="count">(5)</span></a>
  </li>
  <li><a href="#"><i class="fa fa-angle-right"></i>Orange <span
              class="count">(4)</span></a></li>
  <li><a href="#"><i class="fa fa-angle-right"></i>Blue <span class="count">(4)</span></a>
  </li>
  <li><a href="#"><i class="fa fa-angle-right"></i>Black <span
              class="count">(4)</span></a></li>
  <li><a href="#"><i class="fa fa-angle-right"></i>Green <span
              class="count">(4)</span></a></li>
    </ul>
</div>
</div> */}
  <div className="shop-section sectionx1 pb-70 pb-lg-50 pb-md-40 pb-sm-60 pb-xs-50">
    <div className="container bg-white p-5 bdr-10">
      <div className="row">
        <div className="col-lg-3">
          {/* Single Sidebar Start  */}
          <div className="common-sidebar-widget">
            <h3 className="sidebar-title">Thể loại</h3>
            <ul className="sidebar-list">
              <li><a href="#"><i className="fa fa-angle-right" />Red <span className="count">(5)</span></a>
              </li>
              <li><a href="#"><i className="fa fa-angle-right" />Orange <span className="count">(4)</span></a></li>
              <li><a href="#"><i className="fa fa-angle-right" />Blue <span className="count">(4)</span></a>
              </li>
              <li><a href="#"><i className="fa fa-angle-right" />Black <span className="count">(4)</span></a></li>
              <li><a href="#"><i className="fa fa-angle-right" />Green <span className="count">(4)</span></a></li>
            </ul>
          </div>
          <div className="common-sidebar-widget">
            <div className="single-banner">
              <a href="#">
                <img src="assets/images/sp-banner.png" height="500px" alt />
              </a>
            </div>
          </div>
          {/* Single Sidebar End  */}
        </div>
        <div className="col-lg-9 order-lg-2 order-1">
          {/* <div class="row">
                      <div class="col-12">
                          <div class="shop-banner mb-35 mb-xs-20">
                              <img src="./assets/images/banner/category-image.jpg" alt="">
                          </div>
                          <div class="shop-banner-title">
                              <h2>Shop</h2>
                          </div>
                      </div>
                  </div> */}
          <div className="row">
            <div className="col-12">
              <div className="shop-product">
                <div id="myTabContent-2" className="tab-content">
                  <div id="grid" className="tab-pane fade active show">
                    <div className="product-grid-view">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                          {/* Single Product Start */}
                          <div className="single-product mb-30">
                            <div className="product-img">
                              <a href="single-product.html">
                                <img src="assets/images/sp1.jpg" alt />
                              </a>
                              <span className="descount-sticker">-10%</span>
                              <span className="sticker">
                                <img src="assets/images/new.png" alt />
                              </span>
                              <div className="product-action d-flex justify-content-between">
                                <a className="product-btn" href="#">thêm vào giỏ</a>
                                <ul className="d-flex align-items-center">
                                  <li><a href="#quick-view-modal-container" data-toggle="modal" title="Quick View"><i className="fa fa-eye" /></a></li>
                                  {/* <li><a href="#"><i
                                                                              class="fa fa-heart-o"></i></a></li>
                                                                  <li><a href="#"><i
                                                                              class="fa fa-exchange"></i></a></li> */}
                                </ul>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="ProductDetail">Giày Bóng Đá Nike
                                  Mercurial</a>
                              </h3>
                              {/* <div class="ratting">
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                          </div> */}
                              <h4 className="price"><span className="new">510.000<sup>đ</sup></span><span className="old">630.000<sup>đ</sup></span></h4>
                            </div>
                          </div>
                          {/* Single Product End */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                          {/* Single Product Start */}
                          <div className="single-product mb-30">
                            <div className="product-img">
                              <a href="single-product.html">
                                <img src="assets/images/product/ngoinhakyquai.jpg" alt />
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
                              <h3><a href="single-product.html">Giày Bóng Đá Wika NEO
                                  Plus</a></h3>
                              {/* <div class="ratting">
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                          </div> */}
                              <h4 className="price"><span className="new">400.00 đ</span><span className="old">730.00 đ</span></h4>
                            </div>
                          </div>
                          {/* Single Product End */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
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
                              <h3><a href="single-product.html">Giày Bóng Đá TQ Nike
                                </a></h3>
                              {/* <div class="ratting">
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                          </div> */}
                              <h4 className="price"><span className="new">310.00 đ</span><span className="old">430.00 đ</span></h4>
                            </div>
                          </div>
                          {/* Single Product End */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                          {/* Single Product Start */}
                          <div className="single-product mb-30">
                            <div className="product-img">
                              <a href="single-product.html">
                                <img src="assets/images/sp1.jpg" alt />
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
                              <h3><a href="single-product.html">Giày Bóng Đá Nike
                                  Lunar </a></h3>
                              {/* <div class="ratting">
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                          </div> */}
                              <h4 className="price"><span className="new">900.00 đ</span><span className="old">1.130.000 đ</span></h4>
                            </div>
                          </div>
                          {/* Single Product End */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                          {/* Single Product Start */}
                          <div className="single-product mb-30">
                            <div className="product-img">
                              <a href="single-product.html">
                                <img src="assets/images/sp1.jpg" alt />
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
                              <h3><a href="single-product.html">Giày Bóng Đá Nike
                                  Tiempo</a></h3>
                              {/* <div class="ratting">
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                          </div> */}
                              <h4 className="price"><span className="new">710.00 đ</span><span className="old">930.00 đ</span></h4>
                            </div>
                          </div>
                          {/* Single Product End */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                          {/* Single Product Start */}
                          <div className="single-product mb-30">
                            <div className="product-img">
                              <a href="single-product.html">
                                <img src="assets/images/sp1.jpg" alt />
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
                              <h3><a href="single-product.html">Giày Bóng Đá TQ Nike
                                  II</a></h3>
                              {/* <div class="ratting">
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                          </div> */}
                              <h4 className="price"><span className="new">610.00 đ</span><span className="old">1.200.000 đ</span></h4>
                            </div>
                          </div>
                          {/* Single Product End */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                          {/* Single Product Start */}
                          <div className="single-product mb-30">
                            <div className="product-img">
                              <a href="single-product.html">
                                <img src=".assets/images/sp1.jpg" alt />
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
                              <h3><a href="single-product.html">Giày Bóng Đá TQ Nike
                                  React</a></h3>
                              {/* <div class="ratting">
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                          </div> */}
                              <h4 className="price"><span className="new">710.00 đ</span><span className="old">930.00 đ</span></h4>
                            </div>
                          </div>
                          {/* Single Product End */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                          {/* Single Product Start */}
                          <div className="single-product mb-30">
                            <div className="product-img">
                              <a href="single-product.html">
                                <img src="assets/images/sp1.jpg" alt />
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
                              <h3><a href="single-product.html">Giày Bóng Đá Wika
                                  NEO</a></h3>
                              {/* <div class="ratting">
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                          </div> */}
                              <h4 className="price"><span className="new">810.00 đ</span><span className="old">1.130.000 đ</span></h4>
                            </div>
                          </div>
                          {/* Single Product End */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                          {/* Single Product Start */}
                          <div className="single-product mb-30">
                            <div className="product-img">
                              <a href="single-product.html">
                                <img src=".assets/images/sp1.jpg" alt />
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
                              <h3><a href="single-product.html">Giày Bóng Đá Wika NEO
                                  I</a></h3>
                              {/* <div class="ratting">
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                              <i class="fa fa-star"></i>
                                                          </div> */}
                              <h4 className="price"><span className="new">810.00 đ</span><span className="old">1.130.000 đ</span></h4>
                            </div>
                          </div>
                          {/* Single Product End */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div id="list" class="tab-pane fade">
                                      <div class="product-list-view">
                                          
                                          <div class="product-list-item mb-40">
                                              <div class="row align-items-center">
                                                  <div class="col-md-4 col-sm-6">
                                                      <div class="single-product">
                                                          <div class="product-img mb-0 mb-xs-25">
                                                              <a href="single-product.html">
                                                                  <img src="./assets/images/product/product-18.jpg"
                                                                      alt="">
                                                              </a>
                                                              <span class="descount-sticker">-10%</span>
                                                              <span class="sticker">New</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-md-8 col-sm-6">
                                                      <div class="product-content-shop-list">
                                                          <div class="product-content">
                                                              <h3><a href="single-product.html">White Shave
                                                                      Brux</a></h3>
                                                              <h4 class="price"><span class="new">€90.00</span>
                                                              </h4>
                                                              <div class="ratting">
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                              </div>
                                                              <p>Pellentesque habitant morbi tristique senectus et
                                                                  netus et malesuada fames ac turpis egestas.
                                                                  Vestibulum tortor quam, feugiat vitae, ultricies
                                                                  eget, tempor sit amet, ante. Donec eu libero sit
                                                                  amet quam egestas semper. Aenean ultricies mi
                                                                  vitae est. Mauris placerat eleifend leo.</p>
                                                              <div
                                                                  class="product-action d-flex justify-content-between">
                                                                  <a class="product-btn" href="#">Add to Cart</a>
                                                                  <ul class="d-flex">
                                                                      <li><a href="#quick-view-modal-container"
                                                                              data-toggle="modal"
                                                                              title="Quick View"><i
                                                                                  class="fa fa-eye"></i></a></li>
                                                                      <li><a href="#"><i
                                                                                  class="fa fa-heart-o"></i></a>
                                                                      </li>
                                                                      <li><a href="#"><i
                                                                                  class="fa fa-exchange"></i></a>
                                                                      </li>
                                                                  </ul>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      
                                          <div class="product-list-item mb-40">
                                              <div class="row align-items-center">
                                                  <div class="col-md-4 col-sm-6">
                                                      <div class="single-product">
                                                          <div class="product-img mb-0 mb-xs-25">
                                                              <a href="single-product.html">
                                                                  <img src="./assets/images/product/product-17.jpg"
                                                                      alt="">
                                                              </a>
                                                              <span class="descount-sticker">-10%</span>
                                                              <span class="sticker">New</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-md-8 col-sm-6">
                                                      <div class="product-content-shop-list">
                                                          <div class="product-content">
                                                              <h3><a href="single-product.html">Aftershave
                                                                      Lotion</a></h3>
                                                              <h4 class="price"><span
                                                                      class="new">€90.00</span><span
                                                                      class="old">€150.00</span></h4>
                                                              <div class="ratting">
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                              </div>
                                                              <p>Pellentesque habitant morbi tristique senectus et
                                                                  netus et malesuada fames ac turpis egestas.
                                                                  Vestibulum tortor quam, feugiat vitae, ultricies
                                                                  eget, tempor sit amet, ante. Donec eu libero sit
                                                                  amet quam egestas semper. Aenean ultricies mi
                                                                  vitae est. Mauris placerat eleifend leo.</p>
                                                              <div
                                                                  class="product-action d-flex justify-content-between">
                                                                  <a class="product-btn" href="#">Add to Cart</a>
                                                                  <ul class="d-flex">
                                                                      <li><a href="#quick-view-modal-container"
                                                                              data-toggle="modal"
                                                                              title="Quick View"><i
                                                                                  class="fa fa-eye"></i></a></li>
                                                                      <li><a href="#"><i
                                                                                  class="fa fa-heart-o"></i></a>
                                                                      </li>
                                                                      <li><a href="#"><i
                                                                                  class="fa fa-exchange"></i></a>
                                                                      </li>
                                                                  </ul>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      
                                          <div class="product-list-item mb-40">
                                              <div class="row align-items-center">
                                                  <div class="col-md-4 col-sm-6">
                                                      <div class="single-product">
                                                          <div class="product-img mb-0 mb-xs-25">
                                                              <a href="single-product.html">
                                                                  <img src="./assets/images/product/product-15.jpg"
                                                                      alt="">
                                                              </a>
                                                              <span class="descount-sticker">-10%</span>
                                                              <span class="sticker">New</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-md-8 col-sm-6">
                                                      <div class="product-content-shop-list">
                                                          <div class="product-content">
                                                              <h3><a href="single-product.html">White Shave
                                                                      Brush</a></h3>
                                                              <h4 class="price"><span
                                                                      class="new">€110.00</span><span
                                                                      class="old">€130.00</span></h4>
                                                              <div class="ratting">
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                              </div>
                                                              <p>Pellentesque habitant morbi tristique senectus et
                                                                  netus et malesuada fames ac turpis egestas.
                                                                  Vestibulum tortor quam, feugiat vitae, ultricies
                                                                  eget, tempor sit amet, ante. Donec eu libero sit
                                                                  amet quam egestas semper. Aenean ultricies mi
                                                                  vitae est. Mauris placerat eleifend leo.</p>
                                                              <div
                                                                  class="product-action d-flex justify-content-between">
                                                                  <a class="product-btn" href="#">Add to Cart</a>
                                                                  <ul class="d-flex">
                                                                      <li><a href="#quick-view-modal-container"
                                                                              data-toggle="modal"
                                                                              title="Quick View"><i
                                                                                  class="fa fa-eye"></i></a></li>
                                                                      <li><a href="#"><i
                                                                                  class="fa fa-heart-o"></i></a>
                                                                      </li>
                                                                      <li><a href="#"><i
                                                                                  class="fa fa-exchange"></i></a>
                                                                      </li>
                                                                  </ul>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      
                                          <div class="product-list-item mb-40">
                                              <div class="row align-items-center">
                                                  <div class="col-md-4 col-sm-6">
                                                      <div class="single-product">
                                                          <div class="product-img mb-0 mb-xs-25">
                                                              <a href="single-product.html">
                                                                  <img src="./assets/images/product/product-12.jpg"
                                                                      alt="">
                                                              </a>
                                                              <span class="descount-sticker">-10%</span>
                                                              <span class="sticker">New</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-md-8 col-sm-6">
                                                      <div class="product-content-shop-list">
                                                          <div class="product-content">
                                                              <h3><a href="single-product.html">White Shave
                                                                      Bruj</a></h3>
                                                              <h4 class="price"><span class="new">€80.00</span>
                                                              </h4>
                                                              <div class="ratting">
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                              </div>
                                                              <p>Pellentesque habitant morbi tristique senectus et
                                                                  netus et malesuada fames ac turpis egestas.
                                                                  Vestibulum tortor quam, feugiat vitae, ultricies
                                                                  eget, tempor sit amet, ante. Donec eu libero sit
                                                                  amet quam egestas semper. Aenean ultricies mi
                                                                  vitae est. Mauris placerat eleifend leo.</p>
                                                              <div
                                                                  class="product-action d-flex justify-content-between">
                                                                  <a class="product-btn" href="#">Add to Cart</a>
                                                                  <ul class="d-flex">
                                                                      <li><a href="#quick-view-modal-container"
                                                                              data-toggle="modal"
                                                                              title="Quick View"><i
                                                                                  class="fa fa-eye"></i></a></li>
                                                                      <li><a href="#"><i
                                                                                  class="fa fa-heart-o"></i></a>
                                                                      </li>
                                                                      <li><a href="#"><i
                                                                                  class="fa fa-exchange"></i></a>
                                                                      </li>
                                                                  </ul>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      
                                          <div class="product-list-item mb-40">
                                              <div class="row align-items-center">
                                                  <div class="col-md-4 col-sm-6">
                                                      <div class="single-product">
                                                          <div class="product-img mb-0 mb-xs-25">
                                                              <a href="single-product.html">
                                                                  <img src="./assets/images/product/product-13.jpg"
                                                                      alt="">
                                                              </a>
                                                              <span class="descount-sticker">-10%</span>
                                                              <span class="sticker">New</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-md-8 col-sm-6">
                                                      <div class="product-content-shop-list">
                                                          <div class="product-content">
                                                              <h3><a href="single-product.html">White Shave
                                                                      Bruk</a></h3>
                                                              <h4 class="price"><span class="new">€60.00</span>
                                                              </h4>
                                                              <div class="ratting">
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                                  <i class="fa fa-star"></i>
                                                              </div>
                                                              <p>Pellentesque habitant morbi tristique senectus et
                                                                  netus et malesuada fames ac turpis egestas.
                                                                  Vestibulum tortor quam, feugiat vitae, ultricies
                                                                  eget, tempor sit amet, ante. Donec eu libero sit
                                                                  amet quam egestas semper. Aenean ultricies mi
                                                                  vitae est. Mauris placerat eleifend leo.</p>
                                                              <div
                                                                  class="product-action d-flex justify-content-between">
                                                                  <a class="product-btn" href="#">Add to Cart</a>
                                                                  <ul class="d-flex">
                                                                      <li><a href="#quick-view-modal-container"
                                                                              data-toggle="modal"
                                                                              title="Quick View"><i
                                                                                  class="fa fa-eye"></i></a></li>
                                                                      <li><a href="#"><i
                                                                                  class="fa fa-heart-o"></i></a>
                                                                      </li>
                                                                      <li><a href="#"><i
                                                                                  class="fa fa-exchange"></i></a>
                                                                      </li>
                                                                  </ul>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                      </div>
                                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-30 mb-sm-40 mb-xs-30">
            <div className="col">
              <ul className="page-pagination">
                <li><a href="#"><i className="fa fa-angle-left" /></a></li>
                <li className="active"><a href="#">01</a></li>
                <li><a href="#">02</a></li>
                <li><a href="#">03</a></li>
                <li><a href="#"><i className="fa fa-angle-right" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="brand">
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
              <a href="index.html"><img src="./assets/images/logo scb.jpg" alt /></a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    {/*Footer bottom end*/}
  </footer>
</div>

            <ul>
                {products.map(product => (
                    <li key={product._id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
