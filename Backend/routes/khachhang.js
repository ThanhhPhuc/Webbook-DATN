const express = require('express');
const router = express.Router();
const Khachhang = require('../models/Khachhang');

router.get('/', async (req, res) => {
  const customers = await Khachhang.find();
  res.json(customers);
});

router.post('/', async (req, res) => {
  const { username, email, password, address, phone, permissions } = req.body;
  
  const customer = new Khachhang({
    username,
    email,
    password,
    address,
    phone,
    permissions // Thêm quyền từ request body
  });

  await customer.save();
  res.status(201).json(customer);
});


router.get('/:id', async (req, res) => {
  const customer = await Khachhang.findById(req.params.id);
  if (!customer) return res.status(404).send('Customer not found');
  res.json(customer);
});

router.put('/:id', async (req, res) => {
  const customer = await Khachhang.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!customer) return res.status(404).send('Customer not found');
  res.json(customer);
});

router.delete('/:id', async (req, res) => {
  const customer = await Khachhang.findByIdAndDelete(req.params.id);
  if (!customer) return res.status(404).send('Customer not found');
  res.send('Customer deleted');
});

router.delete('/delete-account', async (req, res) => {
  const { userId } = req.body;

  try {
      const customer = await Khachhang.findByIdAndDelete(userId);
      if (!customer) {
          return res.status(404).send('Customer not found');
      }
      res.send('Customer deleted');
  } catch (error) {
      console.error('Error deleting account:', error);
      res.status(500).send('Internal Server Error');
  }
});
module.exports = router;
