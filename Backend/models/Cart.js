const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Sach', required: true },
  quantity: { type: Number, required: true, default: 1 }
});

const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [cartItemSchema],
  totalPrice: { type: Number, required: true, default: 0 } // Đặt giá mặc định là 0
});

cartSchema.pre('save', function(next) {
  this.totalPrice = this.items.reduce((total, item) => {
    return total + item.quantity * item.product.price; // Cập nhật tổng giá
  }, 0);
  next();
});

module.exports = mongoose.model('Cart', cartSchema);
