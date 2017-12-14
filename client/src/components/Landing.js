import React from 'react';
import LandingHeader from './common/LandingHeader';
import InfoIcons from './common/InfoIcons';
import InfoSection from './common/InfoSection';
import GetStarted from './common/GetStarted';

const Landing = () => {
  return (
    <div>
      <LandingHeader />
      <InfoIcons />
      <GetStarted />
      <InfoSection />
    </div>
  );
};

export default Landing;
