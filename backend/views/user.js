const express = require('express');
const verifyToken = require('../middleware/requireAuth');
const { loginUser, signupUser, updateSubscriptionStatus, getSubscriptionStatus } = require('../controllers/userController');

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);

// Verify token route
router.get('/verify-token', verifyToken, (req, res) => {
  res.status(200).json({ user: req.user });
});

// Update subscription status (secured by token verification)
router.patch('/subscription/:userId', verifyToken, updateSubscriptionStatus);

// Get subscription status
router.get('/subscription/:userId', verifyToken, getSubscriptionStatus);

module.exports = router;