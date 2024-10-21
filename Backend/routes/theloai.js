const express = require('express');
const router = express.Router();
const Theloai = require('../models/Theloai');

// Lấy danh sách thể loại
router.get('/', async (req, res) => {
  try {
    const categories = await Theloai.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Lấy chi tiết thể loại theo id
router.get('/:id', async (req, res) => {
  try {
    const category = await Theloai.findById(req.params.id);
    if (!category) return res.status(404).send('Category not found');
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Thêm thể loại
router.post('/', async (req, res) => {
  try {
    const category = new Theloai(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Cập nhật thể loại
router.put('/:id', async (req, res) => {
  try {
    const category = await Theloai.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) return res.status(404).send('Category not found');
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Xóa thể loại
router.delete('/:id', async (req, res) => {
  try {
    const category = await Theloai.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).send('Category not found');
    res.send('Category deleted');
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
