import React, { Component } from 'react';
import Loadable from 'react-loadable';
import axios from 'axios';

/* Load Custom Modules */
import Loading from '../../components/Loading';
import Constants from '../../Constants';

const LoadableTransactions = Loadable({
  loader: () => import('../../components/Transactions'),
  loading: Loading
});

const LoadableFilterBox = Loadable({
  loader: () => import('../../components/FilterBox'),
  loading: Loading
});

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 25,
      page: 0,
      type: 'all',
      from: '',
      to: '',
      transactions: []
    }
    this.updateFilters = this.updateFilters.bind(this);
  }

  componentDidMount(){
    this.updateTransactions();
  }

  updateTransactions = () => {
    axios.get(Constants.apiEndPoint + '/transactions/' + localStorage.getItem('email') + '/?limit=' + this.state.limit + '&page=' + this.state.page + '&type=' + this.state.type + '&from=' + this.state.from + '&to=' + this.state.to)
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

  updateFilters = filters => {
    this.setState({
      from: filters.from || '',
      to: filters.to || '',
      type: filters.type || 'all'
    });

    this.updateTransactions();
  }

  render() {
    return (
      <div>
        <LoadableFilterBox updateFilters={this.updateFilters} />
        <LoadableTransactions transactions={this.state.transactions} title="Transactions" />
      </div>
    );
  }
}

export default Transactions;