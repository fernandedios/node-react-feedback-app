import React from 'react';

import SurveyList from './surveys/SurveyList';
import SurveySamples from './common/SurveySamples';
import Insight from './common/Insight';
import LandingHeader from './common/LandingHeader';

const Dashboard = () => {
  return (
    <div>
      <LandingHeader location="dashboard" />
      <SurveyList />
      <Insight />
      <SurveySamples />
    </div>
  );
}

export default Dashboard;
