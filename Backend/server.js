const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const sachRoutes = require('./routes/sach');
const tacgiaRoutes = require('./routes/tacgia');
const thanhtoanRoutes = require('./routes/thanhtoan');
const theloaiRoutes = require('./routes/theloai');
const nxbRoutes = require('./routes/nxb');
const hoadonRoutes = require('./routes/hoadon');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');  
const baivietRoutes = require('./routes/baiviet');
const commentRoutes = require('./routes/comment');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://dngthanhphuc2004:123@cluster0.auxxs.mongodb.net/ApiFrame2', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('MongoDB connection error:', err));

app.use('/api/sach', sachRoutes);
app.use('/api/tacgia', tacgiaRoutes);
app.use('/api/thanhtoan', thanhtoanRoutes);
app.use('/api/theloai', theloaiRoutes);
app.use('/api/nxb', nxbRoutes);
app.use('/api/hoadon', hoadonRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);  
app.use('/api/baiviet', baivietRoutes);  
app.use('/api/comment',commentRoutes);
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
