import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'; // get all action creators

import TopHeader from './TopHeader';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    // check if user is authenticated
    this.props.fetchUser();
  }

  render() {
    // BrowserRouter accepts only ONE child component
    // exact //- match the path exactly in order to show the component, === exact={true}
    return (
        <BrowserRouter>
          <div>
            <TopHeader />
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
