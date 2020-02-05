import React, { useState } from 'react';
import './AnswerForm.sass';
import * as PropTypes from 'prop-types';

export const AnswerForm = ({ updateQuestionHandler }) => {

  const [answer, setAnswer] = useState('');

  const inputHandler = (event) => {
    setAnswer(event.target.value);
  };
  const updateHandler = () => {
    updateQuestionHandler(answer);
  };

  return (
    <div className="answerForm">
      <div className="input-field">
        <input
          placeholder="Ваш вопрос:"
          id="question"
          type="text"
          name="question"
          minLength="4" maxLength="360" required
          className="validate"
          value={answer}
          onChange={ inputHandler }
        />
        <label htmlFor="question">Введите вопрос:</label>
      </div>
      <button
        className="btn teal"
        onClick={ updateHandler }
        disabled={ answer.length < 3 }
      >
        Ответить
      </button>
    </div>
  );
};

AnswerForm.propTypes = {
  updateQuestionHandler: PropTypes.func,
};
