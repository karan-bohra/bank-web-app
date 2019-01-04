import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

class Userinfo extends Component {
  render() {
    return (
      <Card body>
        <CardTitle><h5>{this.props.userData.name}</h5></CardTitle>
        <CardText className={ `text-right top-margin ` } >Account Balance: 
          <br/>
          <span className="current-balance">Rs. {this.props.userData.currentBalance || 0}</span>
        </CardText>
      </Card>
    );
  }
}

export default Userinfo;