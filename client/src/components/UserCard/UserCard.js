import React from 'react';
import * as PropTypes from 'prop-types';
import userDefaultImage from '../../assets/img/user-default.png'
import { useHistory } from 'react-router-dom';
import './UserCard.sass';

export const UserCard = ({ user }) => {
  const history = useHistory();

  const userButtonHandler = () => {
    history.push(`/user/${user.login}`);
  };

  return (
    <div className="col s3">
      <div className="card userCard indigo lighten-5">
        <div className="card-image">
          <img src={userDefaultImage} alt="Avatar"/>
        </div>
        <div className="card-content">
          <h6>
            {user.login}
          </h6>
          <div className="mb-05">
            <p>{user.name} {user.secondName}</p>
          </div>
          <p>Впоросов: { user.questions.length }</p>
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
};

UserCard.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
    secondName: PropTypes.string,
    questions: PropTypes.arrayOf(PropTypes.object),
    _id: PropTypes.string,
  }),
};
