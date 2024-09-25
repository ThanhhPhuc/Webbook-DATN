const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sachSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'Tacgia' },
  description: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Theloai' },
  publisher: { type: Schema.Types.ObjectId, ref: 'NXB' },
  price: { type: Number, required: true },
  image: { type: String } // Thêm trường lưu trữ đường dẫn ảnh
});

module.exports = mongoose.model('Sach', sachSchema);
