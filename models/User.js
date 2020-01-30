const { Schema, model, Types  } = require('mongoose');

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, },
  secondName: { type: String, },
  questions: [{ type: Types.ObjectId, ref: 'Question', }],
});

module.exports = model('User', schema);
