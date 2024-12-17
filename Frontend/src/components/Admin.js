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

  const handleDelete = async (userId, email) => {
    // Kiểm tra xem người dùng có phải là admin hay không
    if (email === 'admin@gmail.com') {
        alert("Bạn không thể xóa tài khoản admin.");
        return;
    }

    // Kiểm tra xem người dùng đang cố gắng xóa chính mình
    if (userId === localStorage.getItem('userId')) {
        alert("Bạn không thể xóa tài khoản của chính mình.");
        return;
    }

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

const handleGrantAdmin = async (userId) => {
    try {
        const token = localStorage.getItem('token'); // Lấy token từ localStorage
        const response = await axios.put(`http://localhost:5000/api/auth/grant-admin/${userId}`, null, {
            headers: {
                Authorization: `Bearer ${token}`, // Đính kèm token vào request
            },
        });
        console.log('Admin privileges granted:', response.data);
        // Cập nhật lại danh sách người dùng
        fetchUsers(); // Gọi lại fetchUsers để cập nhật danh sách người dùng
    } catch (error) {
        console.error('Error granting admin:', error);
    }
};

const handleRevokeAdmin = async (userId, email) => {
    // Kiểm tra xem người dùng có phải là admin hay không
    if (email === 'admin@gmail.com') {
        alert("Bạn không thể thu hồi quyền admin của tài khoản admin.");
        return;
    }

    // Kiểm tra xem người dùng đang cố gắng thu hồi quyền admin của chính mình
    if (userId === localStorage.getItem('userId')) {
        alert("Bạn không thể thu hồi quyền admin của chính mình.");
        return;
    }

    try {
        const token = localStorage.getItem('token'); // Lấy token từ localStorage
        const response = await axios.put(`http://localhost:5000/api/auth/revoke-admin/${userId}`, null, {
            headers: {
                Authorization: `Bearer ${token}` // Đính kèm token vào request
            }
        });
        console.log('Admin privileges revoked:', response.data);
        // Cập nhật lại danh sách người dùng
        fetchUsers(); // Gọi lại fetchUsers để cập nhật danh sách người dùng
    } catch (error) {
        console.error('Error revoking admin privileges:', error.response.data);
    }
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
                <a href="/adminnxb" className="nav-link text-dark"><i class="bi bi-book-fill"></i> Quản lý nhà xuất bản</a>
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
            <p>Chào mừng đến trang quản trị của Nhà sách Libworld</p>
          </div>

          <div className="admin-content p-3">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Position</th>
                  <th colSpan="3">Chức năng</th>
                </tr>
              </thead>
              <tbody>
  {users.map(user => (
    <tr key={user._id}>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.dienthoai}</td>
      <td>{user.diachi}</td>
      <td>{user.permissions .join(', ')}</td>
      <td>
        <button className="btn btn-danger me-2" onClick={() => handleDelete(user._id, user.email)}>Xóa</button>
        <button
          className={`btn btn-${user.permissions.includes('admin') ? 'danger' : 'warning'}`}
          onClick={() => {
            if (user.permissions.includes('admin')) {
              handleRevokeAdmin(user._id, user.email);
            } else {
              handleGrantAdmin(user._id);
            }
          }}
        >
          {user.permissions.includes('admin') ? 'Thu hồi quyền admin' : 'Cấp quyền admin'}
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
