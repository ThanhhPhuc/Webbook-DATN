import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const handleLoginClick = () => {
    navigate('/login');
  };
  useEffect(() => {
    axios.get('http://localhost:5000/api/sach')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);
  return (
<div>
  <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark fixed-top" arial-label="Furni navigation bar">
    <div className="container">
      <img  img href="./assets/images/logo1.jpg" className="navbar-brand"></img>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li className="nav-item active  ">
            <a className="nav-link" href="index.html">Trang chủ</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="Shop.html">Cửa hàng</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="About.html">Về chúng tôi</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="Services.html">Dịch vụ</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="Blog.html">Blog</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="Contact.html">Liên hệ chúng tôi</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="lichsumuahang.html">Lịch sử mua hàng</a>
          </li>
        </ul>
        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          <li><a className="nav-link" href="login.html"><img src="./assets/css/user.svg" /></a></li>
          <li><a className="nav-link" href="dangky.html"><img src="./assets/css/cart.svg" /></a></li>					</ul>
      </div>
    </div>
  </nav>
  {/* End Header/Navigation */}		{/* Start Hero Section */}
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>Studio thiết kế nội thất <span clsas="d-block">hiện đại</span></h1>
            <p className="mb-4">Chúng tôi sẽ mang đến những sản phẩm chất lượng đến cho khách hàng. Sự hài lòng của khách hàng là niềm vinh hạnh cho chúng tôi.</p>
            <p><a href className="btn btn-secondary me-2">Mua ngay</a><a href="#" className="btn btn-white-outline">Khám phá</a></p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="hero-img-wrap">
            <img src="./assets/images/banner2ng.jpg" width={500} height={500} alt="hero banner" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Hero Section */}
  {/* Start Product Section */}
  <div className="product-section">
    <div className="container">
      <div className="row">
        {/* Start Column 1 */}
        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
        <div className="container">
      <ul className="menu-left">
        <li className="left-items">
          <a href="#">Bộ Sách Giáo Khoa</a> <span className="new-label">New</span>
        </li>
        <li className="left-items">
          <a href="#">Thế Giới Sách</a> <span className="hot-label">Hot</span>
          <div className="sub-menu">
            <ul>
              <li>
                <h3>VĂN HỌC</h3>
                <a href="#">Tiểu Thuyết</a>
                <a href="#">Truyện Ngắn - Ngôn Tình</a>
                <a href="#">Trinh Thám</a>
                <a href="#">Giả Tưởng - Huyền Bí - Kinh Dị</a>
                <a href="#">Tiểu Sử - Hồi Ký</a>
              </li>
              <li>
                <h3>CÔNG NGHỆ - THIẾT BỊ</h3>
                <a href="#">Cơ Khí</a>
                <a href="#">Tin Học</a>
                <a href="#">Kiến Trúc - Xây Dựng</a>
              </li>
              <li>
                <h3>CUỘC SỐNG QUANH TA</h3>
                <a href="#">Âm Nhạc</a>
                <a href="#">Âm Thực</a>
                <a href="#">Nghệ Thuật</a>
                <a href="#">Du Lịch</a>
                <a href="#">Phật Giáo</a>
              </li>
              <li>
                <h3>GIÁO KHOA - THAM KHẢO</h3>
                <a href="#">Sách Giáo Khoa</a>
                <a href="#">Sách Tham Khảo Các Lớp</a>
                <a href="#">Sách Ngoại Ngữ</a>
                <a href="#">Sách Đại Học</a>
                <a href="#">Combo Rèn Luyện Trẻ</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="left-items">
          <a href="#">Sách Tham Khảo</a>
        </li>
        <li className="left-items">
          <a href="#">Văn Phòng Phẩm</a>
        </li>
        <li className="left-items">
          <a href="#">Bách Hoá Nguyễn Văn Cừ</a>
        </li>
        <li className="left-items">
          <a href="#">In Nhanh Kỹ Thuật Số</a>
        </li>
        <li className="left-items">
          <a href="#">Phiếu Quà Tặng</a>
        </li>
      </ul>
    </div>
        </div>
        {/* End Column 1 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 mr ">
          <a className="product-item" href="index.php?act=sanphamchitiet&idsp=39">
            <img src="images/fullcombo.webp" className="img-fluid product-thumbnail" />
            <h3 className="product-title">Full Combo Phòng Ngủ MOHO KOSTER Màu Nâu</h3>
            <strong className="product-price">15060.000<sup>đ</sup></strong>
            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid" />
            </span>
          </a>
        </div> <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 mr ">
          <a className="product-item" href="index.php?act=sanphamchitiet&idsp=38">
            <img src="images/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_fyn_901_2_6db9b36362284eeb9c94a841747295f9_master.jpg" className="img-fluid product-thumbnail" />
            <h3 className="product-title">Ghế Sofa Gỗ Cao Su Tự Nhiên MOHO FYN 901</h3>
            <strong className="product-price">10990.000<sup>đ</sup></strong>
            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid" />
            </span>
          </a>
        </div> <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0  ">
          <a className="product-item" href="index.php?act=sanphamchitiet&idsp=37">
            <img src="images/ghesofacaosu.jpg" className="img-fluid product-thumbnail" />
            <h3 className="product-title">Ghế Sofa Gỗ Cao Su Tự Nhiên MOHO HOBRO 601</h3>
            <strong className="product-price">12590.000<sup>đ</sup></strong>
            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid" />
            </span>
          </a>
        </div> 					
        {/* End Column 4 */}
      </div>
    </div>
  </div>
  {/* End Product Section */}
  {/* Start Why Choose Us Section */}
  <div className="why-choose-section">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-6">
          <h2 className="section-title">Tại sao chọn chúng tôi</h2>
          <p>Tìm nguồn cảm hứng, sản phẩm và những ưu điểm để biến điều đó thành hiện thực — tất cả ở cùng một nơi.</p>
          <div className="row my-5">
            <div className="col-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <img src="images/truck.svg" alt="Image" className="imf-fluid" />
                </div>
                <h3>Vận chuyển nhanh &amp; miễn phí</h3>
                <p><span style={{color: 'black', fontWeight: 500}}>MIỄN PHÍ</span> vận chuyển cho các đơn hàng trên $49!</p>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <img src="images/bag.svg" alt="Image" className="imf-fluid" />
                </div>
                <h3>Dễ dàng mua sắm</h3>
                <p>Tiện lợi, mua sắm theo sở thích của riêng bạn.</p>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <img src="images/support.svg" alt="Image" className="imf-fluid" />
                </div>
                <h3>Hỗ trợ 24/7</h3>
                <p>Các chuyên gia của chúng tôi sẽ hỗ trợ bạn 24/7 mọi lúc bạn cần.</p>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <img src="images/return.svg" alt="Image" className="imf-fluid" />
                </div>
                <h3>Trả lại miễn phí</h3>
                <p>Trả hàng hoàn toàn miễn phí.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="img-wrap">
            <img src="images/why-choose-us-img.jpg" alt="Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Why Choose Us Section */}
  {/* Start We Help Section */}
  <div className="we-help-section">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-7 mb-5 mb-lg-0">
          <div className="imgs-grid">
            <div className="grid grid-1"><img src="./assets/images/sp3.webp" alt="Untree.co" /></div>
            <div className="grid grid-2"><img src="./assets/images/sp3.webp" alt="Untree.co" /></div>
            <div className="grid grid-3"><img src="./assets/images/sp3.webp" alt="Untree.co" /></div>
          </div>
        </div>
        <div className="col-lg-5 ps-lg-5">
          <h2 className="section-title mb-4">Chúng tôi giúp bạn thiết kế nội thất hiện đại</h2>
          <p>Biến ngôi nhà mơ ước của bạn thành hiện thực. Sở hữu công cụ tất cả trong một dành cho tiếp thị, CRM và quản lý dự án. Duyệt qua bộ sưu tập ý tưởng thiết kế nhà lớn nhất cho mọi phòng trong nhà bạn. Với hàng triệu bức ảnh đầy cảm hứng từ các chuyên gia thiết kế, bạn sẽ thấy mình chỉ muốn biến ngôi nhà của mình thành ngôi nhà mơ ước.</p>
          <ul className="list-unstyled custom-list my-4">
            <li>Tham gia cùng hàng triệu chuyên gia tại nhà</li>
            <li>Kiến trúc sư &amp; Nhà thiết kế xây dựng</li>
            <li>Kiến trúc sư cảnh quan &amp; Nhà thiết kế cảnh quan</li>
            <li>Hệ thống chiếu sáng &amp; âm thanh ngoài trời</li>
          </ul>
          <p><a herf="#" className="btn">Explore</a></p>
        </div>
      </div>
    </div>
  </div>
  {/* End We Help Section */}
  {/* Start Popular Product */}
  <div className="popular-product">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="product-item-sm d-flex">
            <div className="thumbnail">
              <img src="./assets/images/sp3.webp" alt="Image" className="img-fluid" />
            </div>
            <div className="pt-3">
              <h3>Ghế Sofa Gỗ Cao Su Tự Nhiên MOHO HOBRO 601</h3>
              <p>Phong cách Bắc Âu được biết đến đến rộng rãi và đã trở thành xu hướng được ưa chuộng nhờ sự sang trọng trong thiết kế. </p>
              <p><a href="index.php?act=sanphamchitiet&idsp=37">Đọc thêm</a></p>
            </div>
          </div>
        </div><div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="product-item-sm d-flex">
            <div className="thumbnail">
              <img src="images/ghesofa.webp" alt="Image" className="img-fluid" />
            </div>
            <div className="pt-3">
              <h3>Ghế Sofa Gỗ Tràm Tự Nhiên MOHO VLINE 601</h3>
              <p>Phong cách Bắc Âu được biết đến đến rộng rãi và đã trở thành xu hướng được ưa chuộng nhờ sự sang trọng trong thiết kế. </p>
              <p><a href="index.php?act=sanphamchitiet&idsp=36">Đọc thêm</a></p>
            </div>
          </div>
        </div><div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="product-item-sm d-flex">
            <div className="thumbnail">
              <img src="images/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_fyn_901_2_6db9b36362284eeb9c94a841747295f9_master.jpg" alt="Image" className="img-fluid" />
            </div>
            <div className="pt-3">
              <h3>Ghế Sofa Gỗ Cao Su Tự Nhiên MOHO FYN 901</h3>
              <p>Phong cách Bắc Âu được biết đến đến rộng rãi và đã trở thành xu hướng được ưa chuộng nhờ sự sang trọng trong thiết kế. </p>
              <p><a href="index.php?act=sanphamchitiet&idsp=38">Đọc thêm</a></p>
            </div>
          </div>
        </div>
        {/* // <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
  // 	<div class="product-item-sm d-flex">
  // 		<div class="thumbnail">
  // 			<img src="images/product-2.png" alt="Image" class="img-fluid">
  // 		</div>
  // 		<div class="pt-3">
  // 			<h3>Ghế Kruzo Aero</h3>
  // 			<p>Một món đồ nội thất cổ điển nhẹ giữa thế kỷ. được chế tạo từ vật liệu chất lượng tốt nhất. </p>
  // 			<p><a href="#">Đọc thêm</a></p>
  // 		</div>
  // 	</div>
  // </div>

  // <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
  // 	<div class="product-item-sm d-flex">
  // 		<div class="thumbnail">
  // 			<img src="images/product-3.png" alt="Image" class="img-fluid">
  // 		</div>
  // 		<div class="pt-3">
  // 			<h3>Ghế làm việc</h3>
  // 			<p>Ghế làm việc LOBERGET chính hãng IKEA đọc đáo. </p>
  // 			<p><a href="#">Đọc thêm</a></p>
  // 		</div>
  // 	</div>
  // </div> */}
      </div>
    </div>
  </div>
  {/* End Popular Product */}
  {/* Start Testimonial Slider */}
  {/* End Testimonial Slider */}
  {/* Start Blog Section */}
  <div className="blog-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-6">
          <h2 className="section-title">Blog gần đây</h2>
        </div>
        <div className="col-md-6 text-start text-md-end">
          <a href="#" className="more">Xem tất cả bài viết</a>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
          <div className="post-entry">
            <a href="#" className="post-thumbnail"><img src="./assets/images/sp3.webp" alt="Image" className="img-fluid" /></a>
            <div className="post-content-entry">
              <h3><a href="#">Ý tưởng của chủ sở hữu nhà lần đầu</a></h3>
              <div className="meta">
                <span>bởi <a href="#">Kristin Watson</a></span> <span>vào <a href="#">19 tháng 12 năm 2023</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
          <div className="post-entry">
            <a href="#" className="post-thumbnail"><img src="./assets/images/sp3.webp" alt="Image" className="img-fluid" /></a>
            <div className="post-content-entry">
              <h3><a href="#">Làm thế nào để giữ đồ nội thất của bạn sạch sẽ</a></h3>
              <div className="meta">
                <span>bởi <a href="#">Robert Fox</a></span> <span>vào <a href="#">15 tháng 12 năm 2023</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
          <div className="post-entry">
            <a href="#" className="post-thumbnail"><img src="./assets/images/sp3.webp" alt="Image" className="img-fluid" /></a>
            <div className="post-content-entry">
              <h3><a href="#">Ý tưởng nội thất căn hộ không gian nhỏ</a></h3>
              <div className="meta">
                <span>bởi <a href="#">Kristin Watson</a></span> <span>vào <a href="#"> 12 tháng 12 năm 2023</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Blog Section */}		{/* Start Footer Section */}
  <footer className="footer-section">
    <div className="container relative">
      <div className="sofa-img">
        <img src="./assets/images/sofa.png" alt="Image" className="img-fluid" />
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="subscription-form">
            <h3 className="d-flex align-items-center"><span className="me-1"><img src="./assets/images/envelope-outline.svg" alt="Image" className="img-fluid" /></span><span>Đăng ký tin</span></h3>
            <form action="#" className="row g-3">
              <div className="col-auto">
                <input type="text" className="form-control" placeholder="Nhập tên của bạn" />
              </div>
              <div className="col-auto">
                <input type="email" className="form-control" placeholder="Nhập email của bạn" />
              </div>
              <div className="col-auto">
                <button className="btn btn-primary">
                  <span className="fa fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row g-5 mb-5">
        <div className="col-lg-4">
          <div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Furni<span>.</span></a></div>
          <p className="mb-4">Hãy theo dõi chúng tôi để biết thêm chi tiết và cập nhật các khuyến mãi mới nhất dành cho bạn</p>
          <ul className="list-unstyled custom-social">
            <li><a href="#"><span className="fa fa-brands fa-facebook-f" /></a></li>
            <li><a href="#"><span className="fa fa-brands fa-twitter" /></a></li>
            <li><a href="#"><span className="fa fa-brands fa-instagram" /></a></li>
            <li><a href="#"><span className="fa fa-brands fa-linkedin" /></a></li>
          </ul>
        </div>
        <div className="col-lg-8">
          <div className="row links-wrap">
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li><a href="#">Về chúng tôi</a></li>
                <li><a href="#">Dịch vụ</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Liên hệ chúng tôi</a></li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li><a href="#">Ủng hộ</a></li>
                <li><a href="#">Kiến thức cơ bản</a></li>
                <li><a href="#">Trò chuyện trực tiếp</a></li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li><a href="#">Việc làm</a></li>
                <li><a href="#">Đội của chúng tôi</a></li>
                <li><a href="#">Khả năng lãnh đạo</a></li>
                <li><a href="#">Chính sách bảo mật</a></li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li><a href="#">Ghế Bắc Âu</a></li>
                <li><a href="#">Cruzo Aero</a></li>
                <li><a href="#">Ghế làm việc</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top copyright">
        <div className="row pt-4">
          <div className="col-lg-6">
            <p className="mb-2 text-center text-lg-start">Bản quyền ©. Mọi quyền được bảo lưu. — Được thiết kế bởi <a href>Nhà sách Libworld </a> Được phân phối bởi <a hreff>Libworld</a>  {/* License information: https://untree.co/license/ */}
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <ul className="list-unstyled d-inline-flex ms-auto">
              <li className="me-4"><a href="#">Điều khoản &amp; điều kiện</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer Section */}	
</div>

  );
}


export default Home;

