import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Admintheloai() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: '', hinh: '' });
  const [editCategory, setEditCategory] = useState(null);
  const navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/theloai');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (categoryId) => {
    try {
      await axios.delete(`http://localhost:5000/api/theloai/${categoryId}`);
      setCategories(categories.filter(category => category._id !== categoryId));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/theloai', newCategory);
      setCategories([...categories, response.data]);
      setNewCategory({ name: '', hinh: '' });
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleEdit = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/theloai/${editCategory._id}`, editCategory);
      setCategories(categories.map(category => category._id === editCategory._id ? response.data : category));
      setEditCategory(null);
    } catch (error) {
      console.error('Error updating category:', error);
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
            <p>Chào mừng đến trang quản trị thể loại của Nhà sách Libworld</p>
          </div>

          <div className="admin-content p-3">
            <h4>Thêm thể loại mới</h4>
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Tên thể loại"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="URL hình ảnh"
                  value={newCategory.hinh}
                  onChange={(e) => setNewCategory({ ...newCategory, hinh: e.target.value })}
                />
              </div>
              <div className="col-md-12">
                <button className="btn btn-success" onClick={handleAdd}>Thêm thể loại</button>
              </div>
            </div>

            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Tên thể loại</th>
                  <th>Hình</th>
                  <th colSpan="2">Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {categories.map(category => (
                  <tr key={category._id}>
                    <td>
                      {editCategory && editCategory._id === category._id ? (
                        <input
                          type="text"
                          value={editCategory.name}
                          className="form-control"
                          onChange={(e) => setEditCategory({ ...editCategory, name: e.target.value })}
                        />
                      ) : (
                        category.name
                      )}
                    </td>
                    <td>
                      {editCategory && editCategory._id === category._id ? (
                        <input
                          type="text"
                          value={editCategory.hinh}
                          className="form-control"
                          onChange={(e) => setEditCategory({ ...editCategory, hinh: e.target.value })}
                        />
                      ) : (
                        <img src={category.hinh} alt={category.name} style={{ width: '50px', height: '50px' }} />
                      )}
                    </td>
                    <td>
                      {editCategory && editCategory._id === category._id ? (
                        <button className="btn btn-primary" onClick={handleEdit}>Lưu</button>
                      ) : (
                        <button className="btn btn-warning" onClick={() => setEditCategory(category)}>Sửa</button>
                      )}
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={() => handleDelete(category._id)}>Xóa</button>
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

export default Admintheloai;
