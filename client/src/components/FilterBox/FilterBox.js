import React, { Component } from 'react';
import { Card, CardTitle, CardText, Container, Form, FormGroup, Input, InputGroup, Button, Col, Row } from 'reactstrap';
import DateTimePicker from 'react-datetime-picker';

class FilterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: new Date(),
      to: new Date(),
      type: 'all'
    }
  }

  handleTransaction = e => {
    e.preventDefault();

    this.props.updateFilters(this.state);
  }

  onChangeFrom = date => {this.setState({ from: date });console.log(date)}
  onChangeTo = date => this.setState({ to: date })

  render() {
    return (
      <Card body>
        <CardTitle>Filters</CardTitle>
        <Container>
          <Form onSubmit={this.handleTransaction}>
            <Row>
              <Col md="3" sm="12" className="input-resp">
                <DateTimePicker
                  onChange={this.onChangeFrom}
                  value={this.state.from}
                />
              </Col>
              <Col md="3" sm="12" className="input-resp">
                <DateTimePicker
                  onChange={this.onChangeTo}
                  value={this.state.to}
                />
              </Col>
              <Col md="3" sm="12" className="input-resp">
                <Input type="select" placeholder="From" 
                  value={this.state.type}
                  onChange={e => this.setState({ type: e.target.value })}
                >
                  <option value="all">All</option>
                  <option value="deposit">Deposits</option>
                  <option value="withdraw">Withdrawls</option>
                </Input>
              </Col>
              <Col md="3" sm="12" className="input-resp">
                <Button color="primary">Filter</Button>
              </Col>
            </Row>
            <Row>
            <Col md="3" sm="12" className="input-resp">
              <Button color="secondary">Download</Button>
            </Col>
            </Row>
          </Form>
        </Container>
      </Card>
    );
  }
}

export default FilterBox;