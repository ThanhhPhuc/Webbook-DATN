// routes/baiviet.js
const express = require('express');
const router = express.Router();
const BaiViet = require('../models/Baiviet');

// Lấy tất cả bài viết
router.get('/', async (req, res) => {
  try {
    const posts = await BaiViet.find();
    res.json(posts);
  } catch (error) {
    res.status(500).send('Error fetching posts');
  }
});

// Thêm bài viết mới
router.post('/', async (req, res) => {
  try {
    const post = new BaiViet(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).send('Error adding post');
  }
});

// Lấy chi tiết bài viết theo ID
router.get('/:id', async (req, res) => {
  try {
    const post = await BaiViet.findById(req.params.id);
    if (!post) return res.status(404).send('Post not found');
    res.json(post);
  } catch (error) {
    res.status(500).send('Error fetching post');
  }
});

// Cập nhật bài viết theo ID
router.put('/:id', async (req, res) => {
  try {
    const post = await BaiViet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) return res.status(404).send('Post not found');
    res.json(post);
  } catch (error) {
    res.status(400).send('Error updating post');
  }
});

// Xóa bài viết theo ID
router.delete('/:id', async (req, res) => {
  try {
    const post = await BaiViet.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).send('Post not found');
    res.send('Post deleted');
  } catch (error) {
    res.status(500).send('Error deleting post');
  }
});

module.exports = router;