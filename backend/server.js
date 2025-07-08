// backend/server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'MailInsight Backend is running successfully...',
  });
});

// Example placeholder route for scanning emails
app.post('/api/scan', (req, res) => {
  const emailData = req.body;
  // TODO: Add logic to scan email for threats
  res.json({
    scanned: true,
    threats: [],
    message: 'Email scanned (mocked response)',
  });
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ MongoDB connected');

    // Start server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1); // Exit on error
  });

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error('🔥 Internal Server Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});
