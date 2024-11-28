import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminComment() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/comment');
        setComments(response.data);
      } catch (err) {
        setError('Failed to fetch comments');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  const handleLogout = () => {
    navigate('/login');
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bình luận này?")) {
      try {
        await axios.delete(`http://localhost:5000/api/comment/${id}`);
        setComments(comments.filter(comment => comment._id !== id)); 
        setSuccessMessage('Bình luận đã được xóa thành công.');
      } catch (err) {
        setError('Failed to delete comment');
        console.error(err);
      }
    }
  };

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>{error}</p>;

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
            </ul>
          </nav>
          <hr />
          <div className="admin-logout-btn">
            <button className="btn btn-danger w-100" onClick={handleLogout}>Đăng xuất</button>
          </div>
        </div>

        <div className="col-md-10">
          <div className="admin-header bg-primary text-white p-3 mb-3">
            <p>Chào mừng đến trang quản trị bình luận của Nhà sách Libworld</p>
            <button className="btn btn-outline-light" onClick={handleLogout}>Đăng xuất</button>
          </div>

          <div className="admin-content p-3">
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <h4>Danh sách bình luận</h4>
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Nội dung bình luận</th>
                  <th>Sách</th>
                  <th>Tên người dùng</th>
                  <th>Email</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {comments.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">Không có bình luận nào</td>
                  </tr>
                ) : (
                  comments.map((comment) => (
                    <tr key={comment._id}>
                      <td>{comment.comment_content}</td>
                      <td>{comment.title}</td>
                      <td>{comment.user_id.username}</td>
                      <td>{comment.user_id.email}</td>
                      <td>
                        <button className="btn btn-danger" onClick={() => handleDelete(comment._id)}>Xóa</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminComment;
