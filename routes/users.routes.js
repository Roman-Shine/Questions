const { Router } = require('express');
// const auth = require('../middlewares/auth.middleware');
const User = require('../models/User');
const Question = require('../models/Question');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    const userForResponse = users.map(user => {
      return {
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

router.get('/:login', async (req, res) => {
  try {
    const user = await User.findOne({ login: req.params.login });
    if (!user) {
      return res.redirect('/users');
    }
    const questions = await Question.find({ owner: user._id, answer: { $ne: '' } });
    const userForResponse = {
      login: user.login,
      name: user.name,
      secondName: user.secondName,
      questions: questions,
      _id: user._id
    };
    res.json(userForResponse);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

module.exports = router;
