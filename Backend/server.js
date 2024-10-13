const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const sachRoutes = require('./routes/sach');
const tacgiaRoutes = require('./routes/tacgia');
const thanhtoanRoutes = require('./routes/thanhtoan');
const theloaiRoutes = require('./routes/theloai');
const nxbRoutes = require('./routes/nxb');
const hoadonRoutes = require('./routes/hoadon');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ApiFrame2', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/sach', sachRoutes);
app.use('/api/tacgia', tacgiaRoutes);
app.use('/api/thanhtoan', thanhtoanRoutes);
app.use('/api/theloai', theloaiRoutes);
app.use('/api/nxb', nxbRoutes);
app.use('/api/hoadon', hoadonRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
