const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const authRoutes = require("./Routes/authRoutes");
const itemRoutes = require("./Routes/itemRoutes");
const pageContentRoutes  = require("./Routes/pageContentRoutes");
const shippingImageRoutes = require('./Routes/shippingImagesRoutes');

const app = express();
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://trendysty-website.netlify.app',
  'https://trendysty-dashboard.netlify.app',
  // Add your actual Netlify URLs here when you get them
  /^https:\/\/.*\.netlify\.app$/,
  /^https:\/\/.*\.onrender\.com$/
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Check if origin matches any allowed origins (strings or regex)
    const isAllowed = allowedOrigins.some(allowedOrigin => {
      if (typeof allowedOrigin === 'string') {
        return allowedOrigin === origin;
      } else if (allowedOrigin instanceof RegExp) {
        return allowedOrigin.test(origin);
      }
      return false;
    });
    
    if (isAllowed) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));


app.use(express.json());

// ⛔️ Do not use routes until after DB connects

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB');

  // ✅ Mount routes *after* DB connection
  app.use('/api/items', itemRoutes);
  app.use("/api/auth", authRoutes);
  app.use("/api/pages", pageContentRoutes );
  app.use('/api/shipping-images', shippingImageRoutes);

  app.listen(process.env.PORT || 5000, () => {
    console.log('🚀 Server is running');
  });
})
.catch(err => console.error('❌ MongoDB connection error:', err));
