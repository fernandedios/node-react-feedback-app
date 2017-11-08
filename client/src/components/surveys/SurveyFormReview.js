import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

// onCancel prop passed to the component by SurveyNew
// formValues prop passed as application level state
// submitSurvey prop passed as action creator
// history prop is passed from withRouter helper
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  // wrap submitSurvey in an arrow function so it is NOT invoked automatically when component is first rendered
  // pass history object to submitSurvey action creator
  // TODO: add loading animation when sending survey 
  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className="yellow darken-3white-text btn-flat" onClick={onCancel}>
        Back
      </button>

      <button className="green btn-flat white-text right" onClick={() => { submitSurvey(formValues, history) }}>
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  // console.log(state);

  return {
    formValues: state.form.surveyForm.values
  };
}

// enable redux, history from react-router-dom
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
