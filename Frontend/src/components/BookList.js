import React, { useEffect, useState, useContext } from 'react';
import API from '../api';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Header from './Header';

const BookList = () => {
  const [products, setProducts] = useState([]); // Danh sách sách
  const [genres, setGenres] = useState([]); // Danh sách thể loại
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Fetching products and genres
  useEffect(() => {
    const fetchProductsAndGenres = async () => {
      setLoading(true);
      try {
        // Fetch products
        const productRes = await API.get('http://localhost:5000/api/sach');
        if (Array.isArray(productRes.data)) {
          setProducts(productRes.data);
        } else {
          throw new Error('Dữ liệu sản phẩm không hợp lệ.');
        }

        // Fetch genres
        const genreRes = await API.get('http://localhost:5000/api/theloai');
        if (Array.isArray(genreRes.data)) {
          setGenres(genreRes.data);
        } else {
          throw new Error('Dữ liệu thể loại không hợp lệ.');
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsAndGenres();
  }, []);

  // Fetch products by genre when selected
  const handleGenreClick = async (genreId) => {
    setLoading(true);
    try {
        const productRes = await API.get(`http://localhost:5000/api/sach/theloai/${genreId}`);
        // Kiểm tra xem dữ liệu có thuộc tính books không
        if (Array.isArray(productRes.data.books)) {
            setProducts(productRes.data.books);
        } else {
            throw new Error('Dữ liệu sản phẩm theo thể loại không hợp lệ.');
        }
    } catch (error) {
        console.error('Error fetching books by genre:', error);
        setError(error.message);
    } finally {
        setLoading(false);
    }
};

  // Handle add to cart action
  const handleAddToCart = async (book) => {
    if (book && book.inventory > 0) {
      try {
        await addToCart("670d2d7f4f9223989b3f51ed", book._id, 1); // Example userId and quantity
        alert('Sản phẩm đã được thêm vào giỏ hàng!');
        navigate('/cart');
      } catch (error) {
        console.error('Error adding product to cart:', error);
        alert('Có lỗi xảy ra khi thêm vào giỏ hàng!');
      }
    } else {
      alert('Sản phẩm này đã hết hàng!');
    }
  };

  // Loading state and error handling
  if (loading) {
    return <div>Đang tải sản phẩm...</div>;
  }

  if (error) {
    return <div>{`Có lỗi xảy ra: ${error}`}</div>;
  }

  return (
    <div>
      <div id="main-wrapper">
        <Header />
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
                  {genres.length > 0 ? genres.map((genre) => (
                          <li key={genre._id} onClick={() => handleGenreClick(genre._id)}>
                            <a href="#">{genre.name}</a>
                          </li>
                        ))
                      : <li>Không có thể loại</li>}
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
                              {products.length > 0 ? products.map((book, index) => (
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
                                      <Link to={`/sach/${book._id}`} className="card-badge skewBg"></Link>
                                      <Link to={`/sach/${book._id}`} className="card-title">
                                        {book.title || 'Untitled Book'}
                                      </Link>
                                      
                                    </div>
                                    <div className="product-content">
                                      <h4 className="price">
                                        <span className="new">{book.price ? `${book.price} đ` : 'Giá chưa có'}</span>
                                      </h4>
                                      <button
                                        className="btn btn-primary"
                                        onClick={() => handleAddToCart(book)}
                                        disabled={book.inventory === 0}
                                      >
                                        {book.inventory === 0 ? 'Hết hàng' : 'Thêm vào giỏ hàng'}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )) : <div className="col-12">Không có sản phẩm nào</div>}
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
        <div className="col-lg-5 col-md-7 mb-4">
    <div className="footer-logo color-black text-dark">
        <h1><a href="/" className="text-dark">Libworld.io.vn</a></h1>
        <p>Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM</p>
        <p>Công Ty Cổ Phần Phát Hành Sách TP HCM - LIBWORLD</p>
        <p>60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam</p>
        <p>Libworld.io.vn nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả hệ thống Libworld trên toàn quốc.</p>
        <div className="footer-social d-flex">
    <a href="#" className="me-3">
        <i className="bi bi-facebook"></i>
    </a>
    <a href="#" className="me-3">
        <i className="bi bi-twitter"></i>
    </a>
    <a href="#" className="me-3">
        <i className="bi bi-instagram"></i>
    </a>
    <a href="#">
        <i className="bi bi-youtube"></i>
    </a>
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
            <div className="col-lg-3 col-md-9 mb-4 text-dark">
                <h4 className="title">Liên Hệ</h4>
                <p>Địa chỉ: 60-62 Lê Lợi, Q.1, TP. HCM</p>
                <p>Email: cs@libworld.io.vn</p>
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



<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4544374621546!2d106.62420897412295!3d10.852999257778526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1728542762299!5m2!1svi!2s" width={'100%'} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        
        <div className="row mt-4" style={{ display: 'flex', alignItems: 'center' }}>
    <div className="col-md-12 text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <hr style={{ flex: 1, borderTop: '1px solid #aaa', margin: '0 10px' }} />
        <p className="mb-0" style={{ color: '#aaa', whiteSpace: 'nowrap' }}>
            Copyright © 2024 Nhà sách Libworld All rights reserved
        </p>
        <hr style={{ flex: 1, borderTop: '1px solid #aaa', margin: '0 10px' }} />
    </div>
</div>
    </div>
</footer>
      </div>
  </div>
    );
  }

export default BookList;