import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sach');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/theloai');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
    fetchCategories();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
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


  return (
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
              </div></Link>
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

      {/* Banner/Carousel Section */}
      <section id="banner">
        <div className="container mt-3">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="../assets/images/banner1.webp" className="d-block w-100" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img src="../assets/images/banner2.webp" className="d-block w-100" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img src="../assets/images/banner3.webp" className="d-block w-100" alt="Third slide" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      {/* Promotional Section */}
      <div className="fhs-banner-image-block">
        <div className="col-sm-3 col-md-3 col-xs-6 block-item no-padding hidden-xs">
          <div className="banner-home-inner">
            <a href="https://www.fahasa.com/sale">
              <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-10-2024/TrangCTthang10_Mainbanner_Resize_Smallbanner_310x210.png" alt />
            </a>
          </div>
        </div>
        <div className="col-sm-3 col-md-3 col-xs-6 block-item no-padding">
          <div className="banner-home-inner">
            <a className="cursor-pointer" href="#">
              <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-10-2024/Trang20.10_SmallBanner_310x210.jpg" alt="Banner 2" />
            </a>
          </div>
        </div>
        <div className="col-sm-3 col-md-3 col-xs-6 block-item no-padding">
          <div className="banner-home-inner">
            <a className="cursor-pointer" href="#">
              <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-10-2024/Kinhte_LDP_Smallbanner_310x210.jpg" alt="Banner 3" />
            </a>
          </div>
        </div>
        <div className="col-sm-3 col-md-3 col-xs-6 block-item no-padding">
          <div className="banner-home-inner">
            <a className="cursor-pointer" href="#">
              <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-10-2024/TanViet_Smallbanner_T10_310x210_Silver.jpg" alt="Banner 4" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-30 mb-50">
      <div className="catalog-item bg-white bdr-10">
        <p className="title-cata_sm">Thể loại</p>
        <h1 className="title-cata">Các thể loại của chúng tôi</h1>
        <div className="product-section section">
          <div className="row">
            {categories.map((category) => (
              <div key={category._id} className="col-3">
                <div className="category-card">
                  <h3 className="h3">{category.name}</h3>
                  <img src={category.hinh} alt={category.name} style={{ width: '250px', height: '300px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      <div className="container  ">
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
                    <div className="row tf-element-carousel" >
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
                                  height={280}
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
                              <h4 className="price">
                                        <span className="new">{book.price ? `${book.price} đ` : 'Giá chưa có'}</span>
                                      </h4>
                                <input type="submit" className="btn-main" name="hienthi" value="Add to Cart" />
                              </div>
                            </div>
                          ))}
                        </Slider>
                        {/* Single Product End */}

                        {/* xem thêm */}
                        <div className='text-center mt-5'>

                          <a href='/shop' className='btn btn-danger'> <i className="fa fa-spinner" /> Xem thêm</a>
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
                <img src="{{production.image}}" />
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
                    <button className="btn-main" >
                      <p>
                      <a href='/shop'> Xem ngay</a>
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
        <div className="banner2">
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

  );
}


export default Home;

