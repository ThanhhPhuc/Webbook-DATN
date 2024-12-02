import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Đường dẫn tới AuthContext

const ProtectedRoute = () => {
  const { isAuthenticated, permissions } = useContext(AuthContext); // Lấy trạng thái xác thực và quyền

  // Kiểm tra xem người dùng có xác thực và có quyền admin hay không
  const isAdmin = permissions.includes('admin');

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" />; // Chuyển hướng đến trang đăng nhập nếu không xác thực hoặc không phải là admin
  }

  return <Outlet />; // Hiển thị các thành phần con nếu đã xác thực
};

export default ProtectedRoute;