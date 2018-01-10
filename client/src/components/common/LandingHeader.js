import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LandingHeader extends Component {
  renderContent() {
    const { auth, location } = this.props;
    let header, button, para;

    if (location === 'landing') {
      header = <h1>{auth ? 'Access your surveys' : 'Create your online survey now!'}</h1>;
      button = <p><Link to={auth ? '/surveys' : '/auth/google'} className="btn std-btn btn-filled">{auth ? 'Dashboard' : 'Learn More'}</Link></p>;
      para = <p>Get the data you need to make better decisions.</p>;
    }

    return (
      <div className="pt-3" id="header-home">
        {header}
        {para}
        {button}
      </div>
    );
  }

  render() {
    return (
      <div className="header-style-3">
        <div className="container">
          <div className="row">
            <div className="col">
              {this.renderContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(LandingHeader);
