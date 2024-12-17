import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminSach = () => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({ inventory: 0 });
  const [isEditing, setIsEditing] = useState(false);
  const [theloais, setTheloais] = useState([]);
  const [nxb, setNXB] = useState([]);
  const [tacgias, setTacgias] = useState([]);
  const navigate = useNavigate();
  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sach');
      console.log(response.data);  // Debugging line to check data
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const fetchTheloai = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/theloai');
      setTheloais(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchNXB = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/nxb');
      setNXB(response.data);
    } catch (error) {
      console.error('Error fetching publishers:', error);
    }
  };

  const fetchTacgia = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tacgia');
      setTacgias(response.data);
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
    fetchTheloai();
    fetchNXB();
    fetchTacgia();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: name === 'inventory' ? Number(value) : value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Kiểm tra và log thông tin sách trước khi gửi
    console.log('Submitting book:', book);
  
    try {
      // Kiểm tra nếu đang trong chế độ chỉnh sửa
      if (isEditing) {
        const response = await axios.put(`http://localhost:5000/api/sach/${book._id}`, book);
        console.log('Book updated:', response.data); // Log phản hồi khi cập nhật sách
      } else {
        const response = await axios.post('http://localhost:5000/api/sach', book);
        console.log('Book added:', response.data); // Log phản hồi khi thêm sách
      }
  
      // Đặt lại trạng thái
      setIsEditing(false);
      setBook({ inventory: 0 }); // Reset form after submit
      fetchBooks(); // Tải lại danh sách sách
  
    } catch (error) {
      console.error(isEditing ? 'Error updating book:' : 'Error adding book:', error);
    }
  };
  
  const editBook = (b) => {
    setBook(b);
    setIsEditing(true); // Set editing state to true
  };

  const deleteBook = async (bookId) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await axios.delete(`http://localhost:5000/api/sach/${bookId}`);
        setBooks(books.filter(b => b._id !== bookId));
      } catch (error) {
        console.error('Error deleting book:', error);
      }
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
                <a href="/admincomment" className="nav-link text-dark "><i className="bi bi-chat-left-text-fill me-2"></i>Quản lý bình luận</a>
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
            <p>Chào mừng đến trang quản trị sách của Nhà sách Libworld</p>
            {/* <button className="btn btn-outline-light" onClick={handleLogout}>Đăng xuất</button> */}
          </div>

          <div className="admin-content p-3">
        <h4>{isEditing ? 'Sửa Sách' : 'Thêm Sách'}</h4>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                name="title"
                className="form-control mb-2"
                placeholder="Tên sách"
                value={book.title || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <select name="author" className="form-control mb-2" value={book.author || ''} onChange={handleChange} required>
                <option value="">Chọn tác giả</option>
                {tacgias.map(a => (
                  <option key={a._id} value={a._id}>{a.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <select name="category" className="form-control mb-2" value={book.category || ''} onChange={handleChange} required>
                <option value="">Chọn thể loại</option>
                {theloais.map(t => (
                  <option key={t._id} value={t._id}>{t.name}</option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <select name="publisher" className="form-control mb-2" value={book.publisher || ''} onChange={handleChange} required>
                <option value="">Chọn nhà xuất bản</option>
                {nxb.map(n => (
                  <option key={n._id} value={n._id}>{n.name}</option>
                ))}
              </select>
            </div>
            
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="number"
                name="namXB"
                className="form-control mb-2"
                placeholder="Năm xuất bản"
                value={book.namXB || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="number"
                name="price"
                className="form-control mb-2"
                placeholder="Giá"
                value={book.price || ''}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-12">
              <input
                type="text"
                name="description"
                className="form-control mb-2"
                placeholder="Mô tả"
                value={book.description || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12">
              <input
                type="text"
                name="image"
                className="form-control mb-2"
                placeholder="URL hình ảnh"
                value={book.image || ''}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
            <input
  type="number"
  name="inventory"
  className="form-control mb-2"
  placeholder="Số lượng tồn kho"
  value={book.inventory || 0}  // This remains for controlled input behavior
  onChange={handleChange}
  required
  defaultValue={0}  // Add this to set default displayed value
/>
              </div>
            <div className="col-md-12">
              <button type="submit" className="btn btn-success w-100">
                {isEditing ? 'Cập nhật sách' : 'Thêm sách'}
              </button>
            </div>
          </div>
        </form>

        <h4>Danh sách sách</h4>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Tên sách</th>
              <th>Tác giả</th>
              <th>Nhà xuất bản</th>
              <th>Thể loại</th>
              <th>Năm xuất bản</th>
              <th>Giá</th>
              <th>Số lượng tồn kho</th>
              <th colSpan="2">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {books.map(b => (
              <tr key={b._id}>
                <td>{b.title}</td>
                <td>{b.author?.name}</td>
                <td>{b.publisher?.name}</td>
                <td>{b.category?.name}</td>
                <td>{b.namXB}</td>
                <td>{b.price}</td>
                <td>{b.inventory}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => editBook(b)}>Sửa</button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteBook(b._id)}>Xóa</button>
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

export default AdminSach;