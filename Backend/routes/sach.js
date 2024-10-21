const express = require('express');
const router = express.Router();
const Sach = require('../models/Sach');

// Thêm sách
router.post('/', async (req, res) => {
  const { title, author, publisher, category, namXB, description, price, image } = req.body;

  if (!title || !author || !publisher || !category || !namXB || !description || !price) {
    return res.status(400).json({ error: 'All required fields must be filled' });
  }

  const bookData = {
    title,
    author,
    publisher,
    category,
    namXB,
    description,
    price,
    image
  };

  try {
    const book = new Sach(bookData);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    console.error('Error saving book:', error.message);
    res.status(500).json({ error: 'Error saving book', message: error.message });
  }
});

// Lấy tất cả sách
router.get('/', async (req, res) => {
  try {
    const books = await Sach.find()
      .populate('author', 'name')
      .populate('publisher', 'name')
      .populate('category', 'name');
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error.message);
    res.status(500).json({ error: 'Error fetching books', message: error.message });
  }
});

// Lấy sách theo ID
router.get('/:id', async (req, res) => {
  try {
    const sach = await Sach.findById(req.params.id)
      .populate('author', 'name')
      .populate('publisher', 'name')
      .populate('category', 'name');
    if (!sach) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(sach);
  } catch (error) {
    console.error('Error fetching book:', error.message);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
});

// Cập nhật sách theo ID
router.put('/:id', async (req, res) => {
  const { title, author, publisher, category, namXB, description, price, image } = req.body;

  if (!title || !author || !publisher || !category || !namXB || !description || !price) {
    return res.status(400).json({ error: 'All required fields must be filled' });
  }

  const bookData = {
    title,
    author,
    publisher,
    category,
    namXB,
    description,
    price,
    image
  };

  try {
    const updatedBook = await Sach.findByIdAndUpdate(req.params.id, bookData, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (error) {
    console.error('Error updating book:', error.message);
    res.status(500).json({ error: 'Error updating book', message: error.message });
  }
});

// Xóa sách theo ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedBook = await Sach.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(204).send(); // Thành công mà không có nội dung
  } catch (error) {
    console.error('Error deleting book:', error.message);
    res.status(500).json({ error: 'Error deleting book', message: error.message });
  }
});

module.exports = router;
