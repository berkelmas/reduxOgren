import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import studentReducer from './student-reducer';

export default combineReducers({
    authResponse : authReducer,
    studentResponse : studentReducer
});
