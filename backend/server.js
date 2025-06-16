const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

// Rate limiter: max 100 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: 'Too many requests, please try again later.' }
});
app.use(limiter);

// Routes
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is up and running 🚀' });
});

app.get('/api/message', (req, res) => {
  const env = process.env.NODE_ENV || 'development';
  res.json({
    message: `Hello from backend! 🚀 CD is working in ${env.toUpperCase()} mode.`,
    timestamp: new Date().toISOString()
  });
});

// Port config
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Backend server running on port ${PORT} (${process.env.NODE_ENV || 'development'})`);
});
