import React from 'react';

export const QuestionsWithAnswersCard = ({ question }) => {
  return (
    <div className="card indigo lighten-5">
      <div className="card-content">
        <strong>
          {question.question}
        </strong>
      </div>
      <div className="card-action">
        <div className="row mb-0">
          <div className="col s9">
            {question.answer}
          </div>
          <div className="col s3 like-box">
            <i className="material-icons">favorite</i> {question.likes}
          </div>
        </div>

      </div>
    </div>
  );
};
