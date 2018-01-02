import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    // .reverse() first to have the latest surveys on top
    return this.props.surveys.reverse().map(survey => {
      return (

        <div key={survey._id} class="pt-3 col-md-4 col-sm-6">
          <div class="pricing-table-block">
            <div class="plan-name">
              <h4 className="text-white">{survey.title}</h4>
            </div>
            <div class="plan-list">
              <ul>
                <li>{survey.body}</li>
                <li>Sent On: {new Date(survey.dateSent).toLocaleDateString()}</li>
                <li>Yes: {survey.yes}</li>
                <li>No: {survey.no}</li>
              </ul>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderSurveys()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
