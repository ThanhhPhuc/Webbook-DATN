const jwt = require('jsonwebtoken');
const SECRET_KEY = 'bimat_cuaphuc';

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;

        // Kiểm tra quyền của người dùng, chỉ cho phép admin thực hiện thao tác
        if (!req.user.permissions.includes('admin')) {
            return res.status(403).json({ message: 'Access denied. Admin rights required.' });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token is invalid or expired' });
    }
};

module.exports = authMiddleware;
