import React from 'react';
import './QuestionForm.sass';

export const QuestionForm = () => {

  const inputHandler = (event) => {
    if (event.key === 'Enter') {
      submitQuestionHandler();
    }
  };

  const submitQuestionHandler = () => {
    console.log('submit!')
  };

  return (
    <div>
      <h4 className="mt-0">Задайте анонимный вопрос:</h4>
      <div className="question-form">
        <div className="input-field">
          <input
            placeholder="Ваш вопрос:"
            id="question"
            type="text"
            name="question"
            className="validate"
            // value={form.email}
            minLength="4" maxLength="360" required
            onKeyPress={ inputHandler }
          />
          <label htmlFor="question">Введите вопрос:</label>
        </div>
        <button
          className="btn teal"
          onClick={ submitQuestionHandler }
          // disabled={ loading }
        >
          Задать вопрос
        </button>
      </div>
    </div>
  );
};
