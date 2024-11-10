import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Admintacgia() {
  const [authors, setAuthors] = useState([]);
  const [newAuthor, setNewAuthor] = useState({ name: '', bio: '', hinh: '' });
  const [editAuthor, setEditAuthor] = useState(null);
  const navigate = useNavigate();

  const fetchAuthors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tacgia');
      setAuthors(response.data);
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const handleDelete = async (authorId) => {
    try {
      await axios.delete(`http://localhost:5000/api/tacgia/${authorId}`);
      setAuthors(authors.filter(author => author._id !== authorId));
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/tacgia', newAuthor);
      console.log('Tác giả mới được thêm:', response.data);
      setAuthors([...authors, response.data]);
      setNewAuthor({ name: '', bio: '', hinh: '' });
    } catch (error) {
      console.error('Error adding author:', error.response ? error.response.data : error.message);
    }
  };

  const handleEdit = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/tacgia/${editAuthor._id}`, editAuthor);
      setAuthors(authors.map(author => author._id === editAuthor._id ? response.data : author));
      setEditAuthor(null);
    } catch (error) {
      console.error('Error updating author:', error);
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
                <a href="#" className="nav-link text-dark "><i className="bi bi-chat-left-text-fill me-2"></i>Quản lý bình luận</a>
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
            <p>Chào mừng đến trang quản trị tác giả của Nhà sách Libworld</p>
            <button className="btn btn-outline-light" onClick={handleLogout}>Đăng xuất</button>
          </div>

          <div className="admin-content p-3">
            <h4>Thêm tác giả mới</h4>
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Tên Tác Giả"
                  value={newAuthor.name}
                  onChange={(e) => setNewAuthor({ ...newAuthor, name: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Tiểu sử"
                  value={newAuthor.bio}
                  onChange={(e) => setNewAuthor({ ...newAuthor, bio: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="URL hình ảnh"
                  value={newAuthor.hinh}
                  onChange={(e) => setNewAuthor({ ...newAuthor, hinh: e.target.value })}
                />
              </div>
              <div className="col-md-12">
                <button className="btn btn-success" onClick={handleAdd}>Thêm tác giả</button>
              </div>
            </div>

            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Tên Tác Giả</th>
                  <th>Tiểu sử</th>
                  <th>Hình</th>
                  <th colSpan="2">Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {authors.map(author => (
                  <tr key={author._id}>
                    <td>
                      {editAuthor && editAuthor._id === author._id ? (
                        <input
                          type="text"
                          value={editAuthor.name}
                          className="form-control"
                          onChange={(e) => setEditAuthor({ ...editAuthor, name: e.target.value })}
                        />
                      ) : (
                        author.name
                      )}
                    </td>
                    <td>
                      {editAuthor && editAuthor._id === author._id ? (
                        <input
                          type="text"
                          value={editAuthor.bio}
                          className="form-control"
                          onChange={(e) => setEditAuthor({ ...editAuthor, bio: e.target.value })}
                        />
                      ) : (
                        author.bio
                      )}
                    </td>
                    <td>
                      {editAuthor && editAuthor._id === author._id ? (
                        <input
                          type="text"
                          value={editAuthor.hinh}
                          className="form-control"
                          onChange={(e) => setEditAuthor({ ...editAuthor, hinh: e.target.value })}
                        />
                      ) : (
                        <img src={author.hinh} alt={author.name} style={{ width: '50px', height: '50px' }} />
                      )}
                    </td>
                    <td>
                      {editAuthor && editAuthor._id === author._id ? (
                        <button className="btn btn-primary" onClick={handleEdit}>Lưu</button>
                      ) : (
                        <button className="btn btn-warning" onClick={() => setEditAuthor(author)}>Sửa</button>
                      )}
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={() => handleDelete(author._id)}>Xóa</button>
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

export default Admintacgia;