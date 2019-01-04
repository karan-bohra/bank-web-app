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
  }

  handleTransaction = e => {
    e.preventDefault();

    const data =
    axios.post(Constants.apiEndPoint + '/' + this.props.title.toLowerCase(), {
      amount: this.state.amount,
      email: localStorage.getItem('email')
    })
    .then(response => {
      
    })
    .catch(error => {

    });
  }

  render() {
    const { title } = this.props;
    return (
      <Card body>
        <CardTitle>{title}</CardTitle>
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
                <Button color="primary">{title}</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Card>
    );
  }
}

export default MoneyBox;