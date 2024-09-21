const express = require('express');
const router = express.Router();
const Tacgia = require('../models/Tacgia');

router.get('/', async (req, res) => {
  const authors = await Tacgia.find();
  res.json(authors);
});

router.post('/', async (req, res) => {
  const author = new Tacgia(req.body);
  await author.save();
  res.status(201).json(author);
});

router.get('/:id', async (req, res) => {
  const author = await Tacgia.findById(req.params.id);
  if (!author) return res.status(404).send('Author not found');
  res.json(author);
});

router.put('/:id', async (req, res) => {
  const author = await Tacgia.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!author) return res.status(404).send('Author not found');
  res.json(author);
});

router.delete('/:id', async (req, res) => {
  const author = await Tacgia.findByIdAndDelete(req.params.id);
  if (!author) return res.status(404).send('Author not found');
  res.send('Author deleted');
});

module.exports = router;
