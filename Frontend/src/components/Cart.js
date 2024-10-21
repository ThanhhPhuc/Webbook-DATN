import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const userId = '66aa18ae4436118f4dc5291b'; // Ví dụ userId

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/cart/${userId}`);
        setCart(res.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, [userId]);

  const updateQuantity = async (productId, quantity) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/cart/${userId}/update`, {
        productId,
        quantity
      });
      setCart(res.data);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const removeItem = async (productId) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/cart/${userId}/remove/${productId}`);
      setCart(res.data);
    } catch (error) {
      console.error('Error removing item:', error);
    }
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
          <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
          <li className="breadcrumb-item active" aria-current="shop">Sản phẩm</li>
        </ol>
      </nav>
    </div>
  </div>
  <div className="container mt120 mb-50 ">
    <div className="row">
      <div className="col-xl-8">
        <div className="card shadow-none">
          <div className="card-body cart mb-2 cart-title">
            <div className="row">
              <div className="col-7 d-flex justify-content-center">Sản phẩm</div>
              <div className="col-2 d-flex justify-content-center">Số lượng</div>
              <div className="col-2 d-flex justify-content-center">Thành tiền</div>
              <div className="col-1 d-flex justify-content-center" />
            </div>
          </div>
          <div className="card-body cart mb-2">
            <div className="row">
              <div className="col-4 col-lg-2 col-sm-4">
                <img src="assets/images/sp1.jpg" alt className="cart-img_product" />
              </div>
              <div className="col-8 col-lg-10 col-sm-8">
                <div className="cart-product_infor">
                  <div className="row h-100 align-items-center">
                    <div className="col-lg-6 col-sm-12">
                      <div className="row">
                        <div className="col-sm-12 mb-4">
                          <p>Blue Block</p>
                        </div>
                        <div className="col-sm-12">
                          <p className="cart-price price-cart_product">30000</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-9 col-sm-9">
                          <div className="row align-items-center cart-control">
                            <div className="col-lg-8 col-sm-12">
                              <input type="button" className="prev-cart_quantity input-cart_quantity" defaultValue="-" />
                              <input type="number" className="number-cart_quantity" defaultValue={0} />
                              <input type="button" className="plus-cart_quantity input-cart_quantity" defaultValue="+" />
                            </div>
                            <div className=" col-lg-4 col-sm-12 pricesum-cart_product">20000</div>
                          </div>
                        </div>
                        <div className="col-3 col-sm-3">
                          <a href="'.$linkdel.'" className="cart-text px-1 cart-icon_trash">
                            <i className="fa-solid fa-trash" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body cart mb-2">
            <div className="row">
              <div className="col-4 col-lg-2 col-sm-4">
                <img src="assets/images/sp1.jpg" alt className="cart-img_product" />
              </div>
              <div className="col-8 col-lg-10 col-sm-8">
                <div className="cart-product_infor">
                  <div className="row h-100 align-items-center">
                    <div className="col-lg-6 col-sm-12">
                      <div className="row">
                        <div className="col-sm-12 mb-4">
                          <p>Blue Block</p>
                        </div>
                        <div className="col-sm-12">
                          <p className="cart-price price-cart_product">30000</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                      <div className="row">
                        <div className="col-9 col-sm-9">
                          <div className="row align-items-center cart-control">
                            <div className="col-lg-8 col-sm-12">
                              <input type="button" className="prev-cart_quantity input-cart_quantity" defaultValue="-" />
                              <input type="number" className="number-cart_quantity" defaultValue={0} />
                              <input type="button" className="plus-cart_quantity input-cart_quantity" defaultValue="+" />
                            </div>
                            <div className=" col-lg-4 col-sm-12 pricesum-cart_product">20000</div>
                          </div>
                        </div>
                        <div className="col-3 col-sm-3">
                          <a href="'.$linkdel.'" className="cart-text px-1 cart-icon_trash">
                            <i className="fa-solid fa-trash" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body cart mb-2 cart-add_more">
            <a href>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 d-flex justify-content-center align-items-center"><i className="fa-solid fa-plus" />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <p>Thêm sản phẩm</p>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a className="cart-delete_all" href>Xóa tất cả</a>
          </div>
        </div>
        {/* <div class="cart-hollow">
              <div class="text-center">Không có sản phẩm trong giỏ hàng.</div>
              <div class="box-btn__buy text-center">
                  <a href="index.php?pg=sanpham"><button><i class="me-1 fa fa-shopping-basket"></i>Tiếp tục mua
                          hàng</button></a>
              </div>
          </div> */}
        {/* end card */}
      </div>
      <div className="col-xl-4">
        {/* <div className="mt-lg-0">
          <div className="card shadow-none bg-white">
            <div className="card-header bg-transparent price-sum_border py-3 px-4">
              <h5 className="font-size-16 mb-0 card-ck">Điểm tích lũy
              </h5>
            </div>
            <div className="card shadow-none bg-white">
              <div className=" bg-transparent  py-3 px-4">
                <div className="table-responsive">
                  <table className="mb-0 w-100">
                    <tbody>
                      <tr>
                        <td className="price-cart">
                          <p className="fw-600">
                            Số điểm bạn đang có :
                          </p>
                          <p className="fw-600">
                            <span style={{color: '#ed553b'}}>10</span> điểm
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a href className="btn-use_point__cart">Sử dụng điểm</a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="mt-lg-0">
          <div className="card shadow-none bg-white">
            <div className="card-header bg-transparent price-sum_border py-3 px-4">
              <h5 className="font-size-16 mb-0 card-ck">Đơn hàng
              </h5>
            </div>
            <div className="card-body p-4 pt-2">
              <div className="table-responsive">
                <table className="mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <form action className="d-flex align-items-end w-100">
                          <div className="voucher-input">
                            <label htmlFor style={{fontWeight: 600}}>Nhập mã giảm giá</label>
                            <input type="text" />
                          </div>
                          <div className="btn-use_voucher">
                            <input type="submit" defaultValue="Sử dụng" />
                          </div>
                        </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-0" style={{fontWeight: 600}}>Mã giảm giá</p>
                        <div className="box-voucher_cart">
                          <form action>
                            <div className="row d-flex align-items-center justify-content-start w-100 m-0">
                              <div className="box-voucher_carts col-6 d-flex align-items-center mt-2">
                                <div className="row">
                                  <div className="col-9">
                                    <div className="row">
                                      <div className="col-12 " style={{fontWeight: 600, color: '#2b648b'}}>DHFDKSS</div>
                                      <div className="col-12">20.000<sup>đ</sup></div>
                                    </div>
                                  </div>
                                  <div className="col-3 d-flex align-items-center">
                                    <input type="radio" id="vehicle1" name="vehicle1" defaultValue="Bike" onchange="toggleBoxColor(this)" />
                                  </div>
                                </div>
                              </div>
                              <div className="box-voucher_carts col-6 d-flex align-items-center mt-2">
                                <div className="row">
                                  <div className="col-9">
                                    <div className="row">
                                      <div className="col-12" style={{fontWeight: 600, color: '#2b648b'}}>DHFDKSS</div>
                                      <div className="col-12">20.000<sup>đ</sup></div>
                                    </div>
                                  </div>
                                  <div className="col-3 d-flex align-items-center">
                                    <input type="radio" id="vehicle1" name="vehicle1" defaultValue="Bike" onchange="toggleBoxColor(this)" />
                                  </div>
                                </div>
                              </div>
                              <div className="box-voucher_carts col-6 d-flex align-items-center mt-2">
                                <div className="row">
                                  <div className="col-9">
                                    <div className="row">
                                      <div className="col-12" style={{fontWeight: 600, color: '#2b648b'}}>DHFDKSS</div>
                                      <div className="col-12">20.000<sup>đ</sup></div>
                                    </div>
                                  </div>
                                  <div className="col-3 d-flex align-items-center">
                                    <input type="radio" id="vehicle1" name="vehicle1" defaultValue="Bike" onchange="toggleBoxColor(this)" />
                                  </div>
                                </div>
                              </div>
                              {/* Add similar HTML for other boxes as needed */}
                            </div>
                          </form>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-cart">
                        <p style={{fontWeight: 600}}>
                          Tiền khuyến mãi :
                        </p>
                        <p>
                          10000<sup>đ</sup>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-cart">
                        <p style={{fontWeight: 600}}>
                          Tông tiền :
                        </p>
                        <p>
                          10000<sup>đ</sup>
                        </p>
                      </td>
                    </tr>
                    <tr className="price-sum_border">
                      <td className="price-cart price-cart_sum">
                        <p style={{fontWeight: 600}}>
                          Tiền khuyến mãi :
                        </p>
                        <p className="cl-price">
                          10000<sup>đ</sup>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="row my-4 align-items-center">
                  {/* <div class=" col-6 col-lg-6 col-sm-6">
                <a href="index.php?pg=sanpham" class="btn-nextbuy">
                  <p>Tiếp tục mua sắm</p>
                </a>
              </div> end col */}
                  <div className="col-12 col-lg-12 col-sm-12 ">
                    <div className="box-btn__buy">
                      <a href="index.php?pg=donhang">
                        <button>Thanh toán</button>
                      </a>
                    </div>
                  </div> {/* end col */}
                </div> {/* end row*/}
              </div>
              {/* end table-responsive */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end row */}
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





  );
};

export default Cart;
