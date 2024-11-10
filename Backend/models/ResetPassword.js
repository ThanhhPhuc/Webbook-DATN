const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resetPasswordSchema = new Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 300 } // Hết hạn sau 5 phút
});

module.exports = mongoose.model('ResetPassword', resetPasswordSchema);
