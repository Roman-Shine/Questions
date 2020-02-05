import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useMessage } from '../../hooks/message.hook';
import { fetchPostQuestion, postQuestionError } from '../../redux';

export const QuestionForm = ({ _id }) => {
  const message = useMessage();

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const loading = useSelector(store => store.postQuestions.postLoading);
  const error = useSelector(store => store.postQuestions.postError);
  const postQuestion = useSelector(store => store.postQuestions.postQuestion);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    question: '',
    owner: _id
  });

  useEffect(() => {
    message(error, 'red');
    dispatch(postQuestionError(''));
  }, [message, error, dispatch]);

  useEffect(() => {
    if (postQuestion) {
      message('Ваш вопрос отправлен, когда пользователь ответит на него, вы увидете его в списке ниже', 'teal');
    }
  }, [postQuestion, message]);

  const inputHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const enterHandler = (event) => {
    if (event.key === 'Enter') {
      submitQuestionHandler();
    }
  };
  const submitQuestionHandler = () => {
    dispatch(fetchPostQuestion(formData));
    setFormData({
      question: '',
      owner: _id
    });
  };

  return (
    <div className="mb-2">
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
          disabled={ loading || formData.question.length <= 3 }
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
