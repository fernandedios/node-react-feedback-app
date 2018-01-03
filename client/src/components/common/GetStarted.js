import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const GetStarted = ({ auth }) => {
  let title = '';
  let path = '';
  let btn_txt = '';

  if (auth) {
    title = 'Get Statrted by Creatitng a New Survey';
    path = '/surveys/new';
    btn_txt = 'Create Survey';
  }
  else {
    title = 'Are You Ready To Get Started';
    path = '/auth/google';
    btn_txt = 'Sign Up Now';
  }

  return (
    <section id="home-heading" className="p-5">
      <div className="dark-overlay">
        <div className="row">
          <div className="col">
            <div className="container pt-5">
              <h1>{title}</h1>
              <p className="d-none d-md-block">The most comprehensive online survey tool.</p>
              <p><Link to={path} className="btn std-btn btn-filled">{btn_txt}</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(GetStarted);
