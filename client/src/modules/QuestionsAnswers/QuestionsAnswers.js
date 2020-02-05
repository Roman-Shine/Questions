import React from 'react';
import * as PropTypes from 'prop-types';
import {UserCard} from "../../components/UserCard/UserCard";
import { QuestionsAnswersCard } from '../../components/QuestionsAnswersCard/QuestionsAnswersCard';
import './QuestionsAnswers.sass';

export const QuestionsAnswers = ({ questions, onlyHasAnswer = true }) => {

  if (!onlyHasAnswer) {
    if (!questions.length) {
      return (
        <div className="pt-2 questionsList">
          <h5 className="mt-0">Вам пока не задали ни одног овопроса</h5>
        </div>
      );
    }
    return (
      <div className="pt-2 questionsList">
        {questions.map((question) => {
          return <QuestionsAnswersCard key={question._id} question={question}  isPrivate={onlyHasAnswer}/>;
        })}
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="pt-2 questionsList">
        <h5 className="mt-0">У данного пользователя пока нет ответов на вопросы</h5>
      </div>
    );
  }
  return (
    <div className="pt-2 questionsList">
      <h5 className="mt-0 mb-2">Ответы пользователя:</h5>
      {questions.map((question) => {
        return <QuestionsAnswersCard key={question._id} question={question} isPrivate={onlyHasAnswer}/>;
      })}
    </div>
  );
};

UserCard.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    answer: PropTypes.string,
    likes: PropTypes.number,
    _id: PropTypes.string,
    question: PropTypes.string,
    owner: PropTypes.string,
    date: PropTypes.string,
    __v: PropTypes.number
  })),
  onlyHasAnswer: PropTypes.bool,
};
