import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom'; // Thêm Link từ react-router-dom

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [permissions, setPermissions] = useState([]);
    const { register } = useContext(AuthContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        await register({ username, password, email, address, phone, permissions });
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <React.Fragment>
            <header>
            <div className="header-bottom skewBg" data-header>
                <div className="container">
                    <Link to="/" className="logo">BooksP</Link> {/* Link được định nghĩa */}
                    <nav className="navbar" data-navbar>
                        <ul className="navbar-list">
                            <li className="navbar-item">
                                <a href="/" className="navbar-link skewBg" data-nav-link>Trang chủ</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#live" className="navbar-link skewBg" data-nav-link>Sự kiện</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#features" className="navbar-link skewBg" data-nav-link>Nổi bật</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#shop" className="navbar-link skewBg" data-nav-link>Sản phẩm</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#blog" className="navbar-link skewBg" data-nav-link>Tin tức</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#" className="navbar-link skewBg" data-nav-link>Liên hệ</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-actions">
                        <button className="cart-btn" aria-label="cart">
                            <ion-icon name="cart" />
                            <span className="cart-badge">0</span>
                        </button>
                        <button onClick={handleLoginClick} className="search-btn">
                            <ion-icon name="person-circle-outline" />
                        </button>
                    </div>
                </div>
            </div>
</header>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title text-center">Register</h2>
                                <form onSubmit={handleRegister}>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input
                                            type="text"
                                            id="username"
                                            className="form-control"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Username"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <input
                                            type="text"
                                            id="address"
                                            className="form-control"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            placeholder="Address"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input
                                            type="text"
                                            id="phone"
                                            className="form-control"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="Phone"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="permissions" className="form-label">Permissions</label>
                                        <input
                                            type="text"
                                            id="permissions"
                                            className="form-control"
                                            value={permissions}
                                            onChange={(e) => setPermissions(e.target.value.split(','))} // Nhập quyền cách nhau bởi dấu phẩy
                                            placeholder="CAN_CREATE_BOOK,CAN_EDIT_BOOK,..."
                                        />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button type="submit" className="btn btn-primary">Đăng ký</button>
                                        <button type="button" className="btn btn-secondary" onClick={handleLoginClick}>Đăng nhập</button>
                                        <button type="button" className="btn btn-secondary" onClick={handleBackClick}>Quay lại</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Register;
