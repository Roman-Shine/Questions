import React from 'react';
import userDefaultImage from '../../assets/img/user-default.png'

export const ProfileData = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={userDefaultImage} alt="Avatar"/>
      </div>
      <div className="card-content">
        <h6>
          {'Login'}
        </h6>
        <p>{'Имя'} {'Фамилия'}</p>
      </div>
      <div className="card-action">
        <span className="card-title teal-text">Впоросов: {0}</span>
      </div>
    </div>
  );
};
