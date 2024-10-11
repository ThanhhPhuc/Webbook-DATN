import React from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
   
<div>
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
        <button className="btn btn-success mb-3"><a href="/user/createuser" className="text-white text-decoration-none">Thêm User</a></button>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Fullname</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Position</th>
              <th colSpan="2">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
           <td>

      {/* code backend de o day */}

           </td>
              <td><button className="btn btn-danger">Delete</button></td>
              <td><button className="btn btn-primary"><a href="#" className="text-white text-decoration-none">Edit</a></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

 
</div>
</div>

  );
}

export default Admin;
