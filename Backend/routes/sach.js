const express = require('express');
const router = express.Router();
const Sach = require('../models/Sach');

// Thêm sách
router.post('/', async (req, res) => {
  const { title, author, publisher, category, namXB, description, price, image } = req.body;

  if (!title || !author || !publisher || !category || !namXB || !description || !price) {
    return res.status(400).json({ error: 'All required fields must be filled' });
  }

  const bookData = new Book({
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    publisher: req.body.publisher,
    namXB: req.body.namXB,
    price: req.body.price,
    inventory: req.body.inventory,
    description: req.body.description,
    image: req.body.image
  })

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
  const { id } = req.params;
  try {
    const sach = await Sach.findById(id);
    if (!sach) return res.status(404).json({ error: 'Sách không tìm thấy' });
    res.json(sach);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy sách', message: error.message });
  }
});

// Cập nhật sách theo ID
router.put('/:id', async (req, res) => {
  const { title, namXB, description, price, image, inventory } = req.body;

  if (!title || !namXB || !description || !price || !image || !inventory) {
    return res.status(400).json({ error: 'All required fields must be filled' });
  }

  const bookData = {
    title,
    // author,
    // publisher,
    // category,
    // namXB,
    description,
    price,
    image, 
    inventory
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

// Tìm kiếm sách
router.get('/search', async (req, res) => {
  const query = req.query.query;
  if (!query) {
    return res.status(400).json({ error: 'Tham số tìm kiếm là bắt buộc' });
  }
  try {
    const sach = await Sach.find({ title: { $regex: query, $options: 'i' } });
    res.status(200).json(sach);
  } catch (error) {
    console.error('Lỗi khi tìm kiếm sách:', error);
    res.status(500).json({ error: 'Lỗi khi tìm kiếm sách', message: error.message });
  }
});

// Lấy sách theo thể loại
router.get('/theloai/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Tìm sách theo categoryId
    const books = await Sach.find({ category: categoryId })
      .populate('author', 'name')
      .populate('publisher', 'name')
      .populate('category', 'name'); // Thêm populate để lấy tên thể loại

    // Kiểm tra nếu không có sách nào
    if (books.length === 0) {
      return res.status(404).json({ message: 'Không tìm thấy sách trong thể loại này.' });
    }

    // Lấy tên thể loại từ cơ sở dữ liệu nếu cần
    const category = await Theloai.findById(categoryId); // Giả sử bạn có mô hình Theloai
    const categoryName = category ? category.name : 'Không xác định'; // Lấy tên hoặc đặt mặc định

    res.json({ books, categoryName });
  } catch (error) {
    console.error('Có lỗi xảy ra khi lấy sách theo thể loại:', error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi lấy sách theo thể loại.' });
  }
});



module.exports = router;
