// // models/Order.js
// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   orderDetails: [{
//     productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//     quantity: { type: Number, required: true },
//     price: { type: Number, required: true }
//   }],
//   paymentMethod: { type: String, required: true },
//   totalPrice: { type: Number, required: true },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Order', orderSchema);

// ---------------------------------------------------------
// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   userId: { 
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: 'User', 
//     required: true 
//   },
//   orderDetails: [{
//     productId: { 
//       type: mongoose.Schema.Types.ObjectId, 
//       ref: 'Product', 
//       required: true 
//     },
//     quantity: { 
//       type: Number, 
//       required: true 
//     },
//     price: { 
//       type: Number, 
//       required: true 
//     }
//   }],
//   paymentMethod: { 
//     type: String, 
//     required: true 
//   },
//   totalPrice: { 
//     type: Number, 
//     required: true 
//   },
//   status: { 
//     type: String, 
//     enum: ['pending', 'paid', 'canceled'], 
//     default: 'pending' 
//   },
//   createdAt: { 
//     type: Date, 
//     default: Date.now 
//   }
// }, { timestamps: true }); // Tự động thêm thời gian tạo và cập nhật

// // Chỉ mục cho các trường quan trọng như userId và status để cải thiện tìm kiếm
// orderSchema.index({ userId: 1, status: 1 });

// module.exports = mongoose.model('Order', orderSchema);
// ----------------------------------------------------------

// models/Order.js
// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   orderDetails: [{
//     productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//     quantity: { type: Number, required: true },
//     price: { type: Number, required: true }
//   }],
//   paymentMethod: { type: String, required: true },
//   totalPrice: { type: Number, required: true },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Order', orderSchema);
// ----------------------------------------

// models/Order.js
// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Liên kết với User
//   userName: { type: String, required: true },  // Tên người dùng
//   userEmail: { type: String, required: true },  // Email người dùng
//   userPhone: { type: String, required: true },  // Số điện thoại người dùng
//   orderDetails: [{
//     productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//     quantity: { type: Number, required: true },
//     price: { type: Number, required: true }
//   }],
//   paymentMethod: { type: String, required: true },
//   totalPrice: { type: Number, required: true },
//   shippingAddress: {
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     phone: { type: String, required: true },
//     city: { type: String, required: true },
//     district: { type: String, required: true },
//     ward: { type: String, required: true },
//     address: { type: String, required: true }
//   },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Order', orderSchema);
// =================================
// models/Order.js
// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     userName: { type: String, required: true },
//     userEmail: { type: String, required: true },
//     userPhone: { type: String, required: true },
//     orderDetails: [
//         {
//             productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//             quantity: { type: Number, required: true },
//             price: { type: Number, required: true },
//         }
//     ],
//     paymentMethod: { type: String, required: true },
//     totalPrice: { type: Number, required: true },
//     shippingInfo: {
//         name: { type: String, required: true },
//         email: { type: String, required: true },
//         phone: { type: String, required: true },
//         address: { type: String, required: true },
//         city: { type: String, required: true },
//         district: { type: String, required: true },
//         ward: { type: String, required: true },
//     },
//     status: { 
//         type: String, 
//         enum: ['pending', 'processing', 'completed'], // Các trạng thái có thể có
//         default: 'pending' 
//     },
// }, { timestamps: true });

// module.exports = mongoose.model('Order', orderSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPhone: { type: String, required: true },
    orderDetails: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sach', required: true }, // Tham chiếu đến model 'Sach'
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        }
    ],
    paymentMethod: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    shippingInfo: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        district: { type: String, required: true },
        ward: { type: String, required: true },
    },
    status: { 
        type: String, 
        // enum: ['pending', 'processing', 'completed'], // Các trạng thái có thể có
        // default: 'pending' 
        enum: ['Chờ xử lý', 'Đang xử lý', 'Hoàn thành'], // Trạng thái bằng tiếng Việt
        default: 'Chờ xử lý' 
    },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
