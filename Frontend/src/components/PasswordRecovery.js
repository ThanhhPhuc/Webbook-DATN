import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import "../styles/quenmatkhau.css";
import Header from './Header';
const PasswordRecovery = () => {
    const { sendOTP, verifyOTP, resetPassword } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [currentStage, setCurrentStage] = useState('recovery');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Loading state for OTP

    const handleSendOTP = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading
        try {
            await sendOTP(email);
            setMessage('OTP đã được gửi đến email của bạn.');
            setIsError(false);
            setCurrentStage('verify');
        } catch (error) {
            setMessage('Gửi OTP không thành công. Vui lòng kiểm tra lại.');
            setIsError(true);
        } finally {
            setIsLoading(false); // End loading
        }
    };

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        try {
            const isVerified = await verifyOTP(email, otp);
            if (isVerified) {
                setCurrentStage('reset');
                setMessage('Xác thực OTP thành công. Vui lòng đặt lại mật khẩu.');
                setIsError(false);
            } else {
                setMessage('Mã OTP không hợp lệ. Vui lòng thử lại.');
                setIsError(true);
            }
        } catch (error) {
            setMessage('Xác thực OTP không thành công. Vui lòng thử lại.');
            setIsError(true);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await resetPassword(email, otp, newPassword);
            setMessage('Mật khẩu đã được đặt lại thành công.');
            setIsError(false);
            // Optionally redirect or clear the form
        } catch (error) {
            setMessage('Đặt lại mật khẩu không thành công. Vui lòng thử lại.');
            setIsError(true);
        }
    };

    return (
        <div>
       <Header/>
       <br/>
        <div className="fhs_login_form_content"> 
            <div className="youama-login-window">
                <div>
                    <ul id="popup-login-tab_list" className="popup-login-tab">
                        <li className={`popup-login-tab-item ${currentStage === 'recovery' ? 'active' : ''}`}>
                            <button onClick={() => setCurrentStage('recovery')}>Khôi phục mật khẩu</button>
                        </li>
                    </ul>
                </div>

                {/* Notification Message */}
                {message && (
                    <div className={`notification ${isError ? 'error' : 'success'}`}>
                        {message}
                    </div>
                )}

                {/* Recovery Form */}
                {currentStage === 'recovery' && (
                    <div className="popup-recovery-content" style={{ display: 'block' }}>
                        <form onSubmit={handleSendOTP}>
                            <div className="fhs-input-box fhs-input-send">
                                <label>Email</label>
                                <div className="fhs-input-group">
                                    <input
                                        className="fhs-textbox"
                                        type="text"
                                        placeholder="Nhập số điện thoại hoặc email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="fhs-input-alert"></div>
                            </div>
                            <div className="fhs-btn-box">
                                <button type="submit" className="fhs-btn-recovery text-center" disabled={isLoading}>
                                    {isLoading ? 'Đang gửi...' : 'Gửi mã OTP'}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Verify OTP Form */}
                {currentStage === 'verify' && (
                    <div className="popup-login-content">
                        <form onSubmit={handleVerifyOTP}>
                            <div className="fhs-input-box">
                                <label>Mã xác nhận OTP</label>
                                <div className="fhs-input-group">
                                    <input
                                        className="fhs-textbox"
                                        type="text"
                                        placeholder="6 ký tự"
                                        value={otp}
                                        onChange={(e) => setOTP(e.target.value)}
                                        required
                                        autoComplete="off"
                                    />
                                    <span className="fhs-input-icon fhs-textbox-alert"></span>
                                </div>
                                <div className="fhs-input-alert"></div>
                            </div>
                            <div className="fhs-btn-box">
                                <button type="submit" className="fhs-btn-recovery"><span>Xác nhận OTP</span></button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Reset Password Form */}
                {currentStage === 'reset' && (
                    <div className="popup-login-content">
                        <form onSubmit={handleResetPassword}>
                            <div className="fhs-input-box">
                                <label>Mật khẩu mới</label>
                                <div className="fhs-input-group">
                                    <input
                                        className="fhs-textbox"
                                        type="password"
                                        placeholder="Nhập mật khẩu mới"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                        autoComplete="off"
                                    />
                                   
                                </div>
                                <div className="fhs-input-alert"></div>
                            </div>
                            <div className="fhs-btn-box">
                                <button type="submit" className="fhs-btn-recovery"><span>Đặt lại mật khẩu</span></button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
        <br/>
        <footer className="footer-section" style={{ backgroundColor: "#f8f9fa", padding: "40px 0" }}>
  <div className="row mb-4">
  <div className="col-md-12 text-center" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px' }}>
    <form className="d-flex justify-content-center align-items-center">
      <h4 className="mb-0 me-3" style={{ color: '#FF7F00' }}>Đăng ký nhận bản tin</h4>
      <input
        type="email"
        className="form-control me-2"
        placeholder="Nhập địa chỉ email của bạn"
        style={{ borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
      />
      <button className="btn" style={{ backgroundColor: '#FF7F00', color: '#fff', borderRadius: '5px' }} type="submit">
        Đăng ký
      </button>
    </form>
  </div>
</div>
<div className="container">
        <div className="row">
        <div className="col-lg-5 col-md-7 mb-4">
    <div className="footer-logo color-black text-dark">
        <h1><a href="/" className="text-dark">Libworld.io.vn</a></h1>
        <p>Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM</p>
        <p>Công Ty Cổ Phần Phát Hành Sách TP HCM - LIBWORLD</p>
        <p>60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam</p>
        <p>Libworld.io.vn nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả hệ thống Libworld trên toàn quốc.</p>
        <div className="footer-social d-flex">
    <a href="#" className="me-3">
        <i className="bi bi-facebook"></i>
    </a>
    <a href="#" className="me-3">
        <i className="bi bi-twitter"></i>
    </a>
    <a href="#" className="me-3">
        <i className="bi bi-instagram"></i>
    </a>
    <a href="#">
        <i className="bi bi-youtube"></i>
    </a>
</div>

    </div>
</div>
            <div className="col-lg-2 col-md-7 mb-4">
                <h4 className="title">Dịch Vụ</h4>
                <ul className="list-unstyled">
                    <li><a href="#">Điều khoản sử dụng</a></li>
                    <li><a href="#">Chính sách bảo mật thông tin cá nhân</a></li>
                    <li><a href="#">Chính sách bảo mật thanh toán</a></li>
                    <li><a href="#">Giới thiệu Libworld</a></li>
                    <li><a href="#">Hệ thống trung tâm - nhà sách</a></li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-7 mb-4">
                <h4 className="title">Hỗ Trợ</h4>
                <ul className="list-unstyled">
                    <li><a href="#">Chính sách đổi - trả - hoàn tiền</a></li>
                    <li><a href="#">Chính sách bảo hành - bồi hoàn</a></li>
                    <li><a href="#">Chính sách vận chuyển</a></li>
                    <li><a href="#">Chính sách khách sỉ</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-9 mb-4 text-dark">
                <h4 className="title">Liên Hệ</h4>
                <p>Địa chỉ: 60-62 Lê Lợi, Q.1, TP. HCM</p>
                <p>Email: cs@libworld.io.vn</p>
                <p>Điện thoại: 1900 636 467</p>
            </div>
        </div>

        <div className="row align-items-center">
            <div className="col-md-6 mb-3">
                <div className="d-flex justify-content-start">
                    <a href="#" className="me-3"><img src="assets/images/appstore.jpg" style={{ height:'50px', width: '150px' }} alt="App Store" /></a>
                    <a href="#"><img src="assets/images/ggplay.png" style={{ height:'50px', width: '150px' }} alt="Google Play" /></a>
                </div>
            </div>
        </div>



<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4544374621546!2d106.62420897412295!3d10.852999257778526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1728542762299!5m2!1svi!2s" width={'100%'} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        
        <div className="row mt-4" style={{ display: 'flex', alignItems: 'center' }}>
    <div className="col-md-12 text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <hr style={{ flex: 1, borderTop: '1px solid #aaa', margin: '0 10px' }} />
        <p className="mb-0" style={{ color: '#aaa', whiteSpace: 'nowrap' }}>
            Copyright © 2024 Nhà sách Libworld.io.vn All rights reserved
        </p>
        <hr style={{ flex: 1, borderTop: '1px solid #aaa', margin: '0 10px' }} />
    </div>
</div>
    </div>
</footer>
        </div>
        
    );
};

export default PasswordRecovery;
