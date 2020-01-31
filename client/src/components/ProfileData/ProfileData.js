import React from 'react';
import * as PropTypes from 'prop-types';
import userDefaultImage from '../../assets/img/user-default.png';

export const ProfileData = ({ login, name, secondName, questions }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={userDefaultImage} alt="Avatar"/>
      </div>
      <div className="card-content">
        <h6 className="indigo-text">
          {login}
        </h6>
        <p>{name} {secondName}</p>
      </div>
      <div className="card-action">
        <span className="card-title teal-text">Впоросов: {questions.length}</span>
      </div>
    </div>
  );
};

ProfileData.propTypes = {
  login: PropTypes.string,
  name: PropTypes.string,
  secondName: PropTypes.string,
  questions: PropTypes.arrayOf(PropTypes.object)
};
