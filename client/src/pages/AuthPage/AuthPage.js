import React, { useEffect } from 'react';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { LoginForm } from '../../components/LoginForm/LoginForm';


export const AuthPage = () => {
  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  return (
    <div className="row">
      <div className="col s6">
        <LoginForm />
      </div>
      <div className="col s6">
        <RegisterForm />
      </div>
    </div>
  )
};
