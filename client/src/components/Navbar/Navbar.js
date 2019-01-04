import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logOut() {
    localStorage.setItem('isLoggedIn', false);
    this.props.logInOut();
  }

  render(){
    return (
      <div>
        {this.props.isLoggedIn ? (
          <Navbar color="light" light className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand="md">
            <Button color="info" onClick={this.props.toggle}>
              <FontAwesomeIcon icon={faAlignLeft}/>
            </Button>
            <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#" onClick={this.logOut}>Logout</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
          </Navbar>
        ) : (
          <Navbar color="light" light className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand="md">
            <div>Bank App</div>
          </Navbar>
        )}
      </div>
    );
  }
}

export default NavBar;