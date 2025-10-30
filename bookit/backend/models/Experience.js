const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SlotSchema = new Schema({
  date: String,          // ISO date string or readable
  time: String,
  capacity: { type: Number, default: 10 },
  price: { type: Number, required: true }
});

const ExperienceSchema = new Schema({
  title: String,
  shortDescription: String,
  description: String,
  images: [String],
  location: String,
  tags: [String],
  slots: [SlotSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Experience', ExperienceSchema);
