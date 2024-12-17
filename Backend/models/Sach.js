const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sachSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'Tacgia', required: true }, // Tham chiếu đến mô hình Tacgia
  category: { type: Schema.Types.ObjectId, ref: 'Theloai', required: true }, // Tham chiếu đến mô hình Theloai
  publisher: { type: Schema.Types.ObjectId, ref: 'NXB', required: true }, // Tham chiếu đến mô hình NXB
  description: { type: String, required: true },
  namXB: { type: Number, required: true }, // Năm xuất bản
  price: { type: Number, required: true },
  image: { type: String }, // Đường dẫn hình ảnh
  inventory:{type:Number},
});

module.exports = mongoose.model('Sach', sachSchema);
