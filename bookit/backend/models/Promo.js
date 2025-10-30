const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PromoSchema = new Schema({
  code: { type: String, unique: true },
  type: { type: String, enum: ['percentage','flat'] },
  value: Number,
  active: { type: Boolean, default: true }
});
module.exports = mongoose.model('Promo', PromoSchema);
