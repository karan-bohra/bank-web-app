import React, { Component } from 'react';
import Loadable from 'react-loadable';

/* Load Custom Modules */
import Loading from '../../components/Loading';

const LoadableUserinfo = Loadable({
  loader: () => import('../../components/Userinfo'),
  loading: Loading
});

const LoadableAccountDetails = Loadable({
  loader: () => import('../../components/AccountDetails'),
  loading: Loading
});

const LoadableTransactions = Loadable({
  loader: () => import('../../components/Transactions'),
  loading: Loading
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {console.log(this.props);
    return (
      <div>
        <LoadableUserinfo userData={this.props.userData} />
        <LoadableAccountDetails userData={this.props.userData} />
        <LoadableTransactions />
      </div>
    );
  }
}

export default Dashboard;