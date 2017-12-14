import React from 'react';

const InfoIcons = () => {
  return (
    <section id="home-icons" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 text-center">
            <i className="fa fa-cog mb-2"></i>
            <h3>Data Pre-Population</h3>
            <p>Save participants time and effort by pre-populating the survey with information you already know, such as name, company, or gender.</p>
          </div>

          <div className="col-md-4 mb-4 text-center">
            <i className="fa fa-cloud mb-2"></i>
            <h3>True Anonymity</h3>
            <p>Control question flow based on respondents’ answers to ensure no one wastes time on irrelevant questions.</p>
          </div>

          <div className="col-md-4 mb-4 text-center">
            <i className="fa fa-cart-plus mb-2"></i>
            <h3>Easy to Get Started</h3>
            <p>Connect anytime with our support team – real human beings who really want to help.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoIcons;
