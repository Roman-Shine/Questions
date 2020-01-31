import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';

export const QuestionForm = ({ _id }) => {

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const [formData, setFormData] = useState({
    question: '',
    _id
  });
  const inputHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const enterHandler = (event) => {
    if (event.key === 'Enter') {
      submitQuestionHandler();
    }
  };
  const submitQuestionHandler = () => {
    console.log(formData);
  };

  return (
    <div>
      <h4 className="mt-0">Задайте анонимный вопрос:</h4>
      <div className="pt-1">
        <div className="input-field">
          <input
            placeholder="Ваш вопрос:"
            id="question"
            type="text"
            name="question"
            minLength="4" maxLength="360" required
            className="validate"
            value={formData.question}
            onChange={ inputHandler }
            onKeyPress={ enterHandler }
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

QuestionForm.propTypes = {
  _id: PropTypes.string
};
