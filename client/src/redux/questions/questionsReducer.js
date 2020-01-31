import {
  // FETCH_QUESTIONS,
  // FETCH_QUESTION_SUCCESS,
  // FETCH_QUESTION_ERROR,
  FETCH_POST_QUESTION,
  FETCH_POST_QUESTION_SUCCESS,
  FETCH_POST_QUESTION_ERROR
} from './questionsTypes';

const initialState = {
  postLoading: false,
  postQuestion: '',
  postError: ''
};

export const postQuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_QUESTION:
      return {
        ...state,
        postLoading: true
      };
    case FETCH_POST_QUESTION_SUCCESS:
      return {
        postLoading: false,
        postQuestion: action.payload
      };
    case FETCH_POST_QUESTION_ERROR:
      return {
        postLoading: false,
        postQuestion: '',
        postError: action.payload
      };
    default: return state
  }
};
