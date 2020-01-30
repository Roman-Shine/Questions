import React, { useEffect } from 'react';
import { ProfileData } from '../../components/ProfileData/ProfileData';
import { QuestionForm } from '../../components/QuestionForm/QuestionForm';

export const UserPage = () => {

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  return (
    <div className="row">
      <div className="col s4">
        <ProfileData />
      </div>
      <div className="col s8">
        <QuestionForm />
        <h2>Questions list</h2>
      </div>
    </div>
  )
};
