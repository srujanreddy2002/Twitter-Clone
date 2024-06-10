const Tweet = require('../models/Tweet');
const User = require('../models/User');

const createTweet = async (req, res) => {
  const { text, media } = req.body;

  const tweet = new Tweet({
    user: req.user.id,
    text,
    media,
  });

  const createdTweet = await tweet.save();
  res.status(201).json(createdTweet);
};

const getTweets = async (req, res) => {
  const user = await User.findById(req.user.id).populate('following');
  const followingIds = user.following.map((user) => user._id);

  const tweets = await Tweet.find({
    user: { $in: [req.user.id, ...followingIds] },
  }).sort({ createdAt: -1 });

  res.json(tweets);
};

const deleteTweet = async (req, res) => {
  const tweet = await Tweet.findById(req.params.id);

  if (tweet.user.toString() !== req.user.id.toString()) {
    return res.status(401).json({ message: 'User not authorized' });
  }

  if (tweet) {
    await tweet.remove();
    res.json({ message: 'Tweet removed' });
  } else {
    res.status(404).json({ message: 'Tweet not found' });
  }
};

module.exports = { createTweet, getTweets, deleteTweet };
