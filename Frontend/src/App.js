import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Home from './components/Home';
import Register from './components/Register';
import Search from './components/Search';
import AddBook from './components/AddBook';
import DeleteBook from './components/DeleteBook';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
// import EditBook from './components/EditBook';
import Cart from './components/Cart';


function App() {
  return (
    
    <AuthProvider>
             <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sach/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add" element={<AddBook />} />
        {/* <Route path="/edit/:id" element={<EditBook />} /> */}
        <Route path="/delete/:id" element={<DeleteBook />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
               </CartProvider>
        </AuthProvider>
  );
}

export default App;
{/* // import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import { CartProvider } from './context/CartContext';
// import Register from './components/Register';
// import Login from './components/Login';
// import ProductList from './components/ProductList';
// import ProductDetail from './components/ProductDetail';
// import Cart from './components/Cart';
// import Home from './components/Home';
// const App = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <Router>
                    <Routes>
                    <Route path="/home" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/products" element={<ProductList />} />
                        <Route path="/products/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </CartProvider>
        </AuthProvider>
    );
};

export default App; */}

