import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLevelUpAlt, faLevelDownAlt } from '@fortawesome/free-solid-svg-icons';

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  unixTime(unixtime) {
    let u = new Date(unixtime*1000);
    return u.getUTCFullYear() +
      '-' + ('0' + u.getUTCMonth() + 1).slice(-2) +
      '-' + ('0' + u.getUTCDate()).slice(-2) + 
      ' ' + ('0' + u.getUTCHours()).slice(-2) +
      ':' + ('0' + u.getUTCMinutes()).slice(-2)
  };

  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <b>{this.props.title}</b>
        </ListGroupItem>

        {this.props.transactions.map((transaction) =>
          <ListGroupItem key={transaction.timeStamp}>
            <b>{this.unixTime(transaction.timeStamp/1000)}</b>
            <Badge className="badge">
              <FontAwesomeIcon icon={transaction.logType == 'deposit' ? faLevelDownAlt : faLevelUpAlt} />
            </Badge>
            {transaction.logType == 'deposit' ? (<span>Deposited</span>) : (<span>Withdrew</span>)} <b>Rs.</b> 
            <span className="money">{transaction.amount}</span>
          </ListGroupItem>
        )}
      </ListGroup>
    );
  }
}

export default Transactions;