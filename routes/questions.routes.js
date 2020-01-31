const { Router } = require('express');
const auth = require('../middlewares/auth.middleware');
const { check, validationResult } = require('express-validator');
const Question = require('../models/Question');

const router = Router();

router.post(
  '/generate',
  [
    check('question', 'Вопрос должен содержать хотябы 4 символа').isLength({ min: 4}),
    check('owner', 'Не передан адресат').exists(),
  ],
  async (req, res) => {
  //TODO test post request on fake userId
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные вопроса',
      });
    }

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
