import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { QuestionsPage } from './pages/QuestionsPage/QuestionsPage';
import { UserPage } from './pages/UserPage/UserPage';
import { UsersPage } from './pages/UsersPage/UsersPage';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/users" exact>
          <UsersPage />
        </Route>
        <Route path="/user/:login" exact>
          <UserPage />
        </Route>
        <Route path="/questions" exact>
          <QuestionsPage />
        </Route>
        <Route path="/profile" exact>
          <ProfilePage />
        </Route>
        <Redirect to="/users" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Route path="/users" exact>
        <UsersPage />
      </Route>
      <Route path="/user/:login" exact>
        <UserPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
