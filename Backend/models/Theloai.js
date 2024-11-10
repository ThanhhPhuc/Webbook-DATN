const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const theloaiSchema = new Schema({
  name: { type: String, required: true },
  hinh: { type: String, required: true },
});

module.exports = mongoose.model('Theloai', theloaiSchema);
