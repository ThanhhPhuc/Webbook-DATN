const express = require('express');
const router = express.Router();
const Sach = require('../models/Sach');
const Comment = require('../models/Comment'); // Mô hình bình luận
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

router.get('/', async (req, res) => {
  try {
    const books = await Sach.find()
      .populate('author', 'name')  // Lấy thông tin tác giả
      .populate('publisher', 'name')  // Lấy thông tin nhà xuất bản
      .populate('category', 'name');  // Lấy thông tin thể loại

    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error.message);
    res.status(500).json({ error: 'Error fetching books', message: error.message });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const sach = await Sach.findById(req.params.id)
      .populate('author', 'name')
      .populate('publisher', 'name')
      .populate('category', 'name');
    if (!sach) {
      return res.status(404).json({ error: 'Book not found' });
    }
    const comments = await Comment.find({ product_id: req.params.id })
    .populate('user_id', 'username email');

res.json({ sach, comments });
  } catch (error) {
    console.error('Error fetching book:', error.message);
    res.status(500).json({ error: 'Internal server error', message: error.message });
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
    const { categoryId } = req.params; // Lấy categoryId từ params

    // Tìm tất cả sách thuộc thể loại tương ứng
    const books = await Sach.find({ category: categoryId })
      .populate('author', 'name')  // Lấy thông tin tác giả
      .populate('publisher', 'name')  // Lấy thông tin nhà xuất bản
      .populate('category', 'name');  // Lấy thông tin thể loại

    // Kiểm tra nếu không có sách nào trong thể loại
    if (books.length === 0) {
      return res.status(404).json({ message: 'Không tìm thấy sách trong thể loại này.' });
    }

    // Trả về kết quả
    res.status(200).json({
      books: books, // Danh sách sách
    });
  } catch (error) {
    console.error('Có lỗi xảy ra khi lấy sách theo thể loại:', error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi lấy sách theo thể loại.', error: error.message });
  }
});
// Endpoint cập nhật tồn kho
router.put('/:id/update-inventory', async (req, res) => {
  try {
    const sachId = req.params.id;
    const quantity = req.body.quantity;

    const sach = await Sach.findById(sachId);
    if (!sach) {
      return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
    }

    // Trừ tồn kho
    if (sach.inventory >= quantity) {
      sach.inventory -= quantity;
      await sach.save();
      res.status(200).json({ message: 'Cập nhật tồn kho thành công' });
    } else {
      res.status(400).json({ message: 'Không đủ tồn kho' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server', error });
  }
});



module.exports = router;
