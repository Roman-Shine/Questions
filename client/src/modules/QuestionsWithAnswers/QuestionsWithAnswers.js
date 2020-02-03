import React from 'react';
import * as PropTypes from 'prop-types';
import {UserCard} from "../../components/UserCard/UserCard";
import { QuestionsWithAnswersCard } from '../../components/QuestionsWithAnswersCard/QuestionsWithAnswersCard';
import './QuestionsWithAnswers.sass';

export const QuestionsWithAnswers = ({ questions }) => {
  if (!questions.length) {
    return (
      <div className="pt-2">
        <h5 className="mt-0">У данного пользователя пока нет ответов на вопросы</h5>
      </div>
    );
  }
  return (
    <div className="pt-2 questionsList">
      <h5 className="mt-0 mb-2">Ответы пользователя:</h5>
      {questions.map((question) => {
        return <QuestionsWithAnswersCard key={question._id} question={question}/>;
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
};
