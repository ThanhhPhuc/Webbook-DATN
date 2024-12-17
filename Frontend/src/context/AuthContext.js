import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: null,
        isAuthenticated: false,
        permissions: [],
        userId: null, // thêm userId vào authState
    });
    const navigate = useNavigate();

    const setUser = (updatedUser) => {
        setAuthState((prevState) => ({
            ...prevState,
            userId: updatedUser._id, // cập nhật userId khi người dùng đăng nhập
            user: updatedUser,
        }));
    };

    const login = async (email, password) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            setAuthState({
                token: res.data.token,
                isAuthenticated: true,
                permissions: res.data.user.permissions || [],
                userId: res.data.user._id, // cập nhật userId khi đăng nhập
                user: res.data.user,
            });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.user._id); // lưu userId vào localStorage
            alert("Đăng nhập thành công!");
            navigate(res.data.user.permissions.includes('admin') ? '/admin' : '/');
        } catch (error) {
            alert("Đăng nhập không thành công! " + (error.response?.data?.message || 'Có lỗi xảy ra.'));
        }
    };

    const register = async (email, password) => {
        try {
            if (!email || !password) throw new Error('Email và mật khẩu không được để trống.');
            await axios.post('http://localhost:5000/api/auth/register', { email, password });
            alert("Đăng ký thành công!");
        } catch (error) {
            alert("Đăng ký không thành công! " + (error.response?.data?.message || 'Có lỗi xảy ra.'));
        }
    };

    const sendOTP = async (email) => {
        try {
            await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
            alert("OTP đã được gửi đến email của bạn.");
        } catch (error) {
            console.error('Error in sending OTP:', error.response ? error.response.data : error.message);
        }
    };
    

    const verifyOTP = async (email, otp) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/verify-otp', { email, otp });
            alert("OTP hợp lệ, bạn có thể đặt lại mật khẩu.");
            return res.data; // trả về true nếu OTP hợp lệ
        } catch (error) {
            alert("Xác thực OTP không thành công! " + (error.response?.data?.message || 'Có lỗi xảy ra.'));
            return false;
        }
    };

    const resetPassword = async (email, otp, newPassword) => {
        try {
            await axios.post('http://localhost:5000/api/auth/reset-password', { email, otp, newPassword });
            alert("Mật khẩu đã được đặt lại thành công!");
            navigate('/login'); // điều hướng về trang đăng nhập
        } catch (error) {
            alert("Đặt lại mật khẩu không thành công! " + (error.response?.data?.message || 'Có lỗi xảy ra.'));
        }
    };

    const logout = () => {
        setAuthState({
            token: null,
            isAuthenticated: false,
            permissions: [],
            userId: null,
        });
        localStorage.removeItem('token');
        localStorage.removeItem('userId'); // xóa userId khỏi localStorage khi đăng xuất
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{
            ...authState,
            setUser,
            login,
            register,
            logout,
            sendOTP,
            verifyOTP,
            resetPassword
        }}>
            {children}
        </AuthContext.Provider>
    );
};
