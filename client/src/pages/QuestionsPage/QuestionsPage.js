import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchQuestion } from '../../redux';
import { QuestionsAnswers } from '../../modules/QuestionsAnswers/QuestionsAnswers';


export const QuestionsPage = () => {
  const questions = useSelector(state => state.questions.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestion());
  }, [dispatch]);

  return (
    <div>
      <h2>Ваши вопросы</h2>
      <QuestionsAnswers questions={questions ? questions : []} onlyHasAnswer={false}/>
    </div>
  );
};
