import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const ProfileOrderDetail = () => {
  const { orderId } = useParams(); // Get orderId from URL
  const navigate = useNavigate(); // Hook for navigation
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch order details when the component mounts
    const fetchOrderDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/order/${orderId}`);
        setOrder(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching order detail:', error);
        setLoading(false);
      }
    };
    fetchOrderDetail();
  }, [orderId]);

  if (loading) {
    return <div>Loading order details...</div>;
  }

  if (!order) {
    return <div>Order not found.</div>;
  }

  // Handle back to orders
  const handleBackToOrders = () => {
    navigate('/profile/'); // Navigate back to the orders page in profile
  };

  return (
    <div>
 <Header/>
      <div className="row">
        <div className="col-md-2 bg-light p-3">
          <div className="myaccount-tab-menu nav" role="tablist">
            <Link to="/profile" className="nav-link"><i className="fa fa-user" /> Tài khoản Chi tiết</Link>
            <Link to="/profile/change-password" className="nav-link"><i className="fa fa-lock" /> Thay đổi mật khẩu</Link>
            <Link to="/profile/orders" className="nav-link"><i className="fa fa-cart-arrow-down" /> Đặt hàng</Link>
            <Link to="/" className="nav-link  ">  <i className="bi bi-box-arrow-right" /> Đăng xuất</Link>
            <a href="#"  className="nav-link"><i className="fa fa-trash" /> Xóa tài khoản</a>
          </div>
        </div>
        <div className="col-md-10">
        <div className="profile-content p-3"> 
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
              <button onClick={handleBackToOrders} className="btn btn-secondary">Quay lại đơn hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOrderDetail;