const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// update subscription status
const updateSubscriptionStatus = async (req, res) => {
  const { userId } = req.params;
  const { subscriptionActive, subscriptionStartDate, subscriptionEndDate } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { subscriptionActive, subscriptionStartDate, subscriptionEndDate },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'Subscription status updated', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get subscription status
const getSubscriptionStatus = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ subscriptionActive: user.subscriptionActive });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser, updateSubscriptionStatus, getSubscriptionStatus }