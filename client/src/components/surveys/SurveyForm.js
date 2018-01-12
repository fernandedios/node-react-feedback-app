import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import formFields from './formFields';
import validateEmails from '../../utils/validateEmails';


class SurveyForm extends Component {
  renderFields() {
    return (
      _.map(formFields, ({ label, name, size }) => {
        return (
          <div className={`col-md-${size}`}>
            <Field key={name} component={SurveyField} type="text" label={label} name={name} />
          </div>
        );
      })
    );
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header-title">
              <h2 className="heading-title text-center">Add New Survey</h2>
            </div>
          </div>
        </div>

        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          <div className="row">
            {this.renderFields()}

            <div className="col-md-6">
              <Link to="/surveys" className="float-right btn std-btn btn-common">Cancel</Link>
            </div>
            <div className="col-md-6">
              <button class="btn std-btn btn-info-filled" type="submit">
                Next <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// form validation function
function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || ''); // use validateEmails utility

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  // should return an object as required by redux-form
  return errors; // if empty, form is valid
}

export default reduxForm({
  validate, // add validate function
  form: 'surveyForm', // set namespace for form field values -> this.state.form.surveyForm
  destroyOnUnmount: false // persist form data even when this component is unmounted
})(SurveyForm);
