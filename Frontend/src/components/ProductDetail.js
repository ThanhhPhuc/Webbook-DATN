import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import Header from './Header';
import { AuthContext } from '../context/AuthContext';
import '../context/AuthContext';
import CommentForm from './formCM';

const ProductDetail = () => {
  const { id } = useParams();
  const { userId } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [categories, setCategories] = useState([]);
  const [author, setAuthor] = useState(null);
  const [category, setCategory] = useState(null);
  const [publisher, setPublisher] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/sach/${id}`);
        setProduct(res.data);

  
        if (res.data?.author) {
          const authorRes = await axios.get(`http://localhost:5000/api/tacgia/${res.data.author}`);
          setAuthor(authorRes.data);
        }
  
        if (res.data?.category) {
          const categoryRes = await axios.get(`http://localhost:5000/api/theloai/${res.data.category}`);
          setCategory(categoryRes.data);
        }
  
        if (res.data?.publisher) {
          const publisherRes = await axios.get(`http://localhost:5000/api/nxb/${res.data.publisher}`);
          setPublisher(publisherRes.data);
        }
  
        fetchRelatedProducts(res.data?.category);
      } catch (error) {
        console.error('Failed to fetch product', error);
      }
    };
  
    fetchProduct();
  }, [id]);
  const fetchRelatedProducts = async (categoryId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/sach?category=${categoryId}`);
      setRelatedProducts(res.data);
    } catch (error) {
      console.error('Failed to fetch related products', error);
    }
  };
  
  const getCategoryName = (id) => {
    const category = categories.find(cat => cat.id === id);
    return category ? category.name : 'Unknown'; // Trả về tên thể loại hoặc 'Unknown'
  };
  const handleAddToCart = async () => {
    if (product && product.inventory > 0) {
      try {
        await addToCart("670d2d7f4f9223989b3f51ed", product._id, quantity);
        console.log("Product added to cart successfully");
        navigate('/cart');
      } catch (error) {
        console.error('Error adding product to cart:', error);
        alert('Có lỗi xảy ra khi thêm vào giỏ hàng!');
      }
    } else {
      alert('Sản phẩm này đã hết hàng!');
    }
  };

  if (!product) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div id="main-wrapper">
      <Header />
      <div className="container-fluid">
        <div className="container p-0">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
              <li className="breadcrumb-item active" aria-current="page">Chi tiết sản phẩm</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row bg-white p-2 mt-2 pt-4 bdr-10">
        <div className="col-md-5 d-flex justify-content-center">
          <img src={product.sach.image} alt="Sản phẩm" className="img-single_product" />
        </div>
        <div className="col-md-7 product-details">
          <h2 className="product-title">{product.sach.title}</h2>
          <div className="single-product-price">
            <span className="price new-price">{product.sach.price}<sup>đ</sup></span>
          </div>
          <div className="product-description">
            <p>{product.sach.description}</p>
          </div>

          <div className="single-product-quantity">
            <form className="add-quantity" action="#">
              <div className="product-quantity">
                <input
                  type="number"
                  className="quantity-input"
                  value={quantity}
                  min="1"
                  max={product.inventory}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(product.inventory, parseInt(e.target.value, 10) || 1)))}
                />
              </div>
              <div className="add-to-link">
                <button
                  className={`btn btn-primary ${product.inventory === 0 ? 'disabled' : ''}`}
                  onClick={handleAddToCart}
                  disabled={product.inventory === 0}
                >
                  {product.inventory === 0 ? 'Hết hàng' : 'Thêm vào giỏ hàng'}
                </button>
              </div>
            </form>
          </div>
          <div className="product-meta">
  <div className="product-details">
  <span className="posted-in">
  <strong>Thể loại:</strong> <a href="#"> {product.sach.category.name }</a>
</span>
<span className="posted-in">
  <strong>Tác giả:</strong> <a href="#" className="author-link"> {product.sach.author.name}</a>
</span>
<span className="posted-in">
  <strong>Nhà xuất bản:</strong> <a href="#" className="publisher-link"> {product.sach.publisher.name}</a>
</span>
<span className="posted-in">
      <strong>Năm xuất bản:</strong> <span className="year-published"> {product.sach.namXB}</span>
    </span>
  </div>
</div>
        </div>

      </div>
      <div className="product-description-review-section section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white p-5 bdr-10">
              <div className="product-review-tab">
                <ul className="nav dec-and-review-menu">
                  <li>
                    <a className="active" data-toggle="tab" href="#description">Mô tả</a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#reviews">Đánh giá ({product.comments?.length || 0})</a>
                  </li>
                </ul>

                <div className="tab-content product-review-content-tab" id="myTabContent-4">
                  <div className="tab-pane fade active show" id="description">
                    <div className="single-product-description row">
                      <div className="col-4 col-sm-4 col-lg-2 d-flex justify-content-end">
                        <img src={product.sach.image || ""} alt="" className="mt-img" />
                      </div>
                      <div className="col-8 col-sm-8 col-lg-10">
                        <p className="mt-content">
                          - Tên: {product.sach.title} <br/>
                          - Thể loại: {product.sach.category.name } <br/>
                          - Tác giả: {product.sach.author.name } <br/>
                          - NXB: {product.sach.publisher.name} <br/>
                          - Năm XB: {product.sach.namXB} <br />
                          - Mô tả: {product.sach.description} <br /> 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="reviews">
                    <div className="review-page-comment">
                      <h2>{product.comments.length} đánh giá</h2>
                      <ul>
                        {product.comments.map((comment, index) => (
                          <li key={comment._id}>
                            <div className="product-comment mb-20">
                              <img src="/../assets/images/iconuser.jpg" alt="user" />
                              <div className="product-comment-content">
                                <div className="product-reviews">
                                  {[...Array(5)].map((star, i) => (
                                    <i
                                      key={i}
                                      className={
                                        i < comment.rating ? "fa fa-star" : "fa fa-star-o"
                                      }
                                    />
                                  ))}
                                </div>
                                <p className="meta">
                                  <strong>{comment.user_id.username}</strong> -{" "}
                                  <span>{new Date(comment.created_at).toLocaleDateString("vi-VN")}</span>
                                </p>
                                <div className="description">
                                  <p>{comment.comment_content}</p>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="review-form-wrapper">
                        <div className="review-form">
                          <span className="comment-reply-title">Thêm một bài đánh giá </span>

                          {userId ? (
                            <CommentForm productId={product.sach._id} userId={userId} />
                          ) : (
                            <p>Vui lòng đăng nhập để được bình luận!</p>
                          )}

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
      <div className="product-section section pt-100 pb-65">
        <div className="container bg-white p-5 bdr-10">
          <div className="section-title mb-40">
            <h2>Những sản phẩm tương tự</h2>
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
              <img src="/assets/images/brand1.png" alt className="brand-img" />
            </div>
            <div className="col">
              <img src="/assets/images/brand2.png" alt className="brand-img" />
            </div>
            <div className="col">
              <img src="/assets/images/brand3.png" alt className="brand-img" />
            </div>
            <div className="col">
              <img src="/assets/images/brand4.png" alt className="brand-img" />
            </div>
            <div className="col">
              <img src="/assets/images/brand5.png" alt className="brand-img" />
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
                <a href="#" className="me-3"><img src="/assets/images/appstore.jpg" style={{ height: '50px', width: '150px' }} alt="App Store" /></a>
                <a href="#"><img src="/assets/images/ggplay.png" style={{ height: '50px', width: '150px' }} alt="Google Play" /></a>
              </div>
            </div>
          </div>



          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4544374621546!2d106.62420897412295!3d10.852999257778526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1728542762299!5m2!1svi!2s" width={'100%'} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

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

export default ProductDetail;
