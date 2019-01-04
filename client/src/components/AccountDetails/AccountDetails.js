import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

class AccountDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Card body>
        <CardTitle>Account Details:</CardTitle>
        <CardText>
          <b>Account Number: </b>{this.props.userData.accountNumber}<br/>
          <b>Email: </b>{this.props.userData.email}<br/>
          <b>Status: </b>{this.props.userData.accountNumber ? ( <span>Active</span> ) : ( <span>Inactive</span> )}
        </CardText>
      </Card>
    );
  }
}

export default AccountDetails;