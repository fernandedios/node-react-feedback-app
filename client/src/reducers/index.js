import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'; // set different variable name to better describe what it does

import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm // set state key to reduxForm reducer
});
