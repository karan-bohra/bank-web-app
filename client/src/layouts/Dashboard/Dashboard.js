import React, { Component } from 'react';
import Loadable from 'react-loadable';
import axios from 'axios';

/* Load Custom Modules */
import Loading from '../../components/Loading';
import Constants from '../../Constants';

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
      page: 0,
      type: 'all',
      limit: 5,
      transactions: []
    }
  }

  componentDidMount(){
    axios.get(Constants.apiEndPoint + '/transactions/' + localStorage.getItem('email') + '/?limit=' + this.state.limit + '&page=' + this.state.page + '&type=' + this.state.type)
    .then(response => {
      const data = response.data.data;
      this.setState({
        transactions: data
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <LoadableUserinfo userData={this.props.userData} />
        <LoadableAccountDetails userData={this.props.userData} />
        <LoadableTransactions transactions={this.state.transactions} title="Recent Transactions" />
      </div>
    );
  }
}

export default Dashboard;