import axios from 'axios';
import { usersApi } from '../../apiConfig';

// Constants
export const FETCH_USERS_LOADING = 'FETCH_USERS_LOADING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// Actions
export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersLoading());
    axios.get(usersApi).then(
      success => {
        dispatch(fetchUsersSuccess(success.data));
      },
      error => {
        dispatch(fetchUsersFailure(error));
      }
    );
  };
}

// Action Creators
function fetchUsersLoading() {
  return {
    type: FETCH_USERS_LOADING
  };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    users
  };
}

function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    error
  }
}