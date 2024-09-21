const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nxbSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
});

module.exports = mongoose.model('NXB', nxbSchema);
