const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, default: '' },
  date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  owner: { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('Question', schema);
