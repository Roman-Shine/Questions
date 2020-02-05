import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux';
import { UserCard } from '../../components/UserCard/UserCard';
import { Loader } from '../../components/Loader';
import { useMessage } from '../../hooks/message.hook';

export const UsersList = () => {
  const users = useSelector(store => store.users.usersData);
  const loading = useSelector(store => store.users.loading);
  const error = useSelector(store => store.users.error);
  const dispatch = useDispatch();
  const message = useMessage();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    message(error, 'red');
    return <p>Ошибка загрузки пользователей. Обновите страницу или попробуйте позже.</p>;
  }

  return (
    <div>
      <div className="row">
        { users.map((user) => {
          return (
            (user._id && <UserCard user={user} key={user._id} />) || <p>Нет ни одного пользователя</p>
          );
        }) }
      </div>
    </div>
  );
};
