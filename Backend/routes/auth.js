const express = require('express');
const bcrypt = require('bcryptjs'); // Sử dụng bcryptjs
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Khachhang = require('../models/Khachhang');
const authMiddleware = require('../middleware/auth');
const router = express.Router();
const SECRET_KEY = '123'; // Đảm bảo SECRET_KEY nhất quán

// Đăng ký
router.post('/register', async (req, res) => {
    const { username, password, email, diachi, dienthoai } = req.body;

    try {
        let user = await Khachhang.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Email này đã được sử dụng' });
        }

        user = new Khachhang({
            username,
            password, // Mật khẩu sẽ được mã hóa trong schema
            email,
            diachi,
            dienthoai,
            permissions: ['user'],
        });

        await user.save();
        res.json({ message: 'Đăng ký thành công' });
    } catch (err) {
        res.status(500).json({ message: 'Đã có lỗi xảy ra' });
    }
});

// Hiển thị tất cả người dùng
router.get('/users', async (req, res) => {
    try {
        const users = await Khachhang.find(); // Lấy danh sách người dùng
        res.json(users); // Gửi danh sách người dùng về client
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// Xóa người dùng
router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await Khachhang.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'Người dùng không tồn tại' });
        }
        res.json({ message: 'Người dùng đã được xóa' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Đã có lỗi xảy ra' });
    }
});

// Đăng nhập
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Khachhang.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Email không tồn tại' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Mật khẩu không đúng' });
        }

        // Tạo JWT token
        const token = jwt.sign({ id: user._id, permissions: user.permissions }, SECRET_KEY, { expiresIn: '1h' });

        // Gửi token và thông tin người dùng về client
        return res.status(200).json({ token, user: { ...user._doc, permissions: user.permissions } });
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });
    }
});

// Cấp quyền admin cho user khác
router.put('/grant-admin/:id', authMiddleware, async (req, res) => {
    if (!req.user.permissions.includes('admin')) {
        return res.status(403).json({ message: 'Permission denied' });
    }

    const { id } = req.params;

    // Kiểm tra nếu ID không hợp lệ
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }

    try {
        const user = await Khachhang.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Thêm quyền admin nếu chưa có
        if (!user.permissions.includes('admin')) {
            user.permissions.push('admin');
            await user.save();
        }

        res.json({ message: 'Admin privileges granted', user });
    } catch (error) {
        console.error('Error granting admin privileges:', error);
        res.status(500).json({ message: 'Error granting admin privileges', error });
    }
});

// Thu hồi quyền admin cho user
router.put('/revoke-admin/:userid', authMiddleware, async (req, res) => {
    const { userid } = req.params; // Lấy id từ params

    try {
        // Kiểm tra nếu ID không hợp lệ
        if (!mongoose.Types.ObjectId.isValid(userid)) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }

        const user = await Khachhang.findById(userid);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Kiểm tra xem người dùng có quyền admin không
        if (!user.permissions.includes('admin')) {
            return res.status(400).json({ message: 'User does not have admin privileges' });
        }

        // Xóa quyền admin
        user.permissions = user.permissions.filter(permission => permission !== 'admin');
        await user.save();

        res.json({ message: 'Admin privileges revoked successfully', user });
    } catch (error) {
        console.error('Error revoking admin privileges:', error);
        res.status(500).json({ message: 'An error occurred while revoking admin privileges', error });
    }
});



// Route để tạo tài khoản admin (Chỉ nên dùng khi cần thiết)
router.post('/create-admin', async (req, res) => {
    try {
        // Kiểm tra xem admin đã tồn tại chưa
        const existingAdmin = await Khachhang.findOne({ username: 'admin' });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Tài khoản admin đã tồn tại!' });
        }

        // Tạo tài khoản admin mới
        const adminUser = new Khachhang({
            username: 'admin',
            password: '123', // Không mã hóa thủ công ở đây
            email: 'admin@gmail.com',
            diachi: 'Công viên phần mềm Quang Trung',
            dienthoai: '123456789',
            permissions: ['admin'],
        });

        await adminUser.save();

        res.status(201).json({ message: 'Tài khoản admin đã được tạo thành công!' });
    } catch (error) {
        res.status(500).json({ message: 'Đã có lỗi xảy ra khi tạo tài khoản admin', error });
    }
});

module.exports = router;
