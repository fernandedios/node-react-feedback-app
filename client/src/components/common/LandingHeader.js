import React from 'react';

const LandingHeader = () => {
  return (
    <div className="header-style-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="pt-3" id="header-home">
              <h1>Create your online survey now!</h1>
              <p>Get the data you need to make better decisions.</p>
              <p><a href="/auth/google" className="btn std-btn btn-filled">Learn More</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
