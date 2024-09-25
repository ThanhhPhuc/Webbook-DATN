const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thanhtoanSchema = new Schema({
  order: { type: Schema.Types.ObjectId, ref: 'Hoadon' },
  method: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model('Thanhtoan', thanhtoanSchema);
