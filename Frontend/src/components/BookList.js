import React, { useEffect, useState } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [products, setProducts] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get('http://localhost:5000/api/sach');
        setProducts(res.data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    const fetchGenres = async () => {
      try {
        const res = await API.get('http://localhost:5000/api/theloai'); // Giả sử đây là endpoint để lấy thể loại
        setGenres(res.data);
      } catch (error) {
        console.error('Failed to fetch genres', error);
      }
    };

    fetchProducts();
    fetchGenres();
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
                  <img src="../assets/images/user.png" alt="Tài khoản" style={{ width: 20, height: 'auto' }} />
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
                </div>
              </Link>
              <div className="header-language dropdown">
                <button className="btn btn-outline-light dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="../assets/images/iconvn.webp" alt="VN" style={{ width: 20, height: 'auto' }} />
                  Tiếng Việt
                </button>
                <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      <img src="../assets/images/iconanh.png" alt="EN" style={{ width: 20, height: 'auto' }} /> Tiếng Anh
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
        <div className="shop-section sectionx1 pb-70 pb-lg-50 pb-md-40 pb-sm-60 pb-xs-50">
          <div className="container bg-white p-5 bdr-10">
            <div className="row">
              <div className="col-lg-3">
                <div className="common-sidebar-widget">
                  <h3 className="sidebar-title">Thể loại</h3>
                  <ul className="sidebar-list">
                    {genres.map((genre, index) => (
                      <li key={index}><a href="#">{genre.name}</a></li>
                    ))}
                  </ul>
                </div>
                <div className="common-sidebar-widget">
                  <div className="single-banner">
                    <a href="#">
                      <img src="assets/images/sp-banner.png" height="500px" alt />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="row">
                  <div className="col-12">
                    <div className="shop-product">
                      <div id="myTabContent-2" className="tab-content">
                        <div id="grid" className="tab-pane fade active show">
                          <div className="product-grid-view">
                            <div className="row">
                              {products.map((book, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-6" key={index}>
                                  <div className="single-product mb-30 mt-30">
                                    <figure className="card-banner img-holder" style={{ width: 280, height: 300 }}>
                                      <img
                                        src={book.image}
                                        width={280}
                                        height={300}
                                        loading="lazy"
                                        alt={book.title || 'Book image'}
                                        className="img-cover"
                                      />
                                    </figure>
                                    <div className="product-img">
                                      <Link to={`/sach/${book._id}`} className="card-badge skewBg">
                                        {book.publisher && book.publisher.name ? book.publisher.name : 'Unknown Publisher'}
                                      </Link>
                                      <Link to={`/sach/${book._id}`} className="card-title">
                                        {book.title || 'Untitled Book'}
                                      </Link>
                                    </div>
                                    <div className="product-content">
                                      <h4 className="price">
                                        <span className="new">{book.price ? `${book.price} đ` : 'Giá chưa có'}</span>
                                      </h4>
                                      <input type="button" className="btn-main" value="Add to Cart" />
                                    </div>
                                  </div>
                                </div>
                              ))}
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
                <a href="#" className="me-3"><img src="assets/images/appstore.jpg" style={{ height: '50px', width: '150px' }} alt="App Store" /></a>
                <a href="#"><img src="assets/images/ggplay.png" style={{ height: '50px', width: '150px' }} alt="Google Play" /></a>
              </div>
            </div>
          </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4544374621546!2d106.62420897412295!3d10.852999257778526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1728542762299!5m2!1svi!2s" width={1296} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />


          <div className="row mt-4">
            <div className="col-md-12 text-center">
              <p className="mb-0" style={{ color: '#aaa' }}>Giấy chứng nhận Đăng ký Kinh doanh số 03041332047 do Sở Kế hoạch và Đầu tư thành phố Hồ Chí Minh cấp ngày 20/12/2005, đăng ký thay đổi lần thứ 10, ngày 20/05/2022.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
</div>
  );
}

export default BookList;