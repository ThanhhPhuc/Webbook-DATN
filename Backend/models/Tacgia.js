const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tacgiaSchema = new Schema({
  name: { type: String, required: true },
  bio: { type: String },
});

module.exports = mongoose.model('Tacgia', tacgiaSchema);
