import React, { Component } from 'react';
import { Card, CardTitle, Container, Row, Col, InputGroup, InputGroupAddon, Input, Button, Form } from 'reactstrap';
import axios from 'axios';

import Constants from '../../Constants';
class MoneyBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: ''
    }

    this.handleTransaction = this.handleTransaction.bind(this);
  }

  handleTransaction = e => {
    e.preventDefault();

    axios.post(Constants.apiEndPoint + '/' + this.props.title.toLowerCase(), {
      amount: this.state.amount,
      email: localStorage.getItem('email')
    })
    .then(response => {
      const data = response.data.data;

      if(this.props.title == 'Withdraw')
        data.amount = -data.amount;

      this.props.updateUserData(data.amount);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <Card body>
        <CardTitle>{this.props.title}</CardTitle>
        <Container>
          <Form onSubmit={this.handleTransaction}>
            <Row>
              <Col md="6" sm="12" className="input-resp">
                <InputGroup>
                  <InputGroupAddon addonType="prepend">INR</InputGroupAddon>
                  <Input type="number" placeholder="Amount" 
                    value={this.state.amount}
                    onChange={e => this.setState({ amount: e.target.value })}
                  />
                </InputGroup>
              </Col>
              <Col md="6" sm="12" className="input-resp">
                <Button color="primary">{this.props.title}</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Card>
    );
  }
}

export default MoneyBox;