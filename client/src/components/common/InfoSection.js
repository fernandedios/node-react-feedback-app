import React from 'react';

const InfoSection = () => {
  return (
    <section id="info" className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <h3>Keep it simple. Survey.</h3>
            <p>Studies suggest over 80% of the worldwide workforce is disengaged. Disengaged employees lead to dissatisfied customers, churn leads to loss of
    revenue – the impact is staggering. Positive engagement helps your environment, innovation, growth – and your bottom line.</p>
            <a href="/auth/google" className="btn std-btn btn-filled">Learn more</a>
          </div>
          <div className="col-md-6">
            <img src="img/laptop.png" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
