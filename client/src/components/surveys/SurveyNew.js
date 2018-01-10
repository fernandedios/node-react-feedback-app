import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import LandingHeader from '../common/LandingHeader';

class SurveyNew extends Component {
  // create-react-app component level state init
  state = { showFormReview: false }

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })} />
    }

    return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />
  }

  render() {
    return(
      <div>
        <LandingHeader location="surveys" />
        {this.renderContent()}
      </div>
    );
  }
}

// will dump form values by default if this component is unmounted
export default reduxForm({ form: 'surveyForm' })(SurveyNew);
