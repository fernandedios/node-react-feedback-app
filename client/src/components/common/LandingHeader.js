import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LandingHeader extends Component {
  renderContent() {
    const { auth, location } = this.props;
    let header, button, para;

    if (location === 'landing') {
      header = auth ? 'Access your surveys' : 'Create your online survey now!';
      button = <Link to={auth ? '/surveys' : '/auth/google'} className="btn std-btn btn-filled">{auth ? 'Dashboard' : 'Learn More'}</Link>;
      para = 'Get the data you need to make better decisions.';
    }

    if(location === 'surveys') {
      header = <h1>Create A New Survey</h1>;
      para = 'Aliquam condimentum, quam at consequat suscipit, elit odio bibendum purus, tincidunt mollis dolor leo non lectus. Pellentesque efficitur, mauris fermentum';
      button = '';
    }

    return (
      <div className="pt-3" id="header-home">
        <h1>{header}</h1>
        <p>{para}</p>
        <p>{button}</p>
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
