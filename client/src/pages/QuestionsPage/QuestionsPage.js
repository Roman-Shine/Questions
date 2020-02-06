import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchQuestion } from '../../redux';
import { QuestionsAnswers } from '../../containers/QuestionsAnswers/QuestionsAnswers';
import { Loader } from '../../components/Loader';


export const QuestionsPage = () => {
  const loading = useSelector(state => state.questions.loading);
  const questions = useSelector(state => state.questions.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestion());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h2>Ваши вопросы</h2>
      </div>
      {
        (loading && <Loader />) ||
        <QuestionsAnswers questions={questions} onlyHasAnswer={false}/>
      }
    </div>
  );
};
