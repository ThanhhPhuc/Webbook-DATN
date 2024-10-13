import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Admin() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Hàm để lấy danh sách người dùng
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/users', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Gọi hàm fetchUsers khi component được mount
  }, []); // [] làm cho useEffect chỉ chạy một lần khi component được mount

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); // Chuyển hướng về trang chính
  };

  // Hàm để xóa người dùng
  const handleDelete = async (userId) => {
    try {
      const token = localStorage.getItem('token'); // Lấy token từ localStorage
      const response = await axios.delete(`http://localhost:5000/api/auth/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Gửi token trong header
        },
      });
      console.log(response.data);

      // Hiển thị thông báo thành công
      alert('Người dùng đã được xóa thành công!');

      // Cập nhật lại danh sách người dùng sau khi xóa
      setUsers((prevUsers) => prevUsers.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
      // Hiển thị thông báo lỗi nếu cần
      alert('Có lỗi xảy ra khi xóa người dùng!');
    }
  };

  // Hàm để cấp quyền admin
  const handleGrantAdmin = async (userId) => {
    try {
      const token = localStorage.getItem('token'); // Lấy token từ localStorage

      if (!token) {
        throw new Error('Token không tồn tại, vui lòng đăng nhập lại.');
      }

      const response = await axios.put(`http://localhost:5000/api/auth/grant-admin/${userId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`, // Gửi token trong header
        },
      });

      console.log(response.data);
      alert('Người dùng đã được cấp quyền admin thành công!');

      // Cập nhật trạng thái người dùng sau khi được cấp quyền admin
      setUsers(prevUsers => prevUsers.map(user => 
        user._id === userId ? { ...user, permissions: [...user.permissions, 'admin'] } : user
      ));

    } catch (error) {
      console.error('Error granting admin:', error);
      alert('Có lỗi xảy ra khi cấp quyền admin!');
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-2 bg-light p-3">
          <div className="libworld-logo text-center mb-3">
            <h1><span>Libworld</span><span className="text-white"> SHOP</span></h1>
          </div>
          <hr />
          <nav>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark"><i className="bi bi-pie-chart-fill me-2"></i>Quản lý thống kê</a>
              </li>
              <li className="nav-item mb-2">
                <a href="danhmuc/indexdm" className="nav-link text-dark"><i className="bi bi-tag-fill me-2"></i>Quản lý danh mục</a>
              </li>
              <li className="nav-item mb-2">
                <a href="sanpham/index" className="nav-link text-dark"><i className="bi bi-box-seam me-2"></i>Quản lý sản phẩm</a>
              </li>
              <li className="nav-item mb-2">
                <a href="user/indexuser" className="nav-link text-dark"><i className="bi bi-people-fill me-2"></i>Quản lý người dùng</a>
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
            <p>Chào mừng đến trang quản trị của Nhà sách Libworld</p>
            <button className="btn btn-outline-light" onClick={handleLogout}>Đăng xuất</button>
          </div>

          <div className="admin-content p-3">
            {/* <button className="btn btn-success mb-3">
              <a href="/user/createuser" className="text-white text-decoration-none">Thêm User</a>
            </button> */}
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Position</th>
                  <th colSpan="2">Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user._id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.dienthoai}</td>
                    <td>{user.diachi}</td>
                    <td>{user.permissions.join(', ')}</td>
                    <td>
                      <button className="btn btn-danger me-2" onClick={() => handleDelete(user._id)}>Xóa</button>
                      <button className={`btn btn-${user.permissions.includes('admin') ? 'secondary' : 'warning'}`} onClick={() => handleGrantAdmin(user._id)} disabled={user.permissions.includes('admin')}>
                        {user.permissions.includes('admin') ? 'Đã là admin' : 'Cấp quyền admin'}
                      </button>
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
}

export default Admin;
