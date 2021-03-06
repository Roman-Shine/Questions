import {
  FETCH_QUESTIONS,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  FETCH_POST_QUESTION,
  FETCH_POST_QUESTION_SUCCESS,
  FETCH_POST_QUESTION_ERROR,
  FETCH_PUT_QUESTION,
  FETCH_PUT_QUESTION_SUCCESS,
  FETCH_PUT_QUESTION_ERROR
} from './questionsTypes';

const getInitialState = {
  loading: false,
  questions: [],
  error: ''
};

const postInitialState = {
  postLoading: false,
  postQuestion: '',
  postError: ''
};

const putInitialState = {
  putLoading: false,
  putQuestion: '',
  putError: ''
};

export const questionsReducer = (state = getInitialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        loading: true
      };
    case FETCH_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: action.payload
      };
    case FETCH_QUESTION_ERROR:
      return {
        ...state,
        loading: false,
        questions: [],
        error: action.payload
      };
    default: return state
  }
};

export const postQuestionsReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case FETCH_POST_QUESTION:
      return {
        ...state,
        postLoading: true
      };
    case FETCH_POST_QUESTION_SUCCESS:
      return {
        ...state,
        postLoading: false,
        postQuestion: action.payload
      };
    case FETCH_POST_QUESTION_ERROR:
      return {
        ...state,
        postLoading: false,
        postQuestion: '',
        postError: action.payload
      };
    default: return state
  }
};

export const putQuestionsReducer = (state = putInitialState, action) => {
  switch (action.type) {
    case FETCH_PUT_QUESTION:
      return {
        ...state,
        putLoading: true
      };
    case FETCH_PUT_QUESTION_SUCCESS:
      return {
        ...state,
        putLoading: false,
        putQuestion: action.payload
      };
    case FETCH_PUT_QUESTION_ERROR:
      return {
        ...state,
        putLoading: false,
        putQuestion: '',
        putError: action.payload
      };
    default: return state
  }
};
