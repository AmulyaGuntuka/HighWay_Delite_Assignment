const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// GET /api/experiences
router.get('/', async (req, res) => {
  const items = await Experience.find().limit(50);
  res.json(items);
});

// GET /api/experiences/:id
router.get('/:id', async (req, res) => {
  try {
    const exp = await Experience.findById(req.params.id);
    if (!exp) return res.status(404).json({ message: 'Not found' });
    res.json(exp);
  } catch (err) {
    res.status(400).json({ message: 'Invalid id' });
  }
});

module.exports = router;
