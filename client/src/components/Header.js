import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';

class Header extends Component {
  renderContent() {
    // this.props.auth contains the user model
    switch(this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li><a href="/auth/google">Login With Google</a></li>
        );

      default:
        // return an array of li's
        return [
          <li key="1"><Payments /></li>,
          <li key="2" style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
          <li key="3"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    // if signed in, link logo to dashboard, otherwise link to root
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
            >
            Surveyly
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);
