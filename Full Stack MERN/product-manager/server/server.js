const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});