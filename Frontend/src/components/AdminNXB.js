import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminNXB() {
  const [publishers, setPublishers] = useState([]);
  const [newPublisher, setNewPublisher] = useState({ name: '', address: '', hinh: '' });
  const [editPublisher, setEditPublisher] = useState(null);
  const navigate = useNavigate();

  const fetchPublishers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/nxb');
      setPublishers(response.data);
    } catch (error) {
      console.error('Error fetching publishers:', error);
    }
  };

  useEffect(() => {
    fetchPublishers();
  }, []);

  const handleDelete = async (publisherId) => {
    try {
      await axios.delete(`http://localhost:5000/api/nxb/${publisherId}`);
      setPublishers(publishers.filter(publisher => publisher._id !== publisherId));
    } catch (error) {
      console.error('Error deleting publisher:', error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/nxb', newPublisher);
      setPublishers([...publishers, response.data]);
      setNewPublisher({ name: '', address: '', hinh: '' });
    } catch (error) {
      console.error('Error adding publisher:', error);
    }
  };

  const handleEdit = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/nxb/${editPublisher._id}`, editPublisher);
      setPublishers(publishers.map(publisher => publisher._id === editPublisher._id ? response.data : publisher));
      setEditPublisher(null);
    } catch (error) {
      console.error('Error updating publisher:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
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
            <p>Chào mừng đến trang quản trị nhà xuất bản của Nhà sách Libworld</p>
            <button className="btn btn-outline-light" onClick={handleLogout}>Đăng xuất</button>
          </div>

          <div className="admin-content p-3">
            <h4>Thêm nhà xuất bản mới</h4>
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Tên NXB"
                  value={newPublisher.name}
                  onChange={(e) => setNewPublisher({ ...newPublisher, name: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Địa chỉ"
                  value={newPublisher.address}
                  onChange={(e) => setNewPublisher({ ...newPublisher, address: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="URL hình ảnh"
                  value={newPublisher.hinh}
                  onChange={(e) => setNewPublisher({ ...newPublisher, hinh: e.target.value })}
                />
              </div>
              <div className="col-md-12">
                <button className="btn btn-success" onClick={handleAdd}>Thêm nhà xuất bản</button>
              </div>
            </div>

            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Tên NXB</th>
                  <th>Địa chỉ</th>
                  <th>Hình</th>
                  <th colSpan="2">Chức năng</th>
                </tr>
              </thead>
              <tbody>
  {publishers.map(publisher => (
    <tr key={publisher._id}>
      <td>
        {editPublisher && editPublisher._id === publisher._id ? (
          <input
            type="text"
            value={editPublisher.name ?? ''}
            className="form-control"
            onChange={(e) => setEditPublisher({ ...editPublisher, name: e.target.value })}
          />
        ) : (
          publisher.name
        )}
      </td>
      <td>
        {editPublisher && editPublisher._id === publisher._id ? (
          <input
            type="text"
            value={editPublisher.address ?? ''}
            className="form-control"
            onChange={(e) => setEditPublisher({ ...editPublisher, address: e.target.value })}
          />
        ) : (
          publisher.address
        )}
      </td>
      <td>
        {editPublisher && editPublisher._id === publisher._id ? (
          <input
            type="text"
            value={editPublisher.hinh ?? ''}
            className="form-control"
            onChange={(e) => setEditPublisher({ ...editPublisher, hinh: e.target.value })}
          />
        ) : (
          <img src={publisher.hinh} alt={publisher.name} style={{ width: '50px', height: '50px' }} />
        )}
      </td>
      <td>
        {editPublisher && editPublisher._id === publisher._id ? (
          <button className="btn btn-primary" onClick={handleEdit}>Lưu</button>
        ) : (
          <button className="btn btn-warning" onClick={() => setEditPublisher(publisher)}>Sửa</button>
        )}
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => handleDelete(publisher._id)}>Xóa</button>
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

export default AdminNXB;
