import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

import NavBar from '../../components/Navbar';
import Constants from '../../Constants';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleSignInUp = e => {
    e.preventDefault();
    
    axios.post(Constants.apiEndPoint + '/create-check-user', this.state)
    .then(response => {
      this.props.logInOut();
      localStorage.setItem('email', this.state.email);
      localStorage.setItem('isLoggedIn', true);      
    })
    .catch(error => {

    });
  }

  render() {
  	const { title, btnText } = this.props;
    return (
    	<div>
      	<NavBar isOpen={false} isLoggedIn={false} />
      	<div className="auth-title">
      		<h4>{title}</h4>
      	</div>
      	<br/>
        <Form className="form" onSubmit={this.handleSignInUp}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Full Name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
             />
          </FormGroup>
	        <FormGroup>
	          <Label for="email">Email</Label>
	          <Input type="text" name="email" id="email" placeholder="Email" 
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
	        </FormGroup>
	        <FormGroup>
	          <Label for="password">Password</Label>
	          <Input type="password" name="password" id="password" placeholder="Password" 
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
	        </FormGroup>
	        <Button>{btnText}</Button>
        </Form>
      </div>
    );
  }
}

export default Auth;