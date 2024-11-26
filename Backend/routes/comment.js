const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment'); // Mô hình bình luận
const Khachhang = require('../models/Khachhang'); // Đảm bảo đúng mô hình người dùng
const Sach = require('../models/Sach')

router.get('/', async (req, res) => {
  try {
     
      const comments = await Comment.find()
          .populate({
              path: 'product_id',     
              model: 'Sach',          
              select: 'title author category'
          })
          .populate({
              path: 'user_id',        
              model: 'Khachhang',     
              select: 'username email' 
          });
  res.json(comments);
  } catch (error) {
     
      res.status(500).json({ error: 'An error occurred while fetching comments.' });
  }
});
router.get('/:productId', async (req, res) => {
  try {
      const { productId } = req.params;

 
      const comments = await Comment.find({ product_id: productId })
          .populate({
              path: 'product_id',
              model: 'Sach',
              select: 'title author category'
          })
          .populate({
              path: 'user_id',
              model: 'Khachhang',
              select: 'username email'
          });

      if (comments.length === 0) {
          return res.status(404).json({ message: 'No comments found for this product.' });
      }

      res.json(comments);
  } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching comments.' });
  }
});

router.post('/', async (req, res) => {
  const { product_id, user_id, comment_content, rating } = req.body;

  try {
    // Kiểm tra xem sản phẩm có tồn tại không
    const book = await Sach.findById(product_id);
    if (!book) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Kiểm tra xem người dùng có tồn tại không
    const user = await Khachhang.findById(user_id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Tạo một comment mới
    const newComment = new Comment({
      product_id,
      user_id,
      comment_content,
      rating
    });

    // Lưu bình luận vào cơ sở dữ liệu
    const savedComment = await newComment.save();

    res.status(201).json(savedComment);
  } catch (error) {
    console.error('Error adding comment:', error.message);
    res.status(500).json({ error: 'Error adding comment', message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedComment = await Comment.findByIdAndDelete(id);
    if (!deletedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.json({ message: 'Comment deleted successfully' }); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
