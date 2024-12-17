import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Home from './components/Home';
import Register from './components/Register';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import BookList from './components/BookList';
import Cart from './components/Cart';
import Admin from './components/Admin';
import Admintheloai from './components/Admintheloai';
import AdminNXB from './components/AdminNXB';
import Admintacgia from './components/Admintacgia';
import Adminsach from './components/Adminsach';
import SearchResult from './components/SearchResult';
import Profile from './components/Profile';
import PasswordRecovery from './components/PasswordRecovery';
import AdminComment from './components/AdminComment';
import i18n from './components/i18n';
import Category from './components/Category';
import Checkout from './components/Checkout';
import PaymentSuccess from './components/PaymentSuccess';
import OrderTable from './components/OrderTable';
import OrderDetail from './components/OrderDetail';
import ProfileOrderDetail from './components/ProfileOrderDetail';
import AdminBaiViet from './components/AdminBaiViet';
import PostDetail from './components/PostDetail';
import OrderList from './components/OrderList';
import ProtectedRoute from './context/ProtectedRoute';
function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Routes>      
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<BookList />} />
            <Route path="/sach/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<ProtectedRoute />}>
          <Route path="" element={<Admin />} />
        </Route>
            <Route path="/admintheloai" element={<Admintheloai />} />
            <Route path="/adminnxb" element={<AdminNXB />} />
            <Route path="/admintacgia" element={<Admintacgia />} />
            <Route path="/adminsach" element={<Adminsach />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quenmatkhau" element={<PasswordRecovery />} />
            <Route path="/admincomment" element={<AdminComment />} />
            <Route path="/theloai/:categoryId" element={<Category />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/adminorder" element={<OrderTable />} />
            <Route path="/order/:orderId" element={<OrderDetail />} /> {/* Cấu hình đúng route cho OrderDetail */}
            <Route path="/profile/order/:orderId" element={<ProfileOrderDetail />} />
            <Route path="/adminbaiviet" element={<AdminBaiViet />} />
            <Route path="/baiviet/:id" element={<PostDetail />} />
            <Route path="/orderlist" element={<OrderList />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
