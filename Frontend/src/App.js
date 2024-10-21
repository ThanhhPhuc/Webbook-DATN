import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Home from './components/Home';
import Register from './components/Register';
import Search from './components/Search';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import BookList from './components/BookList';
import Cart from './components/Cart';
import Admin from './components/Admin';
import ProductManagement from './components/ProductManagement';
import Admintheloai from './components/Admintheloai';
import AdminNXB from './components/AdminNXB';
import Admintacgia from './components/Admintacgia';
import Adminsach from './components/Adminsach';

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
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
            <Route path='/book-manager' element={<ProductManagement/>}/>
            <Route path='/admintheloai' element={<Admintheloai/>}/>
            <Route path='/adminnxb' element={<AdminNXB/>}/>
            <Route path='/admintacgia' element={<Admintacgia/>}/>
            <Route path='/adminsach' element={<Adminsach/>}/>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
