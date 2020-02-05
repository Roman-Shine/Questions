import React from 'react';
import * as PropTypes from 'prop-types';
import { AnswerForm } from '../AnswerForm/AnswerForm';
import { useDispatch } from 'react-redux';
import {fetchPutQuestion, fetchQuestion} from '../../redux';

export const QuestionsAnswersCard = ({ question, isPrivate }) => {
  const dispatch = useDispatch();

  const updateQuestionHandler = async (str) => {
    const newData = {
      ...question,
      answer: str
    };
    await dispatch(fetchPutQuestion(newData));
    await dispatch(fetchQuestion());
  };

  if (isPrivate) {
    return (
      <div className="card indigo lighten-5">
        <div className="card-content">
          <strong>
            {question.question}
          </strong>
        </div>
        <div className="card-action">
          <div className="row mb-0">
            <div className="col s9">
              {question.answer}
            </div>
            <div className="col s3 like-box">
              <i className="material-icons">favorite</i> {question.likes}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card indigo lighten-5">
      <div className="card-content">
        <strong>
          {question.question}
        </strong>
      </div>
      <div className="card-action">
        <div className="row mb-0">
          {question.answer ? (
            <>
              <div className="col s9">
                {question.answer}
              </div>
              <div className="col s3 like-box">
                <i className="material-icons">favorite</i> {question.likes}
              </div>
            </>
          ) : (
            <div className="col s12">
              <AnswerForm updateQuestionHandler={updateQuestionHandler}/>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

QuestionsAnswersCard.propTypes = {
  question: PropTypes.shape({
    answer: PropTypes.string,
    likes: PropTypes.number,
    _id: PropTypes.string,
    question: PropTypes.string,
    owner: PropTypes.string,
    date: PropTypes.string,
    __v: PropTypes.number,
  }),
  isPrivate: PropTypes.bool,
};
