import React from 'react';
import * as PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import userDefaultImage from '../../assets/img/user-default.png'
import './UserCard.sass';

export const UserCard = ({ login, name, secondName, questions, questionsKeys = [], isList = true }) => {
  const history = useHistory();

  const userButtonHandler = () => {
    history.push(`/user/${login}`);
  };

  if (isList) {
    return (
      <div className="col s3">
        <div className="card userCard indigo lighten-5">
          <div className="card-image">
            <img src={userDefaultImage} alt="Avatar"/>
          </div>
          <div className="card-content">
            <h6>
              {login}
            </h6>
            <div className="mb-05">
              <p>{name} {secondName}</p>
            </div>
            <p>Ответов: { questionsKeys.length }</p>
          </div>
          <div className="card-action">
            <button
              className="btn indigo"
              onClick={ userButtonHandler }
            >
              В профиль
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card indigo lighten-5">
      <div className="card-image">
        <img src={userDefaultImage} alt="Avatar"/>
      </div>
      <div className="card-content">
        <h5 className="indigo-text mt-0">
          {login}
        </h5>
        <p>{name} {secondName}</p>
      </div>
      <div className="card-action">
        <span>Ответов: { questions.length }</span>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  login: PropTypes.string,
  name: PropTypes.string,
  secondName: PropTypes.string,
  questions: PropTypes.arrayOf(PropTypes.object),
  questionsKeys: PropTypes.arrayOf(PropTypes.string),
  isList: PropTypes.bool
};
