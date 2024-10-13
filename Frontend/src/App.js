import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Đảm bảo rằng đường dẫn chính xác
import { CartProvider } from './context/CartContext';
import Home from './components/Home';
import Register from './components/Register';
import Search from './components/Search';
import AddBook from './components/AddBook';
import DeleteBook from './components/DeleteBook';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import BookList from './components/BookList';
import Cart from './components/Cart';
import Admin from './components/Admin';

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
            <Route path="/add" element={<AddBook />} />
            {/* <Route path="/edit/:id" element={<EditBook />} /> */}
            <Route path="/delete/:id" element={<DeleteBook />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
