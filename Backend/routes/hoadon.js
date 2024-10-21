const express = require('express');
const router = express.Router();
const Hoadon = require('../models/Hoadon');

router.get('/', async (req, res) => {
  const invoices = await Hoadon.find().populate('customer').populate('books');
  res.json(invoices);
});

router.post('/', async (req, res) => {
  const invoice = new Hoadon(req.body);
  await invoice.save();
  res.status(201).json(invoice);
});

router.get('/:id', async (req, res) => {
  const invoice = await Hoadon.findById(req.params.id).populate('customer').populate('books');
  if (!invoice) return res.status(404).send('Invoice not found');
  res.json(invoice);
});

router.put('/:id', async (req, res) => {
  const invoice = await Hoadon.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!invoice) return res.status(404).send('Invoice not found');
  res.json(invoice);
});

router.delete('/:id', async (req, res) => {
  const invoice = await Hoadon.findByIdAndDelete(req.params.id);
  if (!invoice) return res.status(404).send('Invoice not found');
  res.send('Invoice deleted');
});

// Create order
router.post('/create', async (req, res) => {
  const { userId, products, totalAmount } = req.body;
  try {
      const newOrder = new Hoadon({ userId, products, totalAmount });
      await newOrder.save();
      res.status(201).json({ message: 'Order created successfully' });
  } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user orders
router.get('/user/:userId', async (req, res) => {
  try {
      const orders = await Hoadon.find({ userId: req.params.userId });
      res.json(orders);
  } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
  }
});

// Get order details
router.get('/:id', async (req, res) => {
  try {
      const order = await Hoadon.findById(req.params.id);
      if (!order) {
          return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
  } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
