const express = require('express');
const cors = require('cors');
const authorRoutes = require('./routes/authorRoutes');
const connectDB = require('./config/db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/authors', authorRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});