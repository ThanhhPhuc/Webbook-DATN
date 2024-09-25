const express = require('express');
const router = express.Router();
const Theloai = require('../models/Theloai');

// Danh sách sản phẩm theo danh mục
router.get('/:category', async (req, res) => {
  try {
      const sachs = await Sach.find({ category: req.params.category });
      res.json(sachs);
  } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
  }
});
router.get('/', async (req, res) => {
  const categories = await Theloai.find();
  res.json(categories);
});

router.post('/', async (req, res) => {
  const category = new Theloai(req.body);
  await category.save();
  res.status(201).json(category);
});

router.get('/:id', async (req, res) => {
  const category = await Theloai.findById(req.params.id);
  if (!category) return res.status(404).send('Category not found');
  res.json(category);
});

router.put('/:id', async (req, res) => {
  const category = await Theloai.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!category) return res.status(404).send('Category not found');
  res.json(category);
});

router.delete('/:id', async (req, res) => {
  const category = await Theloai.findByIdAndDelete(req.params.id);
  if (!category) return res.status(404).send('Category not found');
  res.send('Category deleted');
});

module.exports = router;
