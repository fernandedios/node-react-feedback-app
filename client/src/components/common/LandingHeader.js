import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const LandingHeader = ({ auth }) => {
  return (
    <div className="header-style-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="pt-3" id="header-home">
              <h1>{auth ? 'Access your surveys' : 'Create your online survey now!'}</h1>
              <p>Get the data you need to make better decisions.</p>
              <p><Link to={auth ? '/surveys' : '/auth/google'} className="btn std-btn btn-filled">{auth ? 'Dashboard' : 'Learn More'}</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(LandingHeader);
