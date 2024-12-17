const jwt = require('jsonwebtoken');
const SECRET_KEY = '123'; // Đảm bảo sử dụng chung SECRET_KEY

// Middleware xác thực JWT token
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Không có token, từ chối truy cập' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;

        console.log('Authenticated user:', req.user);

        if (!req.user.permissions.includes('admin')) {
            return res.status(403).json({ message: 'Quyền admin yêu cầu' });
        }

        next();
    } catch (error) {
        console.error('Error in authMiddleware:', error);
        return res.status(401).json({ message: 'Token không hợp lệ hoặc đã hết hạn' });
    }
};

module.exports = authMiddleware;
