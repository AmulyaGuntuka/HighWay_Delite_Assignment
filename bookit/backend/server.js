const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const experiencesRouter = require('./routes/experiences');
const bookingsRouter = require('./routes/bookings');
const promoRouter = require('./routes/promo');
const authRouter = require('./routes/auth');

const app = express(); // ✅ must come BEFORE app.use(cors)

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://high-way-delite-assignment.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log(`✅ Connected to MongoDB: ${MONGO_URI}`);
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.use('/api/experiences', experiencesRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/promo', promoRouter);
app.use('/api/auth', authRouter);
