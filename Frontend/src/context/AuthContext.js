import React, { createContext, useState } from 'react';
import axios from 'axios';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: null,
        isAuthenticated: false,
    });

    const login = async (username, password) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            setAuthState({
                token: res.data.token,
                isAuthenticated: true,
            });
            localStorage.setItem('token', res.data.token);
            prompt("Đăng nhập thành công!");

  
        } catch (error) {
            console.error('Login failed', error.response.data);
        }
    };

    const register = async (username, password) => {
        try {
            await axios.post('http://localhost:5000/api/auth/register', { username, password });
            prompt("Đăng ký thành công!")
        } catch (error) {
            console.error('Registration failed', error.response.data);
        }
    };

    const logout = () => {
        setAuthState({
            token: null,
            isAuthenticated: false,
        });
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
