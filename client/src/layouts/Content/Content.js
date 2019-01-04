import React from 'react';
import classNames from 'classnames';
import { Card, CardText, Container } from 'reactstrap';
import axios from 'axios';

import NavBar from '../../components/Navbar';
import Routes from '../../routes';
import Constants from '../../Constants';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      currentBalance: '',
      accountNumber: ''
    }
  }

  componentDidMount(){
    const data = 
    axios.get(Constants.apiEndPoint + '/get-user-info/' + localStorage.getItem('email'))
    .then(response => {
      const data = response.data.data[0];console.log(data);
      this.setState({
        name: data.name,
        email: data.email,
        currentBalance: data.currentBalance,
        accountNumber: data.accountNumber
      })
    })
    .catch(error => {

    });
  }

  render() {
    return (
      <Container fluid className={classNames('content', {'is-open': this.props.isOpen})}>
        <NavBar 
          toggle={this.props.toggle} 
          isLoggedIn={this.props.isLoggedIn} 
          logInOut={this.props.logInOut}
        />
        <Routes userData={this.state} />
        <Card body>
          <CardText className="text-right">
            Created with love by <b>Karan Bohra</b>
          </CardText>
        </Card>
      </Container>
    );
  }
}

export default Content;