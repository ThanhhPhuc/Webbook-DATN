// import React, { useEffect, useState } from 'react';
// import { fetchOrders } from './OrderService';

// const OrderList = () => {
//   // State để lưu danh sách đơn hàng và thông tin thống kê
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true); // Trạng thái loading khi đang tải dữ liệu
//   const [error, setError] = useState(null); // Trạng thái lỗi

//   // State để lưu thông tin thống kê
//   const [totalOrders, setTotalOrders] = useState(0); // Tổng số đơn hàng
//   const [completedOrders, setCompletedOrders] = useState(0); // Số đơn hàng hoàn thành
//   const [totalAmount, setTotalAmount] = useState(0); // Tổng tiền của các đơn hàng

//   // Lấy danh sách đơn hàng từ API khi component mount
//   useEffect(() => {
//     const loadOrders = async () => {
//       try {
//         const data = await fetchOrders(); // Gọi API để lấy danh sách đơn hàng
//         console.log('Dữ liệu nhận được từ API:', data);  // Kiểm tra dữ liệu nhận được
//         setOrders(data);
//         setTotalOrders(data.length);  // Tổng số đơn hàng
//         setCompletedOrders(data.filter(order => order.status === 'Hoàn thành').length); // Số đơn hàng hoàn thành

//         // Tính tổng tiền từ tất cả các đơn hàng
//         const totalAmount = data.reduce((sum, order) => sum + (order.totalAmount || 0), 0); // Giả sử có trường totalAmount
//         setTotalAmount(totalAmount);
//       } catch (err) {
//         console.error('Lỗi khi lấy đơn hàng:', err);
//         setError('Không thể tải danh sách đơn hàng');
//       } finally {
//         setLoading(false); // Đặt trạng thái loading thành false khi hoàn thành tải dữ liệu
//       }
//     };
//     loadOrders();
//   }, []); // Chạy khi component mount

//   // Hiển thị nếu đang tải dữ liệu
//   if (loading) {
//     return <div>Đang tải danh sách đơn hàng...</div>;
//   }

//   // Hiển thị nếu có lỗi khi tải dữ liệu
//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Quản lý đơn hàng</h1>

//       {/* Hiển thị thống kê tổng số đơn hàng, hoàn thành và tổng tiền */}
//       <div style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>
//         <p>Tổng số đơn hàng: {totalOrders}</p>
//         <p>Số đơn hàng hoàn thành: {completedOrders}</p>
//         <p>Tổng tiền của các đơn hàng: {totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
//       </div>

//       {/* Hiển thị danh sách đơn hàng */}
//       <ul>
//         {orders.map((order) => (
//           <li key={order._id}>{order.userName} - {order.status} - {order.totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default OrderList;



// import React, { useEffect, useState } from 'react';
// import { fetchOrders } from './OrderService';

// const OrderList = () => {
//   // State để lưu danh sách đơn hàng và thông tin thống kê
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true); // Trạng thái loading khi đang tải dữ liệu
//   const [error, setError] = useState(null); // Trạng thái lỗi

//   // State để lưu thông tin thống kê
//   const [totalOrders, setTotalOrders] = useState(0); // Tổng số đơn hàng
//   const [completedOrders, setCompletedOrders] = useState(0); // Số đơn hàng hoàn thành
//   const [totalPrice, setTotalPrice] = useState(0); // Tổng số tiền từ tất cả đơn hàng

//   // Lấy danh sách đơn hàng từ API khi component mount
//   useEffect(() => {
//     const loadOrders = async () => {
//       try {
//         const data = await fetchOrders(); // Gọi API để lấy danh sách đơn hàng
//         console.log('Dữ liệu nhận được từ API:', data);  // Kiểm tra dữ liệu nhận được
        
//         // Kiểm tra xem mỗi đơn hàng có chứa totalPrice hợp lệ không
//         data.forEach(order => {
//           console.log(`order.totalPrice của đơn hàng ${order._id}:`, order.totalPrice);
//         });

//         setOrders(data);

//         // Tính tổng số đơn hàng và các trạng thái
//         setTotalOrders(data.length);  // Tổng số đơn hàng
//         setCompletedOrders(data.filter(order => order.status === 'Hoàn thành').length); // Số đơn hàng hoàn thành
        
