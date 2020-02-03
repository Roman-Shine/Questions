import React from 'react';
import { UsersList } from '../../modules/UsersList/UsersList';


export const UsersPage = () => {
  return (
    <div>
      <h1>Пользователи</h1>
      <h5 className="mb-2">
        Этим людям вы можете задать свой анонимный вопрос, или просмотреть уже заданные им вопросы,
        и ответы на них:
      </h5>
      <UsersList />
    </div>
  );
};
