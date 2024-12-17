import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Header from './Header';
const SearchResult = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Khai báo biến searchQuery
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const query = new URLSearchParams(useLocation().search).get('query');
  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sach');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  useEffect(() => {
  fetchBooks();
}, []);

const handleSearchChange = (event) => {
  setSearchQuery(event.target.value);
};

const handleSearchSubmit = (event) => {
  event.preventDefault();
  if (searchQuery) {
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
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
    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        // Gọi API để lấy tất cả sản phẩm
        const res = await axios.get(`http://localhost:5000/api/sach`);
        
        // Lọc sản phẩm dựa trên truy vấn tìm kiếm
        const filteredResults = res.data.filter(product => 
          product.title.toLowerCase().includes(query.toLowerCase())
        );

        setResults(filteredResults);
      } catch (error) {
        console.error('Failed to fetch search results', error);
        setError('Không thể lấy kết quả tìm kiếm.');
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    } else {
      setLoading(false); // Không có query, không cần gọi API
    }
  }, [query]);

  if (loading) {
    return <div className="text-center text-white">Đang tải kết quả...</div>;
  }

  return (
<div id="main-wrapper">
<Header/>
<br/>
    <div className="container">
      <h2>Sách mà bạn muốn kiếm: "{query}"</h2>
      <div className="row">
        {results.length === 0 ? (
          <p>Không tìm thấy sản phẩm nào.</p>
        ) : (
          results.map((product) => (
            <div key={product._id} className="col-lg-3 px-3">
              <div className="single-product mb-30">
                <div className="product-img">
                  <Link to={`/sach/${product._id}`}>
                    <img src={product.image} alt={product.title} />
                  </Link>
                </div>
                <br/>
                <div className="product-content">
                  <h3><Link to={`/sach/${product._id}`}>{product.title}</Link></h3>
                  <h4 className="price"><span className="new">{product.price}<sup>đ</sup></span></h4>
                </div>
              </div>
            </div>
          ))
        )}
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
            Copyright © 2024 Nhà sách Libworld.io.vn All rights reserved
        </p>
        <hr style={{ flex: 1, borderTop: '1px solid #aaa', margin: '0 10px' }} />
    </div>
</div>
    </div>
</footer>
  </div>
  );
};

export default SearchResult;