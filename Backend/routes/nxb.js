const express = require('express');
const router = express.Router();
const NXB = require('../models/NXB');

// Lấy tất cả NXB
router.get('/', async (req, res) => {
  try {
    const publishers = await NXB.find();
    res.json(publishers);
  } catch (error) {
    res.status(500).send('Error fetching publishers');
  }
});

// Thêm NXB mới
router.post('/', async (req, res) => {
  try {
    const publisher = new NXB(req.body);
    await publisher.save();
    res.status(201).json(publisher);
  } catch (error) {
    res.status(400).send('Error adding publisher');
  }
});

// Lấy chi tiết NXB theo ID
router.get('/:id', async (req, res) => {
  try {
    const publisher = await NXB.findById(req.params.id);
    if (!publisher) return res.status(404).send('Publisher not found');
    res.json(publisher);
  } catch (error) {
    res.status(500).send('Error fetching publisher');
  }
});

// Cập nhật NXB theo ID
router.put('/:id', async (req, res) => {
  try {
    const publisher = await NXB.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!publisher) return res.status(404).send('Publisher not found');
    res.json(publisher);
  } catch (error) {
    res.status(400).send('Error updating publisher');
  }
});

// Xóa NXB theo ID
router.delete('/:id', async (req, res) => {
  try {
    const publisher = await NXB.findByIdAndDelete(req.params.id);
    if (!publisher) return res.status(404).send('Publisher not found');
    res.send('Publisher deleted');
  } catch (error) {
    res.status(500).send('Error deleting publisher');
  }
});

module.exports = router;
