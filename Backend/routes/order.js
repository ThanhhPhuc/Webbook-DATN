const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// API để tạo đơn hàng mới
router.post('/create', async (req, res) => {
    const { userId, userName, userEmail, userPhone, orderDetails, paymentMethod, totalPrice, shippingInfo } = req.body;

    try {
        const newOrder = new Order({
            userId,
            userName,
            userEmail,
            userPhone,
            orderDetails,
            paymentMethod,
            totalPrice,
            shippingInfo,  // Lưu shippingInfo vào MongoDB
        });

        // Lưu đơn hàng vào database
        await newOrder.save();

        // Trả về phản hồi khi đơn hàng được tạo thành công
        res.status(201).json({
            message: 'Đơn hàng đã được tạo thành công!',
            order: newOrder,  // Đảm bảo trả về đơn hàng bao gồm shippingInfo
        });
    } catch (error) {
        console.error('Lỗi khi tạo đơn hàng:', error);
        res.status(500).json({
            message: 'Có lỗi xảy ra khi tạo đơn hàng.',
            error: error.message,
        });
    }
});

// Lấy danh sách đơn hàng
// router.get('/', async (req, res) => {
//     console.log('Nhận yêu cầu GET từ frontend');
//     try {
        
//         const orders = await Order.find();  // Lấy tất cả đơn hàng
//         res.status(200).json(orders);  // Trả về danh sách đơn hàng
//     } catch (error) {
//         console.error('Lỗi khi lấy đơn hàng:', error);
//         res.status(500).json({
//             message: 'Có lỗi xảy ra khi lấy danh sách đơn hàng.',
//             error: error.message,
//         });
//     }
// });

// Lấy danh sách đơn hàng
router.get('/', async (req, res) => {
    console.log('Nhận yêu cầu GET từ frontend');  // Xem có nhận được yêu cầu không
    try {
      const orders = await Order.find();  // Lấy tất cả đơn hàng
      res.status(200).json(orders);  // Trả về danh sách đơn hàng
    } catch (error) {
      console.error('Lỗi khi lấy đơn hàng:', error);
      res.status(500).json({
        message: 'Có lỗi xảy ra khi lấy danh sách đơn hàng.',
        error: error.message,
      });
    }
  });

// API để cập nhật trạng thái đơn hàng
router.put('/:orderId/status', async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;

    console.log('Cập nhật trạng thái cho đơn hàng ID:', orderId);
    console.log('Trạng thái mới:', status);

    try {
        // Tìm và cập nhật trạng thái đơn hàng
        const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });

        if (!order) {
            return res.status(404).json({ message: 'Đơn hàng không tồn tại' });
        }

        res.status(200).json(order);
    } catch (error) {
        console.error('Lỗi khi cập nhật trạng thái đơn hàng:', error);
        res.status(500).json({ message: 'Có lỗi xảy ra khi cập nhật trạng thái đơn hàng' });
    }
});

// API lấy chi tiết đơn hàng và populate thông tin sản phẩm từ model 'Sach'

router.get('/:orderId', async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const order = await Order.findById(orderId).populate('orderDetails.productId');  // Dùng populate để lấy thông tin sản phẩm
        
        if (!order) {
            return res.status(404).json({ message: 'Đơn hàng không tồn tại.' });
        }

        res.status(200).json(order);  // Trả về chi tiết đơn hàng
    } catch (error) {
        console.error('Lỗi khi lấy đơn hàng:', error);
        res.status(500).json({ message: 'Lỗi khi lấy đơn hàng.' });
    }
});


// Lấy danh sách đơn hàng của người dùng
router.get('/user/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        // Tìm đơn hàng của người dùng theo userId
        const orders = await Order.find({ userId: userId }); // Giả sử mỗi đơn hàng lưu userId
        if (!orders) {
            return res.status(404).json({ message: 'Không tìm thấy đơn hàng.' });
        }
        res.status(200).json(orders);  // Trả về danh sách đơn hàng của người dùng
    } catch (error) {
        console.error('Lỗi khi lấy đơn hàng:', error);
        res.status(500).json({ message: 'Có lỗi xảy ra khi lấy đơn hàng.' });
    }
});
module.exports = router;
