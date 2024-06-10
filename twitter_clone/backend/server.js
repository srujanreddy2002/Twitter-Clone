const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const tweetRoutes = require('./routes/tweetRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/tweets', tweetRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
