const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nxbSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String , required: true},
  hinh: { type: String, required: true }, // Thêm trường hinh để lưu URL hình ảnh NXB
});

module.exports = mongoose.model('NXB', nxbSchema);
