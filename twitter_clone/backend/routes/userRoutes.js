const express = require('express');
const { registerUser, authUser, followUser, unfollowUser } = require('../controllers/userController');
const protect = require('../middleware/auth');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.post('/follow/:id', protect, followUser);
router.post('/unfollow/:id', protect, unfollowUser);

module.exports = router;
