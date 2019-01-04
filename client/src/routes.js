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
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<Switch>
	      <Route path="/dashboard"
          render={
            (props) => 
              <LoadableDashboard {...this.props} />
          }
        />
        <Route path="/deposit"
          render={
            (props) => 
              <LoadableDeposit {...this.props} />
          }
        />
        <Route path="/withdraw"
          render={
            (props) => 
              <LoadableWithdraw {...this.props} />
          }
        />
        <Route path="/transactions"
          render={
            (props) => 
              <LoadableTransactions {...this.props} />
          }
        />
	      <Redirect from="/" to="/dashboard" />
	    </Switch>
    );
  }
}

export default Routes;
