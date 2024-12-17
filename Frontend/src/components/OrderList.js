import React, { useEffect, useState } from 'react';
import { fetchOrders } from './OrderService';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Đăng ký các thành phần cần thiết
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data);
        setTotalOrders(data.length);
        
        const totalQuantityCount = data.reduce((sum, order) => {
          return sum + order.orderDetails.reduce((orderSum, item) => {
            return orderSum + item.quantity;
          }, 0);
        }, 0);
        setTotalQuantity(totalQuantityCount);
        
        const total = data.reduce((sum, order) => {
          if (order.totalPrice && !isNaN(order.totalPrice)) {
            return sum + Number(order.totalPrice);
          }
          return sum;
        }, 0);
        setTotalPrice(total);
      } catch (err) {
        console.error('Lỗi khi lấy đơn hàng:', err);
        setError('Không thể tải danh sách đơn hàng');
      } finally {
        setLoading(false);
      }
    };
    loadOrders();
  }, []);

  if (loading) {
    return <div>Đang tải danh sách đơn hàng...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const formattedTotalPrice = totalPrice > 0 ? totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : 'Chưa có tiền';

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  // Prepare data for the line chart
  const dailySales = {};
  orders.forEach(order => {
    const orderDate = new Date(order.createdAt);
    const dateString = orderDate.toLocaleDateString();

    if (!dailySales[dateString]) {
      dailySales[dateString] = 0;
    }
    dailySales[dateString] += order.totalPrice;
  });

  const chartLabels = Object.keys(dailySales);
  const chartDataValues = Object.values(dailySales);
  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Giá trị đơn hàng',
        data: chartDataValues,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointRadius: 5, // Kích thước điểm
        pointHoverRadius: 7, // Kích thước điểm khi hover
        fill: true, // Đổ màu dưới đường
      },
    ],
  };

  const options = {
    responsive: true ,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `Ngày: ${tooltipItem.label}, Giá trị: ${tooltipItem.raw.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Ngày',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Giá trị (VND)',
        },
        beginAtZero: true,
      },
    },
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
                <a href="/admincoment" className="nav-link text-dark"><i className="bi bi-chat-left-text-fill me-2"></i>Quản lý bình luận</a>
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
            <p>Chào mừng đến trang thống kê đơn hàng của Nhà sách Libworld</p>
          </div>

          <div className="admin-content p-3">
            <h4>Thống kê đơn hàng</h4>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Thông tin thống kê</th>
                  <th>Giá trị</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tổng số đơn đặt hàng</td>
                  <td>{totalOrders}</td>
                </tr>
                <tr>
                  <td>Tổng số lượng sách bán ra</td>
                  <td>{totalQuantity}</td>
                </tr>
                <tr>
                  <td>Tổng giá trị đơn hàng</td>
                  <td>{formattedTotalPrice}</td>
                </tr>
              </tbody>
            </table>

            {/* Biểu đồ đường cho giá trị đơn hàng */}
            <div className="chart-container">
              <Line data={chartData} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;