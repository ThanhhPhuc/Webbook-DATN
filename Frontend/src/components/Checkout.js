import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';  // Nhập AuthContext
import axios from 'axios';
import './Checkout.css';
import Header from './Header';


function Checkout() {
    const { user } = useContext(AuthContext);  // Lấy thông tin người dùng từ AuthContext
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        district: '',
        ward: '',
        address: '',
    });

    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [locations, setLocations] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [cart, setCart] = useState(location.state?.cart || {});  // Lấy dữ liệu giỏ hàng từ state

    // Cập nhật formData khi có thông tin người dùng
    useEffect(() => {
        if (user) {
            setFormData({
                ...formData,
                name: user.username || '',
                email: user.email || '',
                phone: user.dienthoai || '',
                address: user.diachi || '',
            });
            console.log('Form data từ user:', formData); // Kiểm tra thông tin người dùng
        }
    }, [user]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');
                setLocations(response.data);
            } catch (error) {
                console.error('Error fetching location data:', error);
            }
        };
        fetchLocations();
    }, []);

    const handleLocationChange = (e) => {
        const selectedLocation = locations.find(location => location.Name === e.target.value);
        if (selectedLocation) {
            setDistricts(selectedLocation.Districts);
            setWards([]);  // Reset wards when changing districts
        }
        setFormData({ ...formData, city: e.target.value });
    };

    const handleDistrictChange = (e) => {
        const selectedDistrict = districts.find(district => district.Name === e.target.value);
        if (selectedDistrict) {
            setWards(selectedDistrict.Wards);
        }
        setFormData({ ...formData, district: e.target.value });
    };

    const handleWardChange = (e) => {
        setFormData({ ...formData, ward: e.target.value });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Ngăn chặn việc gửi form mặc định
       
        if (!user) {
            alert('Bạn cần phải đăng nhập để tiếp tục thanh toán.');
            navigate('/login'); // Chuyển hướng đến trang đăng nhập
            return;
        }
        const orderData = {
            userId: user._id,  // Id người dùng từ context AuthContext
            userName: formData.name,  // Tên người dùng
            userEmail: formData.email,  // Email người dùng
            userPhone: formData.phone,  // Số điện thoại người dùng
            orderDetails: cart.items.map(item => ({
                productId: item.product._id,
                quantity: item.quantity,
                price: item.product.price,
            })),
            paymentMethod,
            totalPrice: cart.totalPrice,
            shippingInfo: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                city: formData.city,
                district: formData.district,
                ward: formData.ward,
            },
        };

        console.log('Dữ liệu đơn hàng:', orderData); // Kiểm tra dữ liệu đơn hàng

        try {
            const response = await axios.post('http://localhost:5000/api/order/create', orderData);
            
            if (response.status === 201) {
                console.log('Đơn hàng đã được tạo:', response.data);

                 // Trừ số lượng tồn kho khi thanh toán thành công
                 await Promise.all(
                    cart.items.map(async (item) => {
                        // await axios.put(`http://localhost:5000/api/sach/${item.product._id}/update-inventory`, {
                        //     quantity: item.quantity,
                        await axios.put(`http://localhost:5000/api/sach/${item.product._id}/update-inventory`, {
                            quantity: item.quantity,
                        });
                        
                    })
                );

                navigate('/paymentsuccess');  // Chuyển hướng sang trang thành công
            }
        } catch (error) {
            console.error('Lỗi khi tạo đơn hàng:', error);
            alert('Có lỗi xảy ra khi tạo đơn hàng. Vui lòng thử lại.');
        }
    };
    
    const isFormValid = formData.name && formData.phone && formData.address && formData.city && formData.district && formData.ward;
    return (
        <div className="">
      <Header/>   
  <div className="container">
       

            <h1>Thanh toán</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tên</label>
                    <input type="text" name="name" value={formData.name} required onChange={handleChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Số điện thoại</label>
                    <input type="tel" name="phone" value={formData.phone} required onChange={handleChange} />
                </div>
                <div>
                    <label>Địa chỉ</label>
                    <input type="text" name="address" value={formData.address} required onChange={handleChange} />
                </div>
                <div>
                    <label>Tỉnh/Thành phố</label>
                    <select name="city" value={formData.city} onChange={handleLocationChange} required>
                        <option value="">Chọn tỉnh/thành phố</option>
                        {locations.map(location => (
                            <option key={location.Id} value={location.Name}>{location.Name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Quận/Huyện</label>
                    <select name="district" value={formData.district} onChange={handleDistrictChange} required>
                        <option value="">Chọn quận/huyện</option>
                        {districts.map(district => (
                            <option key={district.Id} value={district.Name}>{district.Name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Xã/Phường</label>
                    <select name="ward" value={formData.ward} onChange={handleWardChange} required>
                        <option value="">Chọn xã/phường</option>
                        {wards.map(ward => (
                            <option key={ward.Id} value={ward.Name}>{ward.Name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Phương thức thanh toán</label>
                    <div>
                        <label>
                            <input 
                                type="radio" 
                                value="cash" 
                                checked={paymentMethod === 'cash'} 
                                onChange={handlePaymentMethodChange} 
                            /> 
                            Tiền mặt
                        </label>
                    </div>
                    <div>
                        <label>
                            <input 
                                type="radio" 
                                value="creditCard" 
                                checked={paymentMethod === 'creditCard'} 
                                onChange={handlePaymentMethodChange} 
                            /> 
                            Thẻ tín dụng
                        </label>
                    </div>
                </div>

                <div>
                    <h2>Thông tin giỏ hàng</h2>
                    {cart.items && cart.items.length > 0 ? (
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Hình ảnh</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Số lượng</th>
                                    <th>Giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.items.map(item => (
                                    <tr key={item._id}>
                                        <td><img src={item.product.image} alt={item.product.title} width="80" height="80" /></td>
                                        <td>{item.product.title}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.product.price} VND</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>Giỏ hàng của bạn trống.</p>
                    )}
                    <h3>Tổng cộng: {cart.totalPrice} VND</h3>
                </div>

                {isFormValid ? (
                    <button type="submit" className="checkout-button">Xác nhận thanh toán</button>
                ) : (
                    <p className="warning-message">Vui lòng điền đầy đủ thông tin.</p>
                )}
            </form>

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
        </div>
    );
}

export default Checkout;
