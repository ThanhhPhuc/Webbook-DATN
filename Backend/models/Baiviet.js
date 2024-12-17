// models/Baiviet.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const baivietSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true }, // URL hình ảnh
  author: { type: String, required: true }, // Tên tác giả
  date: { type: Date, default: Date.now }, // Ngày đăng bài
});

module.exports = mongoose.model('BaiViet', baivietSchema);