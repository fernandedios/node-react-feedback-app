import axios from 'axios';
import { FETCH_USER } from './types';

// promise version
/*export const fetchUser = () => {
   return function(dispatch) {
    axios.get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  }
}; */

// async await version
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data }); // reuse FETCH_USER to update header
};

export const submitSurvey = (values) => {
  return { type: 'SUBMIT_SURVEY' };
};
