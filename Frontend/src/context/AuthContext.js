import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: null,
        isAuthenticated: false,
        permissions: [],
    });
    const navigate = useNavigate();

    const login = async (email, password) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            
            // Kiểm tra giá trị permissions
            console.log('Permissions:', res.data.user.permissions); // Sửa lại để lấy permissions từ user
    
            setAuthState({
                token: res.data.token,
                isAuthenticated: true,
                permissions: res.data.user.permissions || [], // Cập nhật permissions từ user
            });
            localStorage.setItem('token', res.data.token);
            alert("Đăng nhập thành công!");
    
            // Kiểm tra quyền truy cập
            if (res.data.user.permissions && res.data.user.permissions.includes('admin')) {
                navigate('/admin'); // Điều hướng đến trang admin
            } else {
                navigate('/'); // Điều hướng đến trang chính
            }
        } catch (error) {
            console.error('Login failed', error.response?.data);
            alert("Đăng nhập không thành công! " + (error.response?.data?.message || 'Có lỗi xảy ra.'));
        }
    };

    const register = async (email, password) => {
        try {
            // Kiểm tra xem email và mật khẩu có hợp lệ không
            if (!email || !password) {
                throw new Error('Email và mật khẩu không được để trống.');
            }

            await axios.post('http://localhost:5000/api/auth/register', { email, password });
            alert("Đăng ký thành công!");
        } catch (error) {
            console.error('Đăng ký không thành công', error.response?.data);
            alert("Đăng ký không thành công! " + (error.response?.data?.message || 'Có lỗi xảy ra.'));
        }
    };

    const logout = () => {
        setAuthState({
            token: null,
            isAuthenticated: false,
            permissions: [],
        });
        localStorage.removeItem('token');
        navigate('/login'); // Điều hướng về trang đăng nhập
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
