import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const InfoSection = ({ auth }) => {
  return (
    <section id="info" className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <h3>Keep it simple. Survey.</h3>
            <p>Studies suggest over 80% of the worldwide workforce is disengaged. Disengaged employees lead to dissatisfied customers, churn leads to loss of
    revenue – the impact is staggering. Positive engagement helps your environment, innovation, growth – and your bottom line.</p>
            <Link to={auth ? '/surveys' : '/auth/google'} className="btn std-btn btn-filled">{auth ? 'Dashboard' : 'Learn More'}</Link>
          </div>
          <div className="col-md-6">
            <img src="img/laptop.png" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(InfoSection);
