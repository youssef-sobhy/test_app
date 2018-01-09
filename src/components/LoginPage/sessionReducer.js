import { LOG_IN_LOADING, LOG_IN_SUCCESS, LOG_IN_FAILURE } from './sessionActions';

const initialState = {
  authenticated: !!sessionStorage.jwt,
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case LOG_IN_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        authenticated: !!sessionStorage.jwt,
        loading: false
      };
    }
    case LOG_IN_FAILURE: {
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