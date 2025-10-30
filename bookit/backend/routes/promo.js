const express = require('express');
const router = express.Router();
const Promo = require('../models/Promo');

// POST /api/promo/validate
router.post('/validate', async (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ valid: false, message: 'No code provided' });
  const promo = await Promo.findOne({ code: code.toUpperCase(), active: true });
  if (!promo) return res.json({ valid: false });
  res.json({ valid: true, promo: { type: promo.type, value: promo.value } });
});

module.exports = router;
