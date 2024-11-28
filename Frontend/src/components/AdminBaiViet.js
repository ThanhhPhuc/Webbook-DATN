import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import CSS cho React Quill
import DOMPurify from 'dompurify';
function AdminBaiViet() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', image: '', author: '' });
  const [editPost, setEditPost] = useState(null);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/baiviet');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/api/baiviet/${postId}`);
      setPosts(posts.filter(post => post._id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleAdd = async () => {
    console.log('New Post Data:', newPost); // Kiểm tra dữ liệu mới
    try {
      const response = await axios.post('http://localhost:5000/api/baiviet', newPost);
      setPosts([...posts, response.data]);
      setNewPost({ title: '', content: '', image: '', author: '' });
    } catch (error) {
      console.error('Error adding post:', error.response ? error.response.data : error.message);
    }
  };
  
  const handleEdit = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/baiviet/${editPost._id}`, editPost);
      setPosts(posts.map(post => post._id === editPost._id ? response.data : post));
      setEditPost(null);
    } catch (error) {
      console.error('Error updating post:', error);
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
            <p>Chào mừng đến trang quản trị bài viết của Nhà sách Libworld</p>
          </div>

          <div className="admin-content p-3">
            <h4>Thêm bài viết mới</h4>
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Tiêu đề"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Tác giả"
                  value={newPost.author}
                  onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="URL hình ảnh"
                  value={newPost.image}
                  onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
                />
              </div>
              <div className="col-md-12">
                <ReactQuill
                  className="quill-editor" 
                  value={newPost.content}
                  onChange={(content) => setNewPost({ ...newPost, content })}
                  placeholder="Nội dung"
                />
              </div>
              <div className="col-md-12">
                <button className="btn btn-success" onClick={handleAdd}>Thêm bài viết</button>
              </div>
            </div>

            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Tiêu đề</th>
                  <th>Nội dung</th>
                  <th>Tác giả</th>
                  <th>Hình</th>
                  <th colSpan="2">Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {posts.map(post => (
                  <tr key={post._id}>
                    <td>
                      {editPost && editPost._id === post._id ? (
                        <input
                          type="text"
                          value={editPost.title ?? ''}
                          className="form-control"
                          onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
                        />
                      ) : (
                        post.title
                      )}
                    </td>
                    <td>
  {editPost && editPost._id === post._id ? (
    <ReactQuill
      value={editPost.content ?? ''}
      onChange={(content) => setEditPost({ ...editPost, content })}
    />
  ) : (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
  )}
</td>
                    <td>
                      {editPost && editPost._id === post._id ? (
                        <input
                          type="text"
                          value={editPost.author ?? ''}
                          className="form-control"
                          onChange={(e) => setEditPost({ ...editPost, author: e.target.value })}
                        />
                      ) : (
                        post.author
                      )}
                    </td>
                    <td>
                      {editPost && editPost._id === post._id ? (
                        <input
                          type="text"
                          value={editPost.image ?? ''}
                          className="form-control"
                          onChange={(e) => setEditPost({ ...editPost, image: e.target.value })}
                        />
                      ) : (
                        <img src={post.image} alt={post.title} style={{ width: '50px', height: '50px' }} />
                      )}
                    </td>
                    <td>
                      {editPost && editPost._id === post._id ? (
                        <button className="btn btn-primary" onClick={ handleEdit}>Lưu</button>
                      ) : (
                        <button className="btn btn-warning" onClick={() => setEditPost(post)}>Sửa</button>
                      )}
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={() => handleDelete(post._id)}>Xóa</button>
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

export default AdminBaiViet;