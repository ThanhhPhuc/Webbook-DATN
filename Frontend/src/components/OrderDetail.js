import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Thêm import này
const OrderDetail = () => {
  const { orderId } = useParams(); // Lấy orderId từ URL
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
const navigate = useNavigate();

  useEffect(() => {
    // Lấy chi tiết đơn hàng từ API khi trang được tải
    const fetchOrderDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/order/${orderId}`);
        setOrder(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Lỗi khi lấy chi tiết đơn hàng:', error);
        setLoading(false);
      }
    };
    fetchOrderDetail();
  }, [orderId]);

  if (loading) {
    return <div>Đang tải chi tiết đơn hàng...</div>;
  }

  if (!order) {
    return <div>Không tìm thấy đơn hàng.</div>;
  }
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-2 bg-light p-3">
          <div className="libworld-logo text-center mb-3">
          <h1><span>Libworld</span></h1>
          </div>
          <hr />
          <nav>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/orderlist" className="nav-link text-dark"><i className="bi bi-pie-chart-fill me-2"></i>Quản lý thống kê</a>
              </li>
              <li className="nav-item mb-2">
                <a href="/admintheloai" className="nav-link text-dark"><i className="bi bi-tag-fill me-2"></i>Quản lý thể loại</a>
              </li>
              <li className="nav-item mb-2">
                <a href="/admintacgia" className="nav-link text-dark"><i className="bi bi-pen-fill"></i> Quản lý tác giả</a>
              </li>
              <li className="nav-item mb-2">
                <a href="/adminnxb" className="nav-link text-dark"><i className="bi bi-book-fill"></i> Quản lý nhà xuất bản</a>
              </li>
              <li className="nav-item mb-2">
                <a href="/adminsach" className="nav-link text-dark"><i className="bi bi-box-seam-fill me-2"></i>Quản lý sách</a>
              </li>
              <li className="nav-item mb-2">
                <a href="/admin" className="nav-link text-dark"><i className="bi bi-people-fill me-2"></i>Quản lý người dùng</a>
              </li>
              <li className="nav-item mb-2">
                <a href="/adminorder" className="nav-link text-dark"><i className="bi bi-cart-fill me-2"></i>Quản lý đơn hàng</a>
 </li>
              <li className="nav-item mb-2">
                <a href="/admincomment" className="nav-link text-dark"><i className="bi bi-chat-left-text-fill me-2"></i>Quản lý bình luận</a>
              </li>
              <li className="nav-item mb-2">
                <a href="/adminbaiviet" className="nav-link text-dark"><i className="bi bi-journal-text me-2"></i>Quản lý bài viết</a>
              </li>
            </ul>
          </nav>
          <hr />
          <div className="admin-logout-btn">
          <button className="btn btn-danger w-100" onClick={handleLogout}>Đăng xuất</button>
          </div>
        </div>

        <div className="col-md-10">
          <div className="admin-header bg-primary text-white p-3 mb-3">
            <p>Chào mừng đến trang chi tiết đơn hàng của Nhà sách Libworld</p>
          </div>

          <div className="admin-content p-3">
            <h4>Chi tiết đơn hàng {order._id}</h4>
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Người nhận: </strong>{order.shippingInfo.name}
              </div>
              <div className="col-md-6">
                <strong>Địa chỉ: </strong>{order.shippingInfo.address}, {order.shippingInfo.city}
              </div>
            </div>
            <h5>Sản phẩm trong đơn hàng</h5>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {order.orderDetails.map((detail, index) => (
                  <tr key={index}>
                    <td>
                      <img 
                        src={detail.productId.image} 
                        alt={detail.productId.title} 
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                      />
                    </td>
                    <td>{detail.productId.title}</td>
                    <td>{detail.quantity}</td>
                    <td>{detail.price}</td>
                    <td>{detail.quantity * detail.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="row">
              <div className="col-md-6">
                <strong>Tổng giá trị đơn hàng: </strong>{order.totalPrice} VND
              </div>
              <div className="col-md-6">
                <strong>Trạng thái: </strong>{order.status}
              </div>
            </div>
            <div className="mt-3">
              <Link to="/adminorder" className="btn btn-secondary">Quay lại</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
