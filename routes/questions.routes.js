const { Router } = require('express');
const auth = require('../middlewares/auth.middleware');
const Question = require('../models/Question');

const router = Router();

router.post('/generate', async (req, res) => {
  //TODO test post request on fake userId
  try {
    const data = req.body;
    const newQuestion = new Question({
      ...data
    });
    await newQuestion.save();
    res.status(201).json({ newQuestion });
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const questions = await Question.find({ owner: req.user.userId });
    res.json(questions);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

router.get('/new-questions', auth, async (req, res) => {
  try {
    const questions = await Question.find({ owner: req.user.userId, answer: '' });
    res.json(questions);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

module.exports = router;
