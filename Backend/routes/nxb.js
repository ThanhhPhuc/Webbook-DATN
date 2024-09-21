const express = require('express');
const router = express.Router();
const NXB = require('../models/NXB');

router.get('/', async (req, res) => {
  const publishers = await NXB.find();
  res.json(publishers);
});

router.post('/', async (req, res) => {
  const publisher = new NXB(req.body);
  await publisher.save();
  res.status(201).json(publisher);
});

router.get('/:id', async (req, res) => {
  const publisher = await NXB.findById(req.params.id);
  if (!publisher) return res.status(404).send('Publisher not found');
  res.json(publisher);
});

router.put('/:id', async (req, res) => {
  const publisher = await NXB.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!publisher) return res.status(404).send('Publisher not found');
  res.json(publisher);
});

router.delete('/:id', async (req, res) => {
  const publisher = await NXB.findByIdAndDelete(req.params.id);
  if (!publisher) return res.status(404).send('Publisher not found');
  res.send('Publisher deleted');
});

module.exports = router;
