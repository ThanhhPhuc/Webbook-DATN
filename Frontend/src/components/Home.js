import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DOMPurify from 'dompurify';
import Header from './Header';
function Home() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [cart, setCart]   = useState();
  const [posts, setPosts] = useState([]);
  // const userId  = localStorage.getItem('userId'); cần sửa lại jwt để lấy token=>role
    const userId =  "670d2d7f4f9223989b3f51ed";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
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
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/baiviet'); 
        setPosts(response.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
    fetchBooks();
    fetchCategories();
  }, []); // Chỉ chạy một lần sau khi component mount

  useEffect(() => {
    const adjustDots = (slickDotsContainer) => {
      const dots = slickDotsContainer.querySelectorAll("li");
      if (dots.length > 5) {
        dots.forEach((dot, index) => {
          dot.style.display = index < 5 ? "inline-block" : "none"; // Chỉ hiển thị 5 dots
        });
      }
    };
  
    const sliders = document.querySelectorAll('.slick-slider'); // Lấy tất cả các slider
  
    sliders.forEach(slider => {
      const slickDotsContainer = slider.querySelector(".slick-dots"); // Chỉ chọn dots của slider cụ thể
  
      if (slickDotsContainer) {
        adjustDots(slickDotsContainer); // Gọi hàm điều chỉnh ngay khi render
        const observer = new MutationObserver(() => adjustDots(slickDotsContainer));
        observer.observe(slickDotsContainer, { childList: true, subtree: true });
  
        // Cleanup observer khi component unmounts
        return () => observer.disconnect();
      }
    });
  }); 
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
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
          autoplay: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  };
  
  
  // Hàm sự kiện  click vào nút thêm sách
  const handleAddToCart = async (bookId, inventory) => {
    try {
      if (inventory > 0) {
        const cartItem = {
          productId: bookId,
          quantity: 1,
        };
        
        const response = await addToCart(userId, bookId, 1);
        
        // Thông báo thành công
        alert('Thêm vào giỏ hàng thành công!');
        
        // Có thể cập nhật state để hiển thị số lượng trong giỏ hàng
        // setCartCount(prevCount => prevCount + 1);
        
      } else {
        alert('Sản phẩm này đã hết hàng!');
      }
    } catch (error) {
      alert('Có lỗi xảy ra khi thêm vào giỏ hàng!');
      console.error(error);
    }
  };
  
  const addToCart = async (userId, productId, quantity) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/cart/${userId}`, { productId, quantity });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <div id="main-wrapper">

<Header/>
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
      <div className="container fhs-banner-image-block">
       
          <div className="banner-home-inner">
            <a href="https://www.fahasa.com/sale">
              <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-10-2024/TrangCTthang10_Mainbanner_Resize_Smallbanner_310x210.png" alt />
            </a>
          </div>
      
       
          <div className="banner-home-inner">
            <a className="cursor-pointer" href="#">
              <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-10-2024/Trang20.10_SmallBanner_310x210.jpg" alt="Banner 2" />
            </a>
          </div>
      
       
          <div className="banner-home-inner">
            <a className="cursor-pointer" href="#">
              <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-10-2024/Kinhte_LDP_Smallbanner_310x210.jpg" alt="Banner 3" />
            </a>
       
        </div>
      
          <div className="banner-home-inner">
            <a className="cursor-pointer" href="#">
              <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-10-2024/TanViet_Smallbanner_T10_310x210_Silver.jpg" alt="Banner 4" />
            </a>
          </div>
       
      </div>
      <div className="container mt-30 mb-50">
      <div className="catalog-item bg-white bdr-10">
        <p className="title-cata_sm">Thể loại</p>
        <h1 className="title-cata">Các thể loại của chúng tôi</h1>
        <div className="product-section section">
          <div className="row">
          <Slider {...settings}>
            
          {categories.map((category) => (
  <div key={category._id}>
    <Link to={`/theloai/${category._id}`} className="category-card">
      <img className="category-img" src={category.hinh} alt={category.name} />
      <h3 className="category-name">{category.name}</h3>
    </Link>
  </div>
))}          
                    </Slider>
          </div>
        </div>
      </div>  
    </div>

      <div className="container">
        
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
        <div className="row tf-element-carousel">
          <div className="col-12 px-3">
 <br/> 
              <Slider {...settings}>
               
            {books.map((book) => (
              <div key={book._id} className="px-3">
                <div className="shop-card">
                <figure className="card-banner img-holder" style={{ width: 300, height: 300 }}>
  <img
    src={book.image}
    width={250} // Cập nhật chiều rộng
    height={300} // Cập nhật chiều cao
    loading="lazy"
    alt={book.title || 'Book image'}
    className="img-cover"
    style={{ objectFit: 'cover' }} // Đảm bảo hình ảnh được cắt đúng tỉ lệ
  />
</figure>
                  <div className="card-content">
                    <h3 className="h3">
                      <Link to={`/sach/${book._id}`} >  <p className="box-name">{book.title || 'Untitled Book'}</p></Link>
                    </h3>
                    <p className="card-price">{book.price ? `${book.price} VND` : 'Price not available'}</p>
                    <p className="inventory-status">{`Còn lại: ${book.inventory || 0} sản phẩm`}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(book._id, book.inventory)}
                      disabled={book.inventory === 0}
                    >
                      {book.inventory === 0 ? 'Hết hàng' : 'Thêm vào giỏ hàng'}
                    </button>
                  </div>
                </div>
                <br/>
              </div>
              
            ))}
        
          </Slider>

        <div className='text-center mt-5'>
  <a href='/shop' className='btn' style={{ 
    color: '#2b648b', 
    padding: '8px 50px', 
    borderRadius: '7px', 
    fontSize: '18px', 
    textTransform: 'uppercase', 
    fontWeight: 'bold', 
    textDecoration: 'none', 
    border: '2px solid #2b648b', 
    transition: 'background-color 0.3s, color 0.3s' 
  }}>
    Xem thêm
  </a>
</div>
            <br/>
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
            <i className="bi bi-truck me-2"></i>
          </div>
          <h1>GIAO HÀNG TOÀN QUỐC</h1>
          <p>Gửi hàng đi trong ngày</p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12">
        <div className="guaranteed-item">
          <div className="guaranteed-icon">
            <i className="bi bi-arrow-repeat me-2"></i>
          </div>
          <h1>HOÀN TIỀN NHANH TRONG NGÀY</h1>
          <p>Không để khách hàng đợi lâu</p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12">
        <div className="guaranteed-item">
          <div className="guaranteed-icon">
            <i className="bi bi-pie-chart-fill me-2"></i>
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
                <img src="assets/images/khonggiadinh.jpg" />
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
                      <a style={{'color': 'black'}} href='/shop'> Xem ngay</a>
                      </p>
                      <i className="bi bi-arrow-right"></i>

                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <section className="section blog" id="blog" aria-label="blog">
        <div className="container">
          <h2 className="h2 section-title">
            Tin tức mới nhất &amp; <span className="span">bài viết</span>
          </h2>
          <p className="section-text">
            Tin tức cập nhật về ngày phát hành, sách mới, thông tin về tổ chức hội sách,... sẽ được cập nhật định kỳ
          </p>
          <ul className="blog-list">
            {posts.map((post) => (
              <li key={post._id}>
                <div className="blog-card">
                <figure className="card-banner img-holder">
  <img src={post.image} alt={post.title} className="img-cover" />
</figure>

                  <div className="card-content">
                    <ul className="card-meta-list">
                      <li className="card-meta-item">
                        < ion-icon name="person-outline" />
                        <a href="#" className="item-text">Admin</a>
                      </li>
                      <li className="card-meta-item">
                        <ion-icon name="calendar-outline" />
                        <time dateTime={new Date(post.date).toISOString()} className="item-text">{new Date(post.date).toLocaleDateString()}</time>
                      </li>
                    </ul>
                    <h3>
                      <Link to={`/baiviet/${post._id}`} className="card-title">{post.title.substring(0, 30)}</Link>
                    </h3>
                    <p className="card-text">
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.substring(0, 100))}} />
                      {/* {post.content.substring(0, 100)}... */}
                    </p>
                    <Link to={`/baiviet/${post._id}`} className="card-link">
                      <span className="span">Xem thêm</span>
                      <ion-icon name="caret-forward" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
  <div className="col-md-12 text-center newsletter-form-container" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px' }}>
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
    </div>
    );
  }


  export default Home;

