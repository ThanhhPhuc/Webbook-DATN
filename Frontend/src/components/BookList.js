import React, { useEffect, useState } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';
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
 <header className="bg-danger py-3">
  <div className="container d-flex justify-content-between align-items-center">
    <a href="/" className="navbar-brand text-white fw-bold fs-3">Libworld</a>
    <form className="d-flex flex-grow-1 mx-3">
      <input className="form-control me-2" type="search" placeholder="Tìm kiếm sách" aria-label="Search" />
      <button className="btn btn-warning" type="submit">Tìm kiếm</button>
    </form>
    <div className="d-flex align-items-center">
      <div className="header-user dropdown me-3">
        <button className="btn btn-outline-light dropdown-toggle" type="button" id="accountDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="../assets/images/user.png" alt="Tài khoản" style={{width: 20, height: 'auto'}} />
        </button>
        <ul className="dropdown-menu" aria-labelledby="accountDropdown">
          <li><a className="dropdown-item" href="/login">Đăng nhập</a></li>
          <li><a className="dropdown-item" href="/register">Đăng ký</a></li>
        </ul>
      </div>
  <Link to="/cart">
      <div className="header-cart dropdown me-4">
    <button className="btn btn-outline-light" type="button">
      <img src="../assets/images/cart.png" alt="Giỏ hàng" style={{ width: 20, height: 'auto' }} />
    </button>
</div></Link>
      <div className="header-language dropdown">
        <button className="btn btn-outline-light dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="../assets/images/iconvn.webp" alt="VN" style={{width: 20, height: 'auto'}} /> 
          Tiếng Việt
        </button>
        <ul className="dropdown-menu" aria-labelledby="languageDropdown">
          <li>
            <a className="dropdown-item" href="#">
              <img src="../assets/images/iconanh.png" alt="EN" style={{width: 20, height: 'auto'}} /> Tiếng Anh
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>
<div className="container-fluid">
  <div className="container">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a style={{ color: 'black' }} href="/">Trang chủ</a>
        </li>
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

            <ul>
                {products.map(product => (
                    <li key={product._id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
