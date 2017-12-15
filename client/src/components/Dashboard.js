import React from 'react';
import { Link } from 'react-router-dom';

import SurveyList from './surveys/SurveyList';
import SurveySamples from './common/SurveySamples';
import Insight from './common/Insight';

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
      <Insight />
      <SurveySamples />
    </div>
  );
}

export default Dashboard;
