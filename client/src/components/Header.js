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
          <li className="nav-item"><a className="nav-link" href="/auth/google">Login With Google</a></li>
        );

      default:
        // return an array of li's
        return [
          <li className="nav-item" key="1"><Payments /></li>,
          <li className="nav-item" key="2">
            <Link to="/surveys/new" id="btn-survey" className="btn std-btn btn-sm btn-filled">
              <i class="fa fa-envelope" aria-hidden="true"></i> Add Survey
            </Link>
          </li>,
          <li className="nav-item" key="3"><a className="nav-link" href="#">Credits: {this.props.auth.credits}</a></li>,
          <li className="nav-item" key="4"><a className="nav-link" href="/api/logout">Logout</a></li>

        ];
    }
  }

  render() {
    // if signed in, link logo to dashboard, otherwise link to root
    return (
      <nav class="navbar navbar-toggleable-sm navbar-light bg-default">
        <div class="container">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="navbar-brand"
            >
            Surveyly
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar2" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbar2">
            <ul class="navbar-nav">
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);
