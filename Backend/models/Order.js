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

module.exports = mongoose.model('hoadon', orderSchema);
