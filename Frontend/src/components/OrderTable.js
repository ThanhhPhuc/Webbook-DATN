
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  const translateStatus = (status) => {
    switch (status) {
      case 'pending':
        return 'Chờ xử lý';
      case 'processing':
        return 'Đang xử lý';
      case 'completed':
        return 'Hoàn thành';
      default:
        return 'Chưa xác định';
    }
  };
  // Hàm gọi API lấy danh sách đơn hàng
  const fetchOrders = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/order');
      setOrders(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu đơn hàng:', error);
      setLoading(false);
    }
  }, []);

  // Sử dụng useEffect để gọi fetchOrders khi component mount
  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  // Hàm thay đổi trạng thái đơn hàng
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/order/${orderId}/status`, { status: newStatus });

      // Cập nhật trạng thái mới ngay trong local state
      setOrders(orders => orders.map(order =>
        order._id === orderId ? { ...order, status: newStatus } : order
      ));
       // Gọi lại API để làm mới dữ liệu từ server
    fetchOrders();
    } catch (error) {
      console.error('Lỗi khi cập nhật trạng thái đơn hàng:', error);
    }
  };

  // Hàm đăng xuất
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  // Hiển thị giao diện mặc định (skeleton) khi đang tải
  if (loading) {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
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

          {/* Nội dung chính */}
          <div className="col-md-10">
            <div className="admin-header bg-primary text-white p-3 mb-3">
              <p>Chào mừng đến trang quản trị đơn hàng của Nhà sách Libworld</p>
            </div>

            <div className="admin-content p-3">
              <h4>Danh sách đơn hàng</h4>
              <div className="d-flex flex-column">
                <div className="bg-light rounded mb-2" style={{ height: '20px', width: '100%' }}></div>
                <div className="bg-light rounded mb-2" style={{ height: '20px', width: '100%' }}></div>
                <div className="bg-light rounded mb-2" style={{ height: '20px', width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
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

        {/* Nội dung chính */}
        <div className="col-md-10">
          <div className="admin-header bg-primary text-white p-3 mb-3">
            <p>Chào mừng đến trang quản trị đơn hàng của Nhà sách Libworld</p>
          </div>

          <div className="admin-content p-3">
            <h4>Danh sách đơn hàng</h4>
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Mã đơn hàng</th>
                  <th>Tên khách hàng</th>
                  <th>Số điện thoại</th>
                  {/* <th>Sản phẩm</th> */}
                  <th>Tổng giá trị</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order._id}>
                    <td>
                      <Link to={`/order/${order._id}`} className="btn btn-link">
                        {order._id}
                      </Link>
                    </td>
                    <td>{order.userName}</td>
                    <td>{order.userPhone}</td>
                    {/* <td>
                      <ul>
                        {order.orderDetails.map((detail, index) => (
                          <li key={index} className="d-flex align-items-center">
                            <img 
                              src={detail.productId.image} 
                              alt={detail.productId.title} 
                              style={{ width: '30px', height: '30px', objectFit: 'cover', marginRight: '10px' }}
                            />
                            {detail.productId.title} x{detail.quantity}
                          </li>
                        ))}
                      </ul>
                    </td> */}
                    <td>{order.totalPrice} VND</td>
                    <td>{order.status}</td>
                    {/* <td>
                      {order.status !== 'completed' && (
                        <>
                          <button className="btn btn-warning" onClick={() => handleStatusChange(order._id, 'processing')}>Đang xử lý</button>
                          <button className="btn btn-success" onClick={() => handleStatusChange(order._id, 'completed')}>Xử lý xong</button>
                        </>
                      )}
                    </td> */}

                    <td>
                      {order.status !== 'Xử lý xong' && (
                        <>
                          <button className="btn btn-warning" onClick={() => handleStatusChange(order._id, 'Đang xử lý')}>
                            Đang xử lý
                          </button>
                          <button className="btn btn-success" onClick={() => handleStatusChange(order._id, 'Xử lý xong')}>
                            Xử lý xong
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
