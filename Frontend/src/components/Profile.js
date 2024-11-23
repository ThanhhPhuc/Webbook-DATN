import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/AddBooks.css";
import Header from './Header';

const Profile = () => {
    const { user, setUser  } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            setUsername(user.username || '');
            setEmail(user.email || '');
            setPhone(user.dienthoai || '');
            setAddress(user.diachi || '');
        }
    }, [user]);

    useEffect(() => {
        if (user && user._id) {
            const fetchOrders = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/api/order/user/${user._id}`, {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    });
                    setOrders(response.data);
                } catch (error) {
                    console.error('Error fetching orders:', error);
                    setMessage('Có lỗi xảy ra khi lấy đơn hàng.');
                }
            };

            fetchOrders();
        }
    }, [user]);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://localhost:5000/api/auth/update-profile', {
                userId: user._id,
                username,
                email,
                phone,
                address
            }, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            setUser (response.data.user);
            setMessage('Cập nhật thông tin thành công!');
        } catch (error) {
            setMessage('Có lỗi xảy ra trong quá trình cập nhật.');
            console.error('Error updating profile:', error.response ? error.response.data : error);
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setMessage('Mật khẩu mới và xác nhận mật khẩu không khớp.');
            return;
        }

        try {
            const response = await axios.put('http://localhost:5000/api/auth/change-password', {
                userId: user._id,
                currentPassword,
                newPassword
            }, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });

            setMessage('Cập nhật mật khẩu thành công!');
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error('Error changing password:', error.response ? error.response.data : error);
            setMessage('Có lỗi xảy ra trong quá trình cập nhật mật khẩu.');
        }
    };

    const handleDeleteAccount = async () => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa tài khoản không?");
        if (confirmDelete) {
            try {
                const response = await axios.delete(`http://localhost:5000/api/auth/delete-account`, {
                    data: { userId: user._id }, // Gửi userId trong data
                    headers: {
                        Authorization: `Bearer ${user.token}` // Gửi token nếu cần
                    }
                });
                setMessage('Tài khoản đã được xóa thành công!');
                setUser (null); // Đặt user về null để đăng xuất
            } catch (error) {
                console.error('Error deleting account:', error.response ? error.response.data : error);
                setMessage('Có lỗi xảy ra trong quá trình xóa tài khoản.');
            }
        }
    };

    if (!user) {
        return <div>Vui lòng đăng nhập để xem thông tin tài khoản.</div>;
    }

    return (
        <div>
            <Header />
            <div className="my-account-section section pt-lg-20 pt-md-70 pt-sm-60 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
                <div className="container">
                    <h1 className="myAccount-title">Tài khoản của tôi</h1>
                    {message && <div className="alert alert-info">{message}</div>}
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-lg-3 col-12 mb-4">
                                    <div className="myaccount-tab-menu nav" role="tablist">
                                        <a href="#account-info" data-toggle="tab"><i className="fa fa-user" /> Tài khoản Chi tiết</a>
                                        <a href="#change-password" data-toggle="tab"><i className="fa fa-lock" /> Thay đổi mật khẩu</a>
                                        <a href="#orders" data-toggle="tab"><i className="fa fa-cart-arrow-down" /> Đặt hàng</a>
                                        <a href="/"  onClick={() => setUser  (null)}><i className="bi bi-box-arrow-right" /> Đăng xuất</a>
                                        <a href="#" onClick={handleDeleteAccount}><i className="fa fa-trash" /> Xóa tài khoản</a> 
                                    </div>
                                </div>
                                <div className="col-lg-9 col-12">
                                    <div className="tab-content bg-white bdr-10 p-3" id="myaccountContent">
                                        <div className="tab-pane fade show active" id="account-info" role="tabpanel">
                                            <div className="myaccount-content">
                                                <h3>Chi tiết tài khoản</h3>
                                                <div className="account-details-form">
                                                    <form onSubmit={handleUpdateProfile}>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <input id="first-name" placeholder="Tên của bạn" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <input id="phone" placeholder="Số điện thoại" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <input id="address" placeholder="Địa chỉ" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                                                            </div>
                                                            <div className="col-12 mb-30">
                                                                <input id="email" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                            </div>
                                                            <div className="col-12">
                                                                <button className="save-change-btn" type="submit">Lưu thông tin</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="change-password" role="tabpanel">
                                            <div className="myaccount-content">
                                                <h3>Thay đổi mật khẩu</h3>
                                                <div className="account-details-form">
                                                    <form onSubmit={handleChangePassword}>
                                                        <div className="row">
                                                            <div className="col-12 mb-30">
                                                                <input id="current-pwd" placeholder="Mật khẩu cũ" type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <input id="new-pwd" placeholder="Mật khẩu mới" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <input id="confirm-pwd" placeholder="Xác nhận mật khẩu" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                                            </div>
                                                            <div className="col-12">
                                                                <button className="save-change-btn" type="submit ">Lưu mật khẩu</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="orders" role="tabpanel">
                                            <div className="myaccount-content">
                                                <h3>Đặt hàng</h3>
                                                <div className="myaccount-table table-responsive text-center">
                                                    <table className="table table-bordered">
                                                        <thead className="thead-light">
                                                            <tr>
                                                                <th>STT</th>
                                                                <th>Mã Đơn Hàng</th>
                                                                <th>Ngày Đặt</th>
                                                                <th>Trạng Thái</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {orders.map((order, index) => (
                                                                <tr key={order._id}>
                                                                    <td>{index + 1}</td>
                                                                    <td>
                                                                        <Link to={`/profile/order/${order._id}`}>{order._id}</Link>
                                                                    </td>
                                                                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                                                                    <td>{order.status}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;