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
  const reviewFields = _.map(formFields, ({ label, name, size }) => {
    return (
      <div className={`col-md-${size} mb-2`} key={name}>
        <div className="blog-item-wrapper">
          <div className="blog-item-text">
            <label><b>{label}</b></label>
            <p>{formValues[name]}</p>
          </div>
        </div>
      </div>
    );
  });

  // wrap submitSurvey in an arrow function so it is NOT invoked automatically when component is first rendered
  // pass history object to submitSurvey action creator
  // TODO: add loading animation when sending survey
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="page-header-title">
            <h2 className="heading-title text-center">Please confirm your entries</h2>
          </div>
        </div>
      </div>

      <div className="row">
        {reviewFields}

        <div className="col-md-6">
          <button className="float-right btn std-btn btn-common" onClick={onCancel}>
            Back
          </button>
        </div>
        <div className="col-md-6">
          <button class="btn std-btn btn-info-filled" onClick={() => { submitSurvey(formValues, history) }}>
            Send Survey <i className="fa fa-envelope" aria-hidden="true"></i>
          </button>
        </div>
      </div>
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
