import { combineReducers } from 'redux';
import users from './components/users/usersReducer';
import session from './components/LoginPage/sessionReducer';

const rootReducer = combineReducers({
  users,
  session
});

export default rootReducer;