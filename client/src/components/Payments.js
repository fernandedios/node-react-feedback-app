import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    // currency is in USD, amount is in cents (5 USD)
    // token is sent by stripe
    return (
      <StripeCheckout
        name="Surveyly"
        description="$5 for 5 survey credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button type="button" id="btn-add-creds" className="btn std-btn btn-sm btn-filled">
          <i className="fa fa-credit-card-alt"></i> Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
