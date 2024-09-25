// const express = require('express');
// const router = express.Router();
// const Sach = require('../models/Sach');

// router.get('/', async (req, res) => {
//   const books = await Sach.find().populate('author').populate('category').populate('publisher');
//   res.json(books);
// });

// router.post('/', async (req, res) => {
//   const book = new Sach(req.body);
//   await book.save();
//   res.status(201).json(book);
// });

// router.get('/:id', async (req, res) => {
//   const book = await Sach.findById(req.params.id).populate('author').populate('category').populate('publisher');
//   if (!book) return res.status(404).send('Book not found');
//   res.json(book);
// });

// router.put('/:id', async (req, res) => {
//   const book = await Sach.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   if (!book) return res.status(404).send('Book not found');
//   res.json(book);
// });

// router.delete('/:id', async (req, res) => {
//   const book = await Sach.findByIdAndDelete(req.params.id);
//   if (!book) return res.status(404).send('Book not found');
//   res.send('Book deleted');
// });
// // Load tất cả sản phẩm
// router.get('/', async (req, res) => {
//   try {
//       const sachs = await Sach.find();
//       res.json(sachs);
//   } catch (error) {
//       res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Load chi tiết sản phẩm
// router.get('/:id', async (req, res) => {
//   try {
//       const sach = await Sach.findById(req.params.id);
//       if (!sach) {
//           return res.status(404).json({ error: 'Product not found' });
//       }
//       res.json(sach);
//   } catch (error) {
//       res.status(500).json({ error: 'Internal server error' });
//   }
// });


// module.exports = router;
const express = require('express');
const router = express.Router();
const Sach = require('../models/Sach');

router.post('/', async (req, res) => {
  const bookData = {
    title: req.body.title,
    author: req.body.author,
    publisher: req.body.publisher,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image // Nhận đường dẫn ảnh từ request body
  };

  console.log(bookData); // Kiểm tra dữ liệu nhận được

  try {
    const book = new Sach(bookData);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    console.error('Error saving book:', error);
    res.status(500).json({ error: 'Error saving book' });
  }
});

// GET - Lấy danh sách sách
router.get('/', async (req, res) => {
  try {
    const books = await Sach.find().populate('author').populate('publisher').populate('category');
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Error fetching books' });
  }
});
 
//lay 1 san pham
router.get('/:id', async (req, res) => {
  try {
      const sach = await Sach.findById(req.params.id).populate('author').populate('publisher').populate('category');
      if (!sach) {
          return res.status(404).json({ error: 'Product not found' });
      }
      res.json(sach);
  } catch (error) {
      console.error('Error fetching book:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
