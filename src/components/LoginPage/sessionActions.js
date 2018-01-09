import axios from 'axios';
import {sessionApi} from '../../apiConfig';

// Constants
export const LOG_IN_LOADING = 'LOG_IN_LOADING';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

// Actions
export function logInUser(credentials) {
  return dispatch => {
    dispatch(logInLoading());
    axios.post(sessionApi, { auth: credentials }).then(
      success => {
        sessionStorage.setItem('jwt', success.data.jwt);
        dispatch(logInSuccess());
      },
      error => {
        dispatch(logInFailure(error));
      }
    )
  }
}

// Action Creators
function logInLoading() {
  return {
    type: LOG_IN_LOADING
  };
}

function logInSuccess() {
  return {
    type: LOG_IN_SUCCESS
  };
}

function logInFailure(error) {
  return {
    type: LOG_IN_FAILURE,
    error
  };
}