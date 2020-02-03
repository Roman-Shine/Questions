import axios from 'axios';
import { api } from '../../services/api';
import {
  FETCH_QUESTIONS,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  FETCH_POST_QUESTION,
  FETCH_POST_QUESTION_SUCCESS,
  FETCH_POST_QUESTION_ERROR
} from './questionsTypes';

export const fetchQuestion = () => {
  return async (dispatch) => {
    dispatch(question());
    try {
      const { data } = await axios({
        url: api.questions.list,
        method: 'GET'
      });
      dispatch(questionSuccess(data.newQuestion));
    } catch (error) {
      if (error.response.data.errors && error.response.data.errors.length) {
        dispatch(questionError(
          error.response.data.errors[0].msg
        ));
      } else {
        dispatch(questionError(error.response.data.message || error.message));
      }

    }
  };
};

export const fetchPostQuestion = (formData) => {
  return async (dispatch) => {
    dispatch(postQuestion());
    try {
      const { data } = await axios({
        url: api.questions.postQuestion,
        method: 'POST',
        data: {...formData}
      });
      dispatch(postQuestionSuccess(data.newQuestion));
    } catch (error) {
      if (error.response.data.errors && error.response.data.errors.length) {
        dispatch(postQuestionError(
          error.response.data.errors[0].msg
        ));
      } else {
        dispatch(postQuestionError(error.response.data.message || error.message));
      }

    }
  };
};

export const question = () => {
  return {
    type: FETCH_QUESTIONS
  }
};

export const questionSuccess = (data) => {
  return {
    type: FETCH_QUESTION_SUCCESS,
    payload: data
  }
};

export const questionError = (error) => {
  return {
    type: FETCH_QUESTION_ERROR,
    payload: error
  }
};

export const postQuestion = () => {
  return {
    type: FETCH_POST_QUESTION
  }
};

export const postQuestionSuccess = (data) => {
  return {
    type: FETCH_POST_QUESTION_SUCCESS,
    payload: data
  }
};

export const postQuestionError = (error) => {
  return {
    type: FETCH_POST_QUESTION_ERROR,
    payload: error
  }
};
