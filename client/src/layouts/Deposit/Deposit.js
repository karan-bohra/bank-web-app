import React, { Component } from 'react';
import Loadable from 'react-loadable';

/* Load Custom Modules */
import Loading from '../../components/Loading';

const LoadableUserinfo = Loadable({
  loader: () => import('../../components/Userinfo'),
  loading: Loading
});

const LoadableMoneyBox = Loadable({
  loader: () => import('../../components/MoneyBox'),
  loading: Loading
});

const LoadableTransactions = Loadable({
  loader: () => import('../../components/Transactions'),
  loading: Loading
});

class Deposit extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <LoadableUserinfo userData={this.props.userData} />
        <LoadableMoneyBox title="Deposit" />
        <LoadableTransactions />
      </div>
    );
  }
}

export default Deposit;