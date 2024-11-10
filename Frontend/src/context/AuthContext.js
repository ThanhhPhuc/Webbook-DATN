import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: null,
        isAuthenticated: false,
        user: null,
    });
    const navigate = useNavigate();

    const setUser = (updatedUser) => {
        setAuthState((prevState) => ({
            ...prevState,
            user: updatedUser,
        }));
    };
    const login = async (email, password) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            setAuthState({
                token: res.data.token,
                isAuthenticated: true,
                user: res.data.user,
            });
            localStorage.setItem('token', res.data.token);
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
        } catch (error) {
            console.error('Error in sending OTP:', error.response ? error.response.data : error.message);
        }
    };
    

    const verifyOTP = async (email, otp) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/verify-otp', { email, otp });
            alert("OTP hợp lệ, bạn có thể đặt lại mật khẩu.");
            return res.data; // Trả về true nếu OTP hợp lệ
        } catch (error) {
            alert("Xác thực OTP không thành công! " + (error.response?.data?.message || 'Có lỗi xảy ra.'));
            return false;
        }
    };

    const resetPassword = async (email, otp, newPassword) => {
        try {
            await axios.post('http://localhost:5000/api/auth/reset-password', { email, otp, newPassword });
            alert("Mật khẩu đã được đặt lại thành công!");
            navigate('/login'); // Điều hướng về trang đăng nhập
        } catch (error) {
            alert("Đặt lại mật khẩu không thành công! " + (error.response?.data?.message || 'Có lỗi xảy ra.'));
        }
    };

    const logout = () => {
        setAuthState({
            token: null,
            isAuthenticated: false,
            user: null,
        });
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ ...authState, setUser,login, register, logout, sendOTP, verifyOTP, resetPassword }}>
            {children}
        </AuthContext.Provider>
    );
};
 