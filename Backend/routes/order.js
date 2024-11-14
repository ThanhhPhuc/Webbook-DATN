// const express = require('express');
// const router = express.Router();
// const Order = require('../models/Order');  // Model Order (bạn có thể cần tạo model này)

// // API endpoint để tạo đơn hàng
// router.post('/create', async (req, res) => {
//     try {
//         const newOrder = new Order(req.body); // Tạo một đơn hàng mới từ dữ liệu gửi lên
//         await newOrder.save();  // Lưu đơn hàng vào database
//         res.status(201).json(newOrder);
//     } catch (err) {
//         res.status(500).json({ message: 'Không thể tạo đơn hàng', error: err });
//     }
// });

// // API endpoint để lấy danh sách đơn hàng
// router.get('/', async (req, res) => {
//     try {
//         const orders = await Order.find();  // Lấy danh sách đơn hàng
//         res.status(200).json(orders);
//     } catch (err) {
//         res.status(500).json({ message: 'Không thể lấy danh sách đơn hàng', error: err });
//     }
// });

// module.exports = router;
// ------------------------------------

// routes/order.js
// const express = require('express');
// const router = express.Router();
// const Order = require('../models/Order');  // Model Order

// // API endpoint để tạo đơn hàng
// router.post('/create', async (req, res) => {
//     try {
//         const newOrder = new Order(req.body); // Tạo một đơn hàng mới từ dữ liệu gửi lên
//         await newOrder.save();  // Lưu đơn hàng vào database
//         res.status(201).json(newOrder);
//     } catch (err) {
//         res.status(500).json({ message: 'Không thể tạo đơn hàng', error: err });
//     }
// });

// // API endpoint để lấy danh sách đơn hàng
// router.get('/', async (req, res) => {
//     try {
//         const orders = await Order.find();  // Lấy danh sách đơn hàng
//         res.status(200).json(orders);
//     } catch (err) {
//         res.status(500).json({ message: 'Không thể lấy danh sách đơn hàng', error: err });
//     }
// });

// // API endpoint để xác nhận thanh toán và cập nhật trạng thái đơn hàng
// router.post('/confirm', async (req, res) => {
//     const { orderId, paymentMethod } = req.body;

//     try {
//         const order = await Order.findById(orderId);
//         if (!order) {
//             return res.status(404).json({ message: 'Đơn hàng không tìm thấy.' });
//         }

//         // Cập nhật trạng thái đơn hàng và phương thức thanh toán
//         order.status = 'paid';  
//         order.paymentMethod = paymentMethod;

//         const updatedOrder = await order.save();
//         res.status(200).json(updatedOrder);  // Trả về đơn hàng đã cập nhật
//     } catch (err) {
//         res.status(500).json({ message: 'Lỗi khi xác nhận thanh toán.', error: err });
//     }
// });

// // API endpoint để hủy đơn hàng
// router.post('/cancel', async (req, res) => {
//     const { orderId } = req.body;

//     try {
//         const order = await Order.findById(orderId);
//         if (!order) {
//             return res.status(404).json({ message: 'Đơn hàng không tìm thấy.' });
//         }

//         order.status = 'canceled';  // Cập nhật trạng thái đơn hàng thành "hủy"

//         const canceledOrder = await order.save();
//         res.status(200).json(canceledOrder);  // Trả về đơn hàng đã hủy
//     } catch (err) {
//         res.status(500).json({ message: 'Lỗi khi hủy đơn hàng.', error: err });
//     }
// });

// module.exports = router;


// --------------------------------

// routes/order.js
// const express = require('express');
// const router = express.Router();
// const Order = require('../models/Order');

// // API endpoint để tạo đơn hàng
// router.post('/create', async (req, res) => {
//     try {
//         const { userId, orderDetails, paymentMethod, totalPrice } = req.body;

//         // Tạo một đơn hàng mới từ dữ liệu gửi lên
//         const newOrder = new Order({
//             userId,
//             orderDetails,
//             paymentMethod,
//             totalPrice
//         });

//         // Lưu đơn hàng vào MongoDB
//         await newOrder.save();

//         res.status(201).json(newOrder);
//     } catch (err) {
//         console.error('Error creating order:', err);
//         res.status(500).json({ message: 'Không thể tạo đơn hàng', error: err });
//     }
// });

// // API endpoint để lấy danh sách đơn hàng
// router.get('/', async (req, res) => {
//     try {
//         const orders = await Order.find();
//         res.status(200).json(orders);
//     } catch (err) {
//         console.error('Error fetching orders:', err);
//         res.status(500).json({ message: 'Không thể lấy danh sách đơn hàng', error: err });
//     }
// });

// module.exports = router;
// ----------------------------------------

// routes/order.js
// const express = require('express');
// const router = express.Router();
// const Order = require('../models/Order');  // Model Order

// // API endpoint để tạo đơn hàng
// router.post('/create', async (req, res) => {
//     try {
//         const { userId, userName, userEmail, userPhone, orderDetails, paymentMethod, totalPrice, shippingAddress } = req.body;

//         // Tạo một đơn hàng mới từ dữ liệu gửi lên
//         const newOrder = new Order({
//             userId,
//             userName,
//             userEmail,
//             userPhone,
//             orderDetails,
//             paymentMethod,
//             totalPrice,
//             shippingAddress,
//         });

//         // Lưu đơn hàng vào database
//         await newOrder.save();

//         // Trả về đơn hàng đã tạo
//         res.status(201).json(newOrder);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Không thể tạo đơn hàng', error: err });
//     }
// });

// module.exports = router;
// ==========================

// const express = require('express');
// const Order = require('../models/Order');
// const router = express.Router();

// router.post('/create', async (req, res) => {
//     const { userId, userName, userEmail, userPhone, orderDetails, paymentMethod, totalPrice, shippingInfo } = req.body;

//     try {
//         const newOrder = new Order({
//             userId,
//             userName,
//             userEmail,
//             userPhone,
//             orderDetails,
//             paymentMethod,
//             totalPrice,
//             shippingInfo,  // Lưu shippingInfo vào MongoDB
//         });

//         // Lưu đơn hàng vào database
//         await newOrder.save();

//         // Trả về phản hồi khi đơn hàng được tạo thành công
//         res.status(201).json({
//             message: 'Đơn hàng đã được tạo thành công!',
//             order: newOrder,  // Đảm bảo trả về đơn hàng bao gồm shippingInfo
//         });
//     } catch (error) {
//         console.error('Lỗi khi tạo đơn hàng:', error);
//         res.status(500).json({
//             message: 'Có lỗi xảy ra khi tạo đơn hàng.',
//             error: error.message,
//         });
//     }
// });

// module.exports = router;


// =====================
// const express = require('express');
// const Order = require('../models/Order');
// const router = express.Router();

// // API để tạo đơn hàng mới
// router.post('/create', async (req, res) => {
//     const { userId, userName, userEmail, userPhone, orderDetails, paymentMethod, totalPrice, shippingInfo } = req.body;

//     try {
//         const newOrder = new Order({
//             userId,
//             userName,
//             userEmail,
//             userPhone,
//             orderDetails,
//             paymentMethod,
//             totalPrice,
//             shippingInfo,  // Lưu shippingInfo vào MongoDB
//         });

//         // Lưu đơn hàng vào database
//         await newOrder.save();

//         // Trả về phản hồi khi đơn hàng được tạo thành công
//         res.status(201).json({
//             message: 'Đơn hàng đã được tạo thành công!',
//             order: newOrder,  // Đảm bảo trả về đơn hàng bao gồm shippingInfo
//         });
//     } catch (error) {
//         console.error('Lỗi khi tạo đơn hàng:', error);
//         res.status(500).json({
//             message: 'Có lỗi xảy ra khi tạo đơn hàng.',
//             error: error.message,
//         });
//     }
// });

// // Lấy danh sách đơn hàng
// router.get('/', async (req, res) => {
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

// // API để cập nhật trạng thái đơn hàng
// router.put('/:orderId/status', async (req, res) => {
//     const { orderId } = req.params;
//     const { status } = req.body;

//     console.log('Cập nhật trạng thái cho đơn hàng ID:', orderId);
//     console.log('Trạng thái mới:', status);

//     try {
//         // Tìm và cập nhật trạng thái đơn hàng
//         const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });

//         if (!order) {
//             return res.status(404).json({ message: 'Đơn hàng không tồn tại' });
//         }

//         res.status(200).json(order);
//     } catch (error) {
//         console.error('Lỗi khi cập nhật trạng thái đơn hàng:', error);
//         res.status(500).json({ message: 'Có lỗi xảy ra khi cập nhật trạng thái đơn hàng' });
//     }
// });

// router.get('/order/:orderId', async (req, res) => {
//     try {
//       const orderId = req.params.orderId;
//       const order = await Order.findById(orderId); // Tìm đơn hàng theo ID
//       if (!order) {
//         return res.status(404).json({ message: 'Đơn hàng không tìm thấy.' });
//       }
//       res.json(order);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Lỗi khi lấy đơn hàng.' });
//     }
//   });

// module.exports = router;


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
router.get('/', async (req, res) => {
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