//         // Tính tổng tiền từ tất cả các đơn hàng
//         const total = data.reduce((sum, order) => {
//           // Kiểm tra xem totalPrice có hợp lệ và là một số không
//           if (order.totalPrice && !isNaN(order.totalPrice)) {
//             return sum + Number(order.totalPrice); // Đảm bảo chuyển thành số
//           }
//           return sum;  // Nếu không có totalPrice hợp lệ, bỏ qua
//         }, 0);
//         setTotalPrice(total);  // Cập nhật tổng tiền
//       } catch (err) {
//         console.error('Lỗi khi lấy đơn hàng:', err);
//         setError('Không thể tải danh sách đơn hàng');
//       } finally {
//         setLoading(false); // Đặt trạng thái loading thành false khi hoàn thành tải dữ liệu
//       }
//     };
//     loadOrders();
//   }, []); // Chạy khi component mount

//   // Hiển thị nếu đang tải dữ liệu
//   if (loading) {
//     return <div>Đang tải danh sách đơn hàng...</div>;
//   }

//   // Hiển thị nếu có lỗi khi tải dữ liệu
//   if (error) {
//     return <div>{error}</div>;
//   }

//   // Hiển thị tổng tiền với định dạng VND, nếu không có tổng tiền, hiển thị 'Chưa có tiền'
//   const formattedTotalPrice = totalPrice > 0 ? totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : 'Chưa có tiền';

//   return (
//     <div>
//       <h1>Quản lý đơn hàng</h1>

//       {/* Hiển thị thống kê tổng số đơn hàng và trạng thái */}
//       <div style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>
//         <p>Tổng số đơn hàng: {totalOrders}</p>
//         <p>Số đơn hàng hoàn thành: {completedOrders}</p>
//         <p>Tổng tiền từ các đơn hàng: {formattedTotalPrice}</p>
//       </div>

    
     
//     </div>
//   );
// };

// export default OrderList;


// import React, { useEffect, useState } from 'react';
// import { fetchOrders } from './OrderService'; // Giả sử đây là hàm API để lấy dữ liệu

// const OrderList = () => {
//   // State để lưu danh sách đơn hàng và thông tin thống kê
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true); // Trạng thái loading khi đang tải dữ liệu
//   const [error, setError] = useState(null); // Trạng thái lỗi

//   // State để lưu thông tin thống kê
//   const [totalOrders, setTotalOrders] = useState(0); // Tổng số đơn hàng
//   const [totalQuantity, setTotalQuantity] = useState(0); // Tổng số lượng sách
//   const [totalPrice, setTotalPrice] = useState(0); // Tổng số tiền từ tất cả đơn hàng

//   // Lấy danh sách đơn hàng từ API khi component mount
//   useEffect(() => {
//     const loadOrders = async () => {
//       try {
//         const data = await fetchOrders(); // Gọi API để lấy danh sách đơn hàng
//         console.log('Dữ liệu nhận được từ API:', data);  // Kiểm tra dữ liệu nhận được

//         setOrders(data);

//         // Tính tổng số đơn hàng
//         setTotalOrders(data.length);

//         // Tính tổng số lượng sách trong tất cả các đơn hàng
//         const totalQuantityCount = data.reduce((sum, order) => {
//           return sum + order.orderDetails.reduce((orderSum, item) => {
//             return orderSum + item.quantity;  // Cộng dồn số lượng sách từ trường quantity
//           }, 0);
//         }, 0);
//         setTotalQuantity(totalQuantityCount); // Cập nhật tổng số lượng sách

//         // Tính tổng tiền từ tất cả các đơn hàng
//         const total = data.reduce((sum, order) => {
//           // Kiểm tra xem totalPrice có hợp lệ và là một số không
//           if (order.totalPrice && !isNaN(order.totalPrice)) {
//             return sum + Number(order.totalPrice); // Đảm bảo chuyển thành số
//           }
//           return sum;  // Nếu không có totalPrice hợp lệ, bỏ qua
//         }, 0);
//         setTotalPrice(total);  // Cập nhật tổng tiền
//       } catch (err) {
//         console.error('Lỗi khi lấy đơn hàng:', err);
//         setError('Không thể tải danh sách đơn hàng');
//       } finally {
//         setLoading(false); // Đặt trạng thái loading thành false khi hoàn thành tải dữ liệu
//       }
//     };
//     loadOrders();
//   }, []); // Chạy khi component mount

//   // Hiển thị nếu đang tải dữ liệu
//   if (loading) {
//     return <div>Đang tải danh sách đơn hàng...</div>;
//   }

