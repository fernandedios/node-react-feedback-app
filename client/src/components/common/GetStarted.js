import React from 'react';

const GetStarted = () => {
  return (
    <section id="home-heading" className="p-5">
      <div className="dark-overlay">
        <div className="row">
          <div className="col">
            <div className="container pt-5">
              <h1>Are You Ready To Get Started</h1>
              <p className="d-none d-md-block">The most comprehensive online survey tool.</p>
              <p><a href="/auth/google" className="btn std-btn btn-filled">Sign Up Now</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
