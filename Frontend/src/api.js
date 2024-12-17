import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000',
});

API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;


<div className="list_menu_header menu_index col-lg-3 col-md-3">
  <ul className="ul_menu site-nav-vetical">
    <li className="nav_item lv1">
      <a href="/collections/bosachgiaokhoa" title="Bộ Sách Giáo Khoa">Bộ Sách Giáo Khoa
        <span className="label_s">
          <i className="labels new">new</i>
        </span>
      </a>
    </li>
    <li className="nav_item lv1">
      <a href="/collections/sachtrongnuoc" title="Thế Giới Sách">Thế Giới Sách
        <span className="label_s">
          <i className="labels hot">hot</i>
        </span>
        <i className="fa fa-angle-right" />
      </a>
      <ul className="ul_content_right_1 row">
        <li className="nav_item lv2 col-lg-3 col-md-3">
          <a href="/collections/sachvanhoc" title="Văn Học">Văn Học</a>
          <ul className="ul_content_right_2">
            <li className="nav_item lv3"><a href="/collections/tieu-thuyet" title="Tiểu Thuyết">Tiểu Thuyết</a></li>
            <li className="nav_item lv3"><a href="/collections/truyenngan" title="Truyện Ngắn - Ngôn Tình">Truyện Ngắn - Ngôn Tình</a></li>
            <li className="nav_item lv3"><a href="/collections/trinh-tham" title="Trinh Thám">Trinh Thám</a></li>
            <li className="nav_item lv3"><a href="/collections/gia-tuong-huyen-bi-kinh-di" title="Giả Tưởng - Huyền Bí - Kinh Dị">Giả Tưởng - Huyền Bí - Kinh Dị</a></li>
            <li className="nav_item lv3"><a href="/collections/tieu-su-hoi-ky" title="Tiểu Sử - Hồi Ký">Tiểu Sử - Hồi Ký</a></li>
          </ul>
        </li>
        <li className="nav_item lv2 col-lg-3 col-md-3">
          <a href="/collections/sach-giao-khoa-tham-khao-1" title="Giáo Khoa - Tham Khảo">Giáo Khoa - Tham Khảo</a>
          <ul className="ul_content_right_2">
            <li className="nav_item lv3"><a href="/collections/sach-giao-khoa" title="Sách Giáo Khoa">Sách Giáo Khoa</a></li>
            <li className="nav_item lv3">
              <a href="/collections/sach-tham-khao-1" title="Sách Tham Khảo Các Lớp">Sách Tham Khảo Các Lớp<i className="fa fa-angle-right" /></a>
              <ul className="ul_content_right_3 clearfix">
                <li className="nav_item lv4"><a href="/collections/sachthamkhaocap1">Cấp 1</a></li>
                <li className="nav_item lv4"><a href="/collections/sachthamkhaocap2">Cấp 2</a></li>
                <li className="nav_item lv4"><a href="/collections/sachthamkhaocap3">Cấp 3</a></li>
              </ul>
            </li>
            <li className="nav_item lv3"><a href="/collections/sach-hoc-ngoai-ngu" title="Sách Học Ngoại Ngữ">Sách Học Ngoại Ngữ</a></li>
            <li className="nav_item lv3"><a href="/collections/sachdaihoc" title="Sách Đại Học">Sách Đại Học</a></li>
            <li className="nav_item lv3"><a href="/collections/combo-ren-luyen-tre" title="Combo Rèn Luyện Trẻ">Combo Rèn Luyện Trẻ</a></li>
          </ul>
        </li>
        <li className="nav_item lv2 col-lg-3 col-md-3">
          <a href="/collections/sachkinhte" title="Kinh Tế-Chính Trị-Pháp Luật">Kinh Tế-Chính Trị-Pháp Luật</a>
          <ul className="ul_content_right_2">
            <li className="nav_item lv3"><a href="/collections/sachkinhte" title="Kinh Tế">Kinh Tế</a></li>
            <li className="nav_item lv3"><a href="/collections/sachchinhtri" title="Chính Trị">Chính Trị</a></li>
            <li className="nav_item lv3"><a href="/collections/tai-chinh" title="Tài Chính">Tài Chính</a></li>
            <li className="nav_item lv3"><a href="/collections/phap-luat" title="Pháp Luật">Pháp Luật</a></li>
          </ul>
        </li>
        <li className="nav_item lv2 col-lg-3 col-md-3">
          <a href="/collections/sachtienganh" title="Thiếu Nhi">Thiếu Nhi</a>
          <ul className="ul_content_right_2">
            <li className="nav_item lv3"><a href="/collections/truyentranh" title="Manga">Manga</a></li>
            <li className="nav_item lv3"><a href="/collections/kien-thuc-bach-khoa-thieu-nhi" title="Bách Khoa Thiếu Nhi">Bách Khoa Thiếu Nhi</a></li>
            <li className="nav_item lv3"><a href="/collections/sach-tieng-anh-thieu-nhi" title="Sách Tiếng Anh Thiếu Nhi">Sách Tiếng Anh Thiếu Nhi</a></li>
            <li className="nav_item lv3"><a href="/collections/to-mau" title="Tập Tô Màu">Tập Tô Màu</a></li>
            <li className="nav_item lv3"><a href="/collections/tomauluyenchu" title="Luyện Chữ">Luyện Chữ</a></li>
          </ul>
        </li>
        <li className="nav_item lv2 col-lg-3 col-md-3">
          <a href="/collections/cong-nghe-thiet-bi" title="Công Nghệ - Thiết Bị">Công Nghệ - Thiết Bị</a>
          <ul className="ul_content_right_2">
            <li className="nav_item lv3"><a href="/collections/sachcokhi" title="Cơ Khí">Cơ Khí</a></li>
            <li className="nav_item lv3"><a href="/collections/tin-hoc" title="Tin Học">Tin Học</a></li>
            <li className="nav_item lv3"><a href="/collections/sachkientrucxaydung" title="Kiến Trúc - Xây Dựng">Kiến Trúc - Xây Dựng</a></li>
          </ul>
        </li>
        <li className="nav_item lv2 col-lg-3 col-md-3">
          <a href="/collections/cuoc-song-quanh-ta" title="Cuộc Sống Quanh Ta">Cuộc Sống Quanh Ta</a>
          <ul className="ul_content_right_2">
            <li className="nav_item lv3"><a href="/collections/amnhac" title="Âm Nhạc">Âm Nhạc</a></li>
            <li className="nav_item lv3"><a href="/collections/amthuc" title="Ẩm Thực">Ẩm Thực</a></li>
            <li className="nav_item lv3"><a href="/collections/nghethuat" title="Nghệ Thuật">Nghệ Thuật</a></li>
            <li className="nav_item lv3"><a href="/collections/sachdulich" title="Du Lịch">Du Lịch</a></li>
            <li className="nav_item lv3"><a href="/collections/phat-giao" title="Phật Giáo">Phật Giáo</a></li>
          </ul>
        </li>
        <li className="nav_item lv2 col-lg-3 col-md-3"><a href="/collections/sachngoaivan" title="Sách Ngoại Văn">Sách Ngoại Văn</a></li>
        <li className="nav_item lv2 col-lg-3 col-md-3">
          <a href="/collections/tam-ly-ky-nang-song" title="Tâm Lý - Kỹ Năng Sống">Tâm Lý - Kỹ Năng Sống</a>
          <ul className="ul_content_right_2">
            <li className="nav_item lv3"><a href="/collections/sachtamly" title="Tâm Lý">Tâm Lý</a></li>
            <li className="nav_item lv3"><a href="/collections/sachkynangsong" title="Kỹ Năng Sống">Kỹ Năng Sống</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li className="nav_item lv1">
      <a href="/collections/sach-tham-khao" title="Sách Tham Khảo Các Lớp">Sách Tham Khảo Các Lớp
        <span className="label_s">
          <i className="labels sale">sale</i>
        </span>
      </a>
    </li>
    <li className="nav_item lv1">
      <a href="/collections/vanphongpham" title="Văn Phòng Phẩm">Văn Phòng Phẩm
        <span className="label_s">
        </span>
        <i className="fa fa-angle-right" />
      </a>
      <ul className="ul_content_right_1 row">
        <li className="nav_item lv2 col-lg-3 col-md-3">
          <a href="/collections/dungcuhocsinh" title="Dụng Cụ Học Sinh">Dụng Cụ Học Sinh</a>
          <ul className="ul_content_right_2">
            <li className="nav_item lv3">
              <a href="/collections/but-viet" title="Bút Viết">Bút Viết<i className="fa fa-angle-right" /></a>
              <ul className="ul_content_right_3 clearfix">
                <li className="nav_item lv4"><a href="/collections/butbi">Bút Bi</a></li>
                <li className="nav_item lv4"><a href="/collections/butmuc">Bút Mực</a></li>
                <li className="nav_item lv4"><a href="/collections/but-chi">Bút Chì</a></li>
                <li className="nav_item lv4"><a href="/collections/but-da-quang">Bút Dạ Quang</a></li>
                <li className="nav_item lv4"><a href="/collections/but-gel">Bút Gel</a></li>
                <li className="nav_item lv4"><a href="/collections/butkieu">Bút Kiểu</a></li>
                <li className="nav_item lv4"><a href="/collections/butlongbang">Bút Lông Bảng</a></li>
                <li className="nav_item lv4"><a href="/collections/butmau">Bút Màu</a></li>
                <li className="nav_item lv4"><a href="/collections/butmay">Bút Máy</a></li>
                <li className="nav_item lv4"><a href="/collections/butve">Bút Vẽ</a></li>
                <li className="nav_item lv4"><a href="/collections/butxoa">Bút Xoá</a></li>
              </ul>
            </li>
            <li className="nav_item lv3"><a href="/collections/tapvo" title="Tập Vở">Tập Vở</a></li>
            <li className="nav_item lv3"><a href="/collections/thuoc" title="Thước Kẻ">Thước Kẻ</a></li>
            <li className="nav_item lv3"><a href="/collections/gomtay" title="Gôm Tẩy">Gôm Tẩy</a></li>
            <li className="nav_item lv3"><a href="/collections/bodungcuhocsinh" title="Bộ Dụng Cụ Học Sinh">Bộ Dụng Cụ Học Sinh</a></li>
            <li className="nav_item lv3"><a href="/collections/ruot-chi-bam" title="Ruột Chì Bấm">Ruột Chì Bấm</a></li>
            <li className="nav_item lv3"><a href="/collections/mucviet" title="Mực Viết">Mực Viết</a></li>
            <li className="nav_item lv3"><a href="/collections/hop-but-bop-viet" title="Bóp Viết - Hộp Bút">Bóp Viết - Hộp Bút</a></li>
            <li className="nav_item lv3"><a href="/collections/nhanvo" title="Nhãn Vỡ">Nhãn Vỡ</a></li>
            <li className="nav_item lv3"><a href="/collections/chuotbutchi" title="Chuốt Bút Chì">Chuốt Bút Chì</a></li>
            <li className="nav_item lv3"><a href="/collections/giay-ghi-chu" title="Giấy Ghi Chú ( Note )">Giấy Ghi Chú ( Note )</a></li>
            <li className="nav_item lv3"><a href="/collections/maytinh" title="Máy Tính">Máy Tính</a></li>
            <li className="nav_item lv3"><a href="/collections/maunuoc" title="Màu Nước">Màu Nước</a></li>
            <li className="nav_item lv3">
              <a href="/collections/sotaycacloai" title="Sổ Tay Các Loại">Sổ Tay Các Loại<i className="fa fa-angle-right" /></a>
              <ul className="ul_content_right_3 clearfix">
                <li className="nav_item lv4"><a href="/collections/note-book">Sổ Tay Notebook</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="nav_item lv2 col-lg-3 col-md-3">
          <a href="/collections/thiet-bi-van-phong" title="Thiết Bị Văn Phòng">Thiết Bị Văn Phòng</a>
          <ul className="ul_content_right_2">
            <li className="nav_item lv3"><a href="/collections/biakhayhoso" title="Bìa - Khay Hồ Sơ">Bìa - Khay Hồ Sơ</a></li>
            <li className="nav_item lv3"><a href="/collections/giay-in" title="Giấy In">Giấy In</a></li>
            <li className="nav_item lv3"><a href="/collections/ghim-giay-kim-bam" title="Ghim Giấy - Kim Bấm">Ghim Giấy - Kim Bấm</a></li>
            <li className="nav_item lv3"><a href="/collections/biatrinhky" title="Bìa Trình Ký">Bìa Trình Ký</a></li>
            <li className="nav_item lv3"><a href="/collections/bangkeo" title="Băng Keo">Băng Keo</a></li>
            <li className="nav_item lv3"><a href="/collections/butlongbang" title="Bút Lông Bảng">Bút Lông Bảng</a></li>
            <li className="nav_item lv3"><a href="/collections/keohodan" title="Keo - Hồ Dán">Keo - Hồ Dán</a></li>
            <li className="nav_item lv3"><a href="/collections/hoa-don" title="Hoá Đơn">Hoá Đơn</a></li>
            <li className="nav_item lv3"><a href="/collections/keo" title="Kéo">Kéo</a></li>
            <li className="nav_item lv3"><a href="/collections/menukemica" title="Menu - Kệ Mica">Menu - Kệ Mica</a></li>
            <li className="nav_item lv3"><a href="/collections/den-ban" title="Đèn Bàn">Đèn Bàn</a></li>
          </ul>
        </li>
        <li className="nav_item lv2 col-lg-3 col-md-3">
          <a href="/collections/thiet-bi-truong-hoc" title="Thiết Bị Trường Học">Thiết Bị Trường Học</a>
          <ul className="ul_content_right_2">
            <li className="nav_item lv3"><a href="/collections/bang-lon" title="Bảng Lớn">Bảng Lớn</a></li>
            <li className="nav_item lv3"><a href="/collections/ban-hoc-sinh" title="Bàn Học Sinh">Bàn Học Sinh</a></li>
            <li className="nav_item lv3"><a href="/collections/qua-dia-cau" title="Quả Địa Cầu">Quả Địa Cầu</a></li>
            <li className="nav_item lv3"><a href="/collections/gia-ve" title="Giá Vẽ">Giá Vẽ</a></li>
            <li className="nav_item lv3"><a href="/collections/gia-ke" title="Giá - Kệ">Giá - Kệ</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li className="nav_item lv1">
      <a href="/collections/bach-hoa-nguyen-van-cu" title="Bách Hoá Nguyễn Văn Cừ">Bách Hoá Nguyễn Văn Cừ
        <span className="label_s">
        </span>
        <i className="fa fa-angle-right" />
      </a>
      <ul className="ul_content_right_1 row">
        <li className="nav_item lv2 col-lg-3 col-md-3">
          <a href="/collections/phu-kien" title="Phụ Kiện">Phụ Kiện</a>
          <ul className="ul_content_right_2">
            <li className="nav_item lv3"><a href="/collections/matkinh" title="Mắt Kính">Mắt Kính</a></li>
            <li className="nav_item lv3"><a href="/collections/dongho" title="Đồng Hồ">Đồng Hồ</a></li>
            <li className="nav_item lv3"><a href="/collections/phu-kien-1" title="Phụ Kiện">Phụ Kiện</a></li>
          </ul>
        </li>
        <li className="nav_item lv2 col-lg-3 col-md-3">
          <a href="/collections/hopquatuigiay" title="Lưu Niệm">Lưu Niệm</a>
          <ul className="ul_content_right_2">
            <li className="nav_item lv3"><a href="/collections/hop-qua" title="Hộp Quà">Hộp Quà</a></li>
            <li className="nav_item lv3"><a href="/collections/tui-giay" title="Túi Giấy">Túi Giấy</a></li>
            <li className="nav_item lv3"><a href="/collections/giay-goi-qua" title="Giấy Gói Quà">Giấy Gói Quà</a></li>
            <li className="nav_item lv3"><a href="/collections/doluuniem" title="Đồ Lưu Niệm">Đồ Lưu Niệm</a></li>
          </ul>
        </li>
        <li className="nav_item lv2 col-lg-3 col-md-3"><a href="/collections/balocaptui" title="Balo - Cặp - Túi">Balo - Cặp - Túi</a></li>
        <li className="nav_item lv2 col-lg-3 col-md-3"><a href="/collections/dochoi" title="Đồ Chơi">Đồ Chơi</a></li>
        <li className="nav_item lv2 col-lg-3 col-md-3"><a href="/collections/lich-cac-nam" title="Lịch Các Năm">Lịch Các Năm</a></li>
        <li className="nav_item lv2 col-lg-3 col-md-3"><a href="/collections/den-ban" title="Đèn Bàn">Đèn Bàn</a></li>
      </ul>
    </li>
    <li className="nav_item lv1">
      <a href="/pages/thong-tin-lien-he" title="In Nhanh Kỹ Thuật Số">In Nhanh Kỹ Thuật Số
        <span className="label_s">
        </span>
        <i className="fa fa-angle-right" />
      </a>
      <ul className="ul_content_right_1 row">
        <li className="nav_item lv2 col-lg-3 col-md-3">
          <a href="/collections/in-ao-dong-phuc" title="Ấn Phẩm Văn Phòng Theo Yêu Cầu">Ấn Phẩm Văn Phòng Theo Yêu Cầu</a>
          <ul className="ul_content_right_2">
            <li className="nav_item lv3"><a href="/collections/danh-thiep" title="Danh Thiếp">Danh Thiếp</a></li>
            <li className="nav_item lv3"><a href="/collections/ve-giu-xe" title="Vé Giữ Xe">Vé Giữ Xe</a></li>
            <li className="nav_item lv3"><a href="/collections/bieu-mau-carbonless" title="Biểu Mẫu – Carbonless">Biểu Mẫu – Carbonless</a></li>
            <li className="nav_item lv3"><a href="/collections/in-giay-lot-ban-an" title="Giấy Lót Bàn Ăn">Giấy Lót Bàn Ăn</a></li>
            <li className="nav_item lv3"><a href="/collections/lich-cac-loai" title="Lịch Các Loại">Lịch Các Loại</a></li>
            <li className="nav_item lv3"><a href="/collections/bao-li-xi" title="Bao Lì Xì">Bao Lì Xì</a></li>
            <li className="nav_item lv3"><a href="/collections/giay-khen" title="Giấy Khen">Giấy Khen</a></li>
            <li className="nav_item lv3"><a href="/collections/in-the-tu" title="In Thẻ Từ">In Thẻ Từ</a></li>
            <li className="nav_item lv3"><a href="/collections/giay-ghi-chu-1" title="Giấy Ghi Chú">Giấy Ghi Chú</a></li>
            <li className="nav_item lv3">
              <a href="/collections/thiep-moi-thiep-cuoi" title="Thiệp Mời - Thiệp Cưới">Thiệp Mời - Thiệp Cưới<i className="fa fa-angle-right" /></a>
              <ul className="ul_content_right_3 clearfix">
                <li className="nav_item lv4"><a href="/collections/thiep-moi">Thiệp Mời-Tiệc-Hội Nghị</a></li>
                <li className="nav_item lv4"><a href="/collections/thiep-cuoi">Thiệp Cưới</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="nav_item lv2 col-lg-3 col-md-3">
          <a href="/" title="Ấn Phẩm Vật Dụng Theo Yêu Cầu">Ấn Phẩm Vật Dụng Theo Yêu Cầu</a>
          <ul className="ul_content_right_2">
            <li className="nav_item lv3"><a href="/collections/in-ao-dong-phuc" title="Áo Đồng Phục">Áo Đồng Phục</a></li>
            <li className="nav_item lv3"><a href="/collections/menu" title="Menu">Menu</a></li>
            <li className="nav_item lv3"><a href="/collections/in-ly-su" title="Ly Sứ">Ly Sứ</a></li>
            <li className="nav_item lv3"><a href="/collections/de-lot-ly" title="Đế Lót Ly">Đế Lót Ly</a></li>
            <li className="nav_item lv3"><a href="/collections/in-tren-nhua" title="In Trên Nhựa">In Trên Nhựa</a></li>
            <li className="nav_item lv3"><a href="/collections/bao-dua-bao-muong" title="Bao Đũa - Bao Muỗng">Bao Đũa - Bao Muỗng</a></li>
            <li className="nav_item lv3">
              <a href="/collections/tem-bao-hanh-phieu-bao-hanh" title="Tem Bảo Hành - Phiếu Bảo Hành">Tem Bảo Hành - Phiếu Bảo Hành<i className="fa fa-angle-right" /></a>
              <ul className="ul_content_right_3 clearfix">
                <li className="nav_item lv4"><a href="/collections/tem-bao-hanh">Tem Bảo Hành</a></li>
                <li className="nav_item lv4"><a href="/collections/phieu-bao-hanh">Phiếu Bảo Hành</a></li>
              </ul>
            </li>
            <li className="nav_item lv3"><a href="/collections/hoa-don-ban-le" title="Hoá Đơn Bán Lẻ">Hoá Đơn Bán Lẻ</a></li>
            <li className="nav_item lv3"><a href="/collections/in-bao-bi-tui-nilon" title="In Bao Bì - Túi Nilon">In Bao Bì - Túi Nilon</a></li>
            <li className="nav_item lv3"><a href="/collections/quat-cam-tay" title="Quạt Cầm Tay">Quạt Cầm Tay</a></li>
            <li className="nav_item lv3">
              <a href="/collections/photo-pictures" title="In Ảnh">In Ảnh<i className="fa fa-angle-right" /></a>
              <ul className="ul_content_right_3 clearfix">
                <li className="nav_item lv4"><a href="/collections/photobook">Photobook</a></li>
                <li className="nav_item lv4"><a href="/collections/buu-anh">Bưu Ảnh</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li className="nav_item lv1">
      <a href="/collections/phieumuahang" title="Phiếu Quà Tặng">Phiếu Quà Tặng
        <span className="label_s">
        </span>
      </a>
    </li>
  </ul>
  <ul className="ul_menu ul_check">
    <li className="lv1 nav_item xemthem clearfix" style={{display: 'none'}}>
      <a href="javascript:;">
        Xem thêm các mục
      </a> 
    </li>
    <li className="lv1 thugon nav_item  clearfix" style={{display: 'none'}}>
      <a href="javascript:;">
        Thu gọn các mục
      </a> 
    </li>
  </ul>
</div>
