import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LandingHeader extends Component {
  renderContent() {
    return (
      <div className="pt-3" id="header-home">
        <h1>{this.props.auth ? 'Access your surveys' : 'Create your online survey now!'}</h1>
        <p>Get the data you need to make better decisions.</p>
        <p><Link to={this.props.auth ? '/surveys' : '/auth/google'} className="btn std-btn btn-filled">{this.props.auth ? 'Dashboard' : 'Learn More'}</Link></p>
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
