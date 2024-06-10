const express = require('express');
const { createTweet, getTweets, deleteTweet } = require('../controllers/tweetController');
const protect = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, createTweet);
router.get('/', protect, getTweets);
router.delete('/:id', protect, deleteTweet);

module.exports = router;
