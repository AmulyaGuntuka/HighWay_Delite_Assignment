const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Experience = require('../models/Experience');
const Booking = require('../models/Booking');
const Promo = require('../models/Promo');

// POST /api/bookings
router.post('/', async (req, res) => {
  const { experienceId, slotId, name, email, phone, seats = 1, promoCode } = req.body;
  if (!experienceId || !slotId || !name || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    // try decrement capacity atomically
    const experience = await Experience.findOneAndUpdate(
      { _id: experienceId, "slots._id": slotId, "slots.capacity": { $gte: seats } },
      { $inc: { "slots.$.capacity": -seats } },
      { new: true, session }
    );

    if (!experience) {
      await session.abortTransaction();
      return res.status(409).json({ message: 'Selected slot sold out or insufficient capacity' });
    }

    // get slot price
    const slot = experience.slots.id(slotId);
    if (!slot) {
      await session.abortTransaction();
      return res.status(404).json({ message: 'Slot not found' });
    }
    let price = slot.price * seats;
    // apply promo
    let discount = 0;
    if (promoCode) {
      const promo = await Promo.findOne({ code: promoCode, active: true }).session(session);
      if (promo) {
        if (promo.type === 'percentage') {
          discount = Math.round((price * promo.value) / 100);
        } else {
          discount = promo.value;
        }
        price = Math.max(0, price - discount);
      }
    }

    const booking = await Booking.create([{
      experienceId, slotId, name, email, phone, seats, pricePaid: price, promoCode
    }], { session });

    await session.commitTransaction();
    res.json({ success: true, booking: booking[0] });
  } catch (err) {
    await session.abortTransaction();
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  } finally {
    session.endSession();
  }
});

module.exports = router;
