import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';  // Nhập AuthContext
import { CartContext } from "../context/CartContext";
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
                        try {
                            const updateResponse = await axios.put(`http://localhost:5000/api/sach/${item.product._id}/update-inventory`, {
                                quantity: item.quantity,
                            });
                            if (updateResponse.status !== 200) {
                                console.error(`Failed to update inventory for product ${item.product._id}`);
                            }
                        } catch (error) {
                            console.error(`Error updating inventory for product ${item.product._id}:`, error);
                        }
                    })
                );

                // Clear cart after checkout
                // (Không cần gọi hàm clearCartAfterCheckout nữa)

                navigate('/paymentsuccess');  // Chuyển hướng sang trang thành công
            } else {
                alert('Không thể tạo đơn hàng. Vui lòng thử lại!');
            }
        } catch (error) {
            console.error('Lỗi khi tạo đơn hàng:', error);
            alert('Có lỗi xảy ra khi tạo đơn hàng. Vui lòng thử lại.');
        }
    };

    const isFormValid = formData.name && formData.phone && formData.address && formData.city && formData.district && formData.ward;

    return (
        <div className="container">
            <Header/>

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
                                        <td>{item.product.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>Giỏ hàng của bạn đang trống.</p>
                    )}
                </div>

                {isFormValid ? (
                    <button type="submit" className="checkout-button">Xác nhận thanh toán</button>
                ) : (
                    <p className="warning-message">Vui lòng điền đầy đủ thông tin.</p>
                )}
            </form>
        </div>
    );
}

export default Checkout;
