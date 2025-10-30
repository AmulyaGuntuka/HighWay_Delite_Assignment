const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Experience = require('../models/Experience');
const Promo = require('../models/Promo');

dotenv.config(); // ✅ load .env from root

const MONGO_URI = process.env.MONGO_URI; // ✅ use same key name as server.js

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB:', MONGO_URI);

    await Experience.deleteMany();
    await Experience.insertMany([
      {
        title: 'Sunset Kayaking',
        shortDescription: 'Kayak the serene river during sunset',
        description:
          'A guided low-intensity kayaking trip with refreshments.',
        images: [
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
        ],
        location: 'Riverside',
        tags: ['Adventure', 'Water'],
        slots: [
          {
            date: '2025-10-30',
            time: '07:00 am',
            capacity: 5,
            price: 999,
          },
          {
            date: '2025-10-31',
            time: '09:00 am',
            capacity: 3,
            price: 999,
          },
        ],
      },
      {
        title: 'Street Food Walk',
        shortDescription: 'Discover local food lanes',
        description:
          'Taste a variety of local dishes guided by a food expert.',
        images: [
          'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'
        ],
        location: 'Old City',
        tags: ['Food', 'Culture'],
        slots: [
          {
            date: '2025-10-31',
            time: '06:00 pm',
            capacity: 8,
            price: 899,
          },
          {
            date: '2025-11-01',
            time: '07:00 pm',
            capacity: 10,
            price: 899,
          },
        ],
      },
      {
  title: 'Mountain Sunrise Trek',
  shortDescription: 'Witness breathtaking sunrise views from the peaks.',
  description: 'Join our early morning guided trek to scenic hills, enjoy panoramic sunrise views, breakfast included, and an unforgettable adventure.',
  images: ['https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'],
  location: 'Nandi Hills',
  tags: ['Adventure', 'Trek'],
  slots: [
    { date: '2025-11-02', time: '05:00 am', capacity: 10, price: 899 },
    { date: '2025-11-03', time: '05:30 am', capacity: 8, price: 899 },
  ],
},{
  title: 'Backwater Canoe Ride',
  shortDescription: 'Relaxing canoe journey through serene lagoons.',
  description: 'Paddle through peaceful backwaters surrounded by palm trees. Ideal for families and couples seeking tranquility.',
  images: ['https://images.unsplash.com/photo-1560179707-f14e90ef3623'],
  location: 'Alleppey',
  tags: ['Water', 'Nature'],
  slots: [
    { date: '2025-11-01', time: '08:00 am', capacity: 6, price: 1199 },
    { date: '2025-11-02', time: '10:00 am', capacity: 4, price: 1199 },
  ],
},
{
  title: 'Local Village Food Experience',
  shortDescription: 'Savor authentic regional recipes cooked by locals.',
  description: 'Enjoy a homely lunch made with organic ingredients by village chefs. Includes a farm walk and cooking demonstration.',
  images: ['https://images.unsplash.com/photo-1504674900247-0877df9cc836'],
  location: 'Coorg',
  tags: ['Food', 'Culture'],
  slots: [
    { date: '2025-11-03', time: '12:30 pm', capacity: 12, price: 749 },
    { date: '2025-11-04', time: '01:00 pm', capacity: 10, price: 749 },
  ],
},
{
  title: 'Countryside Cycling Tour',
  shortDescription: 'Ride through scenic fields and peaceful lanes.',
  description: 'A half-day guided cycling tour exploring countryside roads, local farms, and village life. Includes refreshments and helmets.',
  images: ['https://images.unsplash.com/photo-1532298229144-0ec0c57515c7'],
  location: 'Pondicherry',
  tags: ['Adventure', 'Outdoor'],
  slots: [
    { date: '2025-11-05', time: '06:30 am', capacity: 8, price: 1099 },
    { date: '2025-11-06', time: '07:00 am', capacity: 8, price: 1099 },
  ],
},
{
  title: 'Beach Bonfire Night',
  shortDescription: 'Music, games, and dinner under the stars.',
  description: 'Enjoy a lively bonfire night by the beach with live music, local snacks, and beach games. Perfect for groups and couples.',
  images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e'],
  location: 'Gokarna',
  tags: ['Leisure', 'Beach'],
  slots: [
    { date: '2025-11-07', time: '07:00 pm', capacity: 20, price: 999 },
    { date: '2025-11-08', time: '07:00 pm', capacity: 15, price: 999 },
  ],
},{
  title: 'Old Fort Heritage Walk',
  shortDescription: 'Explore historic landmarks with a local historian.',
  description: 'Discover ancient architecture and stories behind the city’s oldest monuments. Includes entry passes and refreshments.',
  images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be'],
  location: 'Hyderabad',
  tags: ['History', 'Culture'],
  slots: [
    { date: '2025-11-02', time: '04:00 pm', capacity: 15, price: 699 },
    { date: '2025-11-03', time: '05:00 pm', capacity: 12, price: 699 },
  ],
},
    ]);
 // Clear and seed Promos
    await Promo.deleteMany();
    await Promo.insertMany([
      { code: 'WELCOME10', type: 'percentage', value: 10, active: true },
      { code: 'FLAT50', type: 'flat', value: 50, active: true },
       { code: 'FESTIVE20', type: 'percentage', value: 20, active: true },   // festival sale
  { code: 'HDADVENTURE15', type: 'percentage', value: 15, active: true }, // adventure category
  { code: 'TRAVEL200', type: 'flat', value: 200, active: true },        // big spenders
  { code: 'WEEKEND5', type: 'percentage', value: 5, active: true },     // weekend offer
  { code: 'REFER100', type: 'flat', value: 100, active: true },         // referral discount
  { code: 'STUDENT25', type: 'percentage', value: 25, active: true },   // student special
  { code: 'EARLYBIRD50', type: 'flat', value: 50, active: true },       // early booking
  { code: 'SUPERDEAL30', type: 'percentage', value: 30, active: true }, // limited time

    ]);
    console.log('✅ Experiences & Promos inserted successfully');

    mongoose.connection.close();
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
};

seed();