//   // Hiển thị nếu có lỗi khi tải dữ liệu
//   if (error) {
//     return <div>{error}</div>;
//   }

//   // Hiển thị tổng tiền với định dạng VND, nếu không có tổng tiền, hiển thị 'Chưa có tiền'
//   const formattedTotalPrice = totalPrice > 0 ? totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : 'Chưa có tiền';

//   return (
//     <div>
//       <h1>Quản lý đơn hàng</h1>

//       {/* Hiển thị thống kê tổng số đơn hàng và trạng thái */}
//       <div style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>
//         <p>Tổng số đơn hàng: {totalOrders}</p>
//         <p>Tổng số lượng sách: {totalQuantity}</p>
//         <p>Tổng tiền từ các đơn hàng: {formattedTotalPrice}</p>
//       </div>

   
    
//     </div>
//   );
// };

// export default OrderList;
import React, { useEffect, useState } from 'react';
import { fetchOrders } from './OrderService'; // Giả sử đây là hàm API để lấy dữ liệu
import { useNavigate } from 'react-router-dom'; // Thêm import này

const OrderList = () => {
  // State để lưu danh sách đơn hàng và thông tin thống kê
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Trạng thái loading khi đang tải dữ liệu
  const [error, setError] = useState(null); // Trạng thái lỗi

  // State để lưu thông tin thống kê
  const [totalOrders, setTotalOrders] = useState(0); // Tổng số đơn hàng
  const [totalQuantity, setTotalQuantity] = useState(0); // Tổng số lượng sách
  const [totalPrice, setTotalPrice] = useState(0); // Tổng số tiền từ tất cả đơn hàng

  const navigate = useNavigate();  // Điều hướng sau khi logout

  useEffect(() => {
    // Lấy danh sách đơn hàng từ API khi component mount
    const loadOrders = async () => {
      try {
        const data = await fetchOrders(); // Gọi API để lấy danh sách đơn hàng
        setOrders(data);

        // Tính tổng số đơn hàng
        setTotalOrders(data.length);

        // Tính tổng số lượng sách trong tất cả các đơn hàng
        const totalQuantityCount = data.reduce((sum, order) => {
          return sum + order.orderDetails.reduce((orderSum, item) => {
            return orderSum + item.quantity;  // Cộng dồn số lượng sách từ trường quantity
          }, 0);
        }, 0);
        setTotalQuantity(totalQuantityCount); // Cập nhật tổng số lượng sách

        // Tính tổng tiền từ tất cả các đơn hàng
        const total = data.reduce((sum, order) => {
          if (order.totalPrice && !isNaN(order.totalPrice)) {
            return sum + Number(order.totalPrice); // Đảm bảo chuyển thành số
          }
          return sum;  // Nếu không có totalPrice hợp lệ, bỏ qua
        }, 0);
        setTotalPrice(total);  // Cập nhật tổng tiền
      } catch (err) {
        console.error('Lỗi khi lấy đơn hàng:', err);
        setError('Không thể tải danh sách đơn hàng');
      } finally {
        setLoading(false); // Đặt trạng thái loading thành false khi hoàn thành tải dữ liệu
      }
    };
    loadOrders();
  }, []); // Chạy khi component mount

  // Hiển thị nếu đang tải dữ liệu
  if (loading) {
    return <div>Đang tải danh sách đơn hàng...</div>;
  }

  // Hiển thị nếu có lỗi khi tải dữ liệu
  if (error) {
    return <div>{error}</div>;
  }

  // Hiển thị tổng tiền với định dạng VND
  const formattedTotalPrice = totalPrice > 0 ? totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : 'Chưa có tiền';

  // Xử lý logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); // Điều hướng về trang chủ sau khi đăng xuất
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
                <a href="#" className="nav-link text-dark"><i className="bi bi-cart-fill me-2"></i>Quản lý đơn hàng</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark"><i className="bi bi-chat-left-text-fill me-2"></i>Quản lý bình luận</a>
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
                  <td>Tổng số đơn hàng</td>
                  <td>{totalOrders}</td>
                </tr>
                <tr>
                  <td>Tổng số lượng sách</td>
                  <td>{totalQuantity}</td>
                </tr>
                <tr>
                  <td>Tổng giá trị đơn hàng</td>
                  <td>{formattedTotalPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>


        </div>
      </div>
    </div>
  );
};

export default OrderList;
