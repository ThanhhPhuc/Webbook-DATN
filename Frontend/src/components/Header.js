import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const { isAuthenticated, user, logout } = useContext(AuthContext);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchQuery) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="bg-danger py-3">
        <div className="container d-flex justify-content-between align-items-center">
            <Link to="/" className="navbar-brand text-white fw-bold fs-3">{t('header.welcome')}</Link>
            {/* <Link to="/" className="navbar-brand">
  <img src="/../assets/images/logochung.webp" alt="Libworld Logo" className="img-fluid" style={{ height: 'auto', width:'100px' }} />
</Link> */}
            <form className="d-flex flex-grow-1 mx-3" onSubmit={handleSearchSubmit}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder={t('header.search_placeholder')}
                    value={searchQuery}
                    onChange={handleSearchChange}
                    aria-label="Search"
                />
                <button className="btn btn-warning" type="submit">{t('header.search_button')}</button>
            </form>
            <div className="d-flex align-items-center">
                {isAuthenticated ? (
                    <div className="dropdown">
                        <button className="btn btn-outline-light dropdown-toggle me-4" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={user.avatar || "/../assets/images/iconuser.jpg"} alt="Tài khoản" style={{ width: 20, height: 'auto', borderRadius: '50%' }} />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                            <li className="dropdown-item text-center"><b>{user.username}</b></li>
                            <li><Link className="dropdown-item" to="/profile">{t('header.profile')}</Link></li>
                            <li><Link className="dropdown-item" to="#orders">{t('header.orders')}</Link></li>
                            <li><button className="dropdown-item" onClick={logout}>{t('header.logout')}</button></li>
                        </ul>
                    </div>
                ) : (
                    <div className="dropdown">
                        <button className="btn btn-outline-light dropdown-toggle me-4" type="button" id="accountDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/../assets/images/user.png" alt="Tài khoản" style={{ width: 20, height: 'auto' }} />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="accountDropdown">
                            <li><Link className="dropdown-item" to="/login">{t('header.login')}</Link></li>
                            <li><Link className="dropdown-item" to="/register">{t('header.register')}</Link></li>
                        </ul>
                    </div>
                )}
                <Link to="/cart">
                    <div className="header-cart me-4">
                        <button className="btn btn-outline-light">
                            <img src="/../assets/images/cart.png" alt={t('header.cart')} style={{ width: 20, height: 'auto' }} />
                        </button>
                    </div>
                </Link>
                <div className="header-language dropdown">
                    <button className="btn btn-outline-light dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        {i18n.language === 'vi' ? "Tiếng Việt" : "English"}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                        <li><button className="dropdown-item" onClick={() => changeLanguage('en')}><img src="/../assets/images/iconanh.png" alt="VN" style={{ width: 20, height: 'auto' }} /> English</button></li>
                        <li><button className="dropdown-item" onClick={() => changeLanguage('vi')}><img src="/../assets/images/iconvn.webp" alt="EN" style={{ width: 20, height: 'auto' }} />Tiếng Việt</button></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    );
};

export default Header;
