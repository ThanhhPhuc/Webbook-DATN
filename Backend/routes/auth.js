const express = require('express');
const bcrypt = require('bcryptjs'); // Sử dụng bcryptjs
const jwt = require('jsonwebtoken');
const Khachhang = require('../models/Khachhang');
const authMiddleware = require('../middleware/auth');
const router = express.Router();
const SECRET_KEY = 'bimat_cuaphuc'; // Đảm bảo SECRET_KEY nhất quán

// Đăng ký
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

        // Gửi token và permissions về client
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
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.permissions = ['admin'];
        await user.save();
        res.json({ message: 'Admin privileges granted' });
    } catch (error) {
        res.status(500).json({ message: 'Error granting admin privileges', error });
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

        // Tạo tài khoản admin mới với mật khẩu chưa mã hóa
        const adminUser = new Khachhang({
            username: 'admin',
            password: 'matkhaucuaphuc', // Không mã hóa thủ công ở đây
            email: 'admin@gmail.com',
            diachi: 'công viên phần mềm quang trung',
            dienthoai: '123456789',
            permissions: ['admin'],
        });

        await adminUser.save(); // Hook sẽ tự động mã hóa mật khẩu

        res.status(201).json({ message: 'Tài khoản admin đã được tạo thành công!' });
    } catch (error) {
        res.status(500).json({ message: 'Đã có lỗi xảy ra khi tạo tài khoản admin', error });
    }
});

module.exports = router;

