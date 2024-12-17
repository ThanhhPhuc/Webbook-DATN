const express = require('express');
const router = express.Router();
const Tacgia = require('../models/Tacgia');

// Lấy tất cả tác giả
router.get('/', async (req, res) => {
  try {
    const authors = await Tacgia.find();
    res.json(authors);
  } catch (error) {
    res.status(500).send('Error fetching authors');
  }
});

// Thêm tác giả mới
router.post('/', async (req, res) => {
  try {
    const author = new Tacgia(req.body);
    await author.save();
    res.status(201).json(author);
  } catch (error) {
    console.error('Error adding author:', error);
    res.status(400).send('Error adding author');
  }
});

// Lấy chi tiết tác giả theo ID
router.get('/:id', async (req, res) => {
  try {
    const author = await Tacgia.findById(req.params.id);
    if (!author) return res.status(404).send('Author not found');
    res.json(author);
  } catch (error) {
    res.status(500).send('Error fetching author');
  }
});

// Cập nhật tác giả theo ID
router.put('/:id', async (req, res) => {
  try {
    const author = await Tacgia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!author) return res.status(404).send('Author not found');
    res.json(author);
  } catch (error) {
    res.status(400).send('Error updating author');
  }
});

// Xóa tác giả theo ID
router.delete('/:id', async (req, res) => {
  try {
    const author = await Tacgia.findByIdAndDelete(req.params.id);
    if (!author) return res.status(404).send('Author not found');
    res.send('Author deleted');
  } catch (error) {
    res.status(500).send('Error deleting author');
  }
});

module.exports = router;