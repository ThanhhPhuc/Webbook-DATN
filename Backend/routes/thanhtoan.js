const express = require('express');
const router = express.Router();
// const Thanhtoan = require('../models/Thanhtoan');

router.get('/', async (req, res) => {
  const payments = await Thanhtoan.find().populate('order');
  res.json(payments);
});

router.post('/', async (req, res) => {
  const payment = new Thanhtoan(req.body);
  await payment.save();
  res.status(201).json(payment);
});

router.get('/:id', async (req, res) => {
  const payment = await Thanhtoan.findById(req.params.id).populate('order');
  if (!payment) return res.status(404).send('Payment not found');
  res.json(payment);
});

router.put('/:id', async (req, res) => {
  const payment = await Thanhtoan.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!payment) return res.status(404).send('Payment not found');
  res.json(payment);
});

router.delete('/:id', async (req, res) => {
  const payment = await Thanhtoan.findByIdAndDelete(req.params.id);
  if (!payment) return res.status(404).send('Payment not found');
  res.send('Payment deleted');
});

module.exports = router;
