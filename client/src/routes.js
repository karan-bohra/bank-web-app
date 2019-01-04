/* Import Node Modules */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

/* Load Custom Modules */
import Loading from './components/Loading';

const LoadableDashboard = Loadable({
  loader: () => import('./layouts/Dashboard'),
  loading: Loading
});

const LoadableDeposit = Loadable({
  loader: () => import('./layouts/Deposit'),
  loading: Loading
});

const LoadableWithdraw = Loadable({
  loader: () => import('./layouts/Withdraw'),
  loading: Loading
});

const LoadableTransactions = Loadable({
  loader: () => import('./layouts/Transactions'),
  loading: Loading
});

class Routes extends Component {
  render() {
    return (
    	<Switch>
	      <Route path="/dashboard"
          render={
            (props) => 
              <LoadableDashboard {...props} userData={this.props.userData} />
          }
        />
        <Route path="/deposit"
          render={
            (props) => 
              <LoadableDeposit {...props} userData={this.props.userData} />
          }
        />
        <Route path="/withdraw"
          render={
            (props) => 
              <LoadableWithdraw {...props} userData={this.props.userData} />
          }
        />
        <Route path="/transactions"
          render={
            (props) => 
              <LoadableTransactions {...props} userData={this.props.userData} />
          }
        />
	      <Redirect from="/" to="/dashboard" />
	    </Switch>
    );
  }
}

export default Routes;
