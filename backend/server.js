// backend/server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
const paymentRoutes = require('./routes/paymentRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to MongoDB
connectDB()
  .then(() => {
    // Middleware
    app.use(cors());
    app.use(express.json());

    // Routes
    app.use('/api/payments', paymentRoutes);
    app.use('/api/auth', authRoutes);

    // Start server
    app.listen(5000, () => console.log('✅ Server running on port 5000'));
  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB:', err.message);
  });
