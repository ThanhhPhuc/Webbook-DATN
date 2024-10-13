const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const khachhangSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  diachi: { type: String },
  dienthoai: { type: Number },
  permissions: { type: [String], default: [] }, // Lưu trữ quyền như 'admin'
});

// Mã hóa mật khẩu trước khi lưu
khachhangSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


module.exports = mongoose.model('Khachhang', khachhangSchema);
