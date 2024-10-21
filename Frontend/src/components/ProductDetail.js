import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import '../context/AuthContext';
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/sach/${id}`);
        setProduct(res.data);
        // Fetch related products based on the category of the current product
        fetchRelatedProducts(res.data.category);
      } catch (error) {
        console.error('Failed to fetch product', error);
      }
    };

    const fetchRelatedProducts = async (category) => {
      try {
        const res = await axios.get(`http://localhost:5000/api/sach?category=${category}`);
        setRelatedProducts(res.data);
      } catch (error) {
        console.error('Failed to fetch related products', error);
      }
    };

    fetchProduct();
  }, [id]);

  // const handleAddToCart = () => {
  //   if (!product) return;
  //   const { user } = useContext(UserContext); // Giả sử bạn có một UserContext
  //   const userId = user ? user.id : null;
  //   navigate('/cart'); // Chuyển hướng đến trang giỏ hàng sau khi thêm thành công
  // };

  if (!product) {
    return <div className="text-center text-white">Loading...</div>;
  }


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
          <div className="row bg-white p-2 mt-2 pt-4 bdr-10">
            <div className="col-md-5 d-flex justify-content-center">
              <div className="img-single_product">
                <img src={product.image} alt="Sản phẩm" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="product-details-content">
                <h2>{product.title}</h2>
                <div className="single-product-price">
                  <span className="price new-price">{product.price}<sup>đ</sup></span>
                </div>
                <div className="product-description">
                  <p>{product.description}</p>
                </div>
                <div className="single-product-quantity">
                  <form className="add-quantity" action="#">
                    <div className="product-quantity">
                      <input defaultValue={1} type="number" />
                    </div>
                    <div className="add-to-link">
                      <button type="button" className="product-add-btn">Thêm vào giỏ hàng</button>
                      {/* Thêm chức năng giỏ hàng sẽ ở đây */}
                    </div>
                  </form>
                </div>
                <div className="product-meta">
  <span className="posted-in">Thể loại: <a href="#">{product.category?.name ?? "Chưa có"}</a></span>
  <span className="posted-in">Tác giả: <a href="#">{product.author?.name ?? "Chưa có"}</a></span>
  <span className="posted-in">Nhà xuất bản: <a href="#">{product.publisher?.name ?? "Chưa có"}</a></span>
    <span className="posted-in">Năm xuất bản: <a href="#">{product.year ?? "Chưa có"}</a></span>
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
                          <img src={product.image} alt="" className="mt-img" />
                        </div>
                        <div className="col-8 col-sm-8 col-lg-10">
                          <p className="mt-content">
                            - Nội dung: {product.description} <br />
                            - Thể loại: {product.authro}
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
        
        <div className="product-section section pt-100 pb-65">
          <div className="container bg-white p-5 bdr-10">
            <div className="row">
              <div className="col">
                <div className="section-title mb-40">
                  <h2>Những sản phẩm tương tự</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct._id} className="col-lg-3 px-3">
                  <div className="single-product mb-30">
                    <div className="product-img">
                      <Link to={`/sach/${relatedProduct._id}`}>
                        <img src={relatedProduct.image} alt={relatedProduct.title} />
                      </Link>
                    </div>
                    <div className="product-content">
                      <h3><Link to={`/sach/${relatedProduct._id}`}>{relatedProduct.title}</Link></h3>
                      <h4 className="price"><span className="new">{relatedProduct.price}<sup>đ</sup></span></h4>
                    </div>
                  </div>
                </div>
              ))}
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

export default ProductDetail;
