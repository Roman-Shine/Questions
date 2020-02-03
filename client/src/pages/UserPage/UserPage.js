import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileData } from '../../components/ProfileData/ProfileData';
import { QuestionForm } from '../../components/QuestionForm/QuestionForm';
import { useMessage } from '../../hooks/message.hook';
import { fetchUser } from '../../redux';
import { Loader } from '../../components/Loader';
import { QuestionsWithAnswers } from '../../components/QuestionsWithAnswers/QuestionsWithAnswers';

export const UserPage = () => {
  const userData = useSelector(store => store.user.userData);
  const loading = useSelector(store => store.user.loading);
  const error = useSelector(store => store.user.error);
  const dispatch = useDispatch();
  const message = useMessage();
  const userId = useParams().id;
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    message(error, 'red');
    history.push('/users');
  }

  return (
    <div className="row">
      <div className="col s4">
        <ProfileData
          login={userData ? userData.login : ''}
          name={userData ? userData.name : ''}
          secondName={userData ? userData.secondName : ''}
          questions={userData ? userData.questions : []}
        />
      </div>
      <div className="col s8">
        <QuestionForm _id={userData ? userData._id : ''}/>
        <QuestionsWithAnswers />
      </div>
    </div>
  );
};
