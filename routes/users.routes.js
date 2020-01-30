const { Router } = require('express');
// const auth = require('../middlewares/auth.middleware');
const User = require('../models/User');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    const userForResponse = users.map(user => {
      return {
        email: user.email,
        login: user.login,
        name: user.name,
        secondName: user.secondName,
        questions: user.questions,
        _id: user._id
      };
    });
    res.json(userForResponse);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

module.exports = router;
