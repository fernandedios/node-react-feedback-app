import React from 'react';

import SurveyList from './surveys/SurveyList';
import SurveySamples from './common/SurveySamples';
import Insight from './common/Insight';

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <Insight />
      <SurveySamples />
    </div>
  );
}

export default Dashboard;
