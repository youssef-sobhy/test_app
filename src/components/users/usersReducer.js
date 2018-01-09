import { FETCH_USERS_LOADING, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userActions';

const initialState = {
  items: [],
  loading: false,
  error: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        items: action.users,
        loading: false
      };
    }
    case FETCH_USERS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
}