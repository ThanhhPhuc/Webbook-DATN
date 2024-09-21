const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const khachhangSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
  permissions: { type: [String], default: [] }  // Mảng lưu trữ các quyền
});

module.exports = mongoose.model('Khachhang', khachhangSchema);
