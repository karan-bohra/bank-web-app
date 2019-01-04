import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Loadable from 'react-loadable';

/* Load Custom Modules */
import './App.css';
import SideBar from './layouts/Sidebar';
import Content from './layouts/Content';
import Loading from './components/Loading';

const LoadableAuth = Loadable({
  loader: () => import('./layouts/Auth'),
  loading: Loading
});

const collapsableWidth = 770;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: window.innerWidth <= collapsableWidth ? false : true,
      isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  logInOut = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ isOpen: window.innerWidth <= collapsableWidth ? false : true });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <Router>
          {isLoggedIn ? (
            <div className="App wrapper">
              <SideBar toggle={this.toggle} isOpen={this.state.isOpen}/>
              <Content toggle={this.toggle} isOpen={this.state.isOpen} isLoggedIn={isLoggedIn} logInOut={this.logInOut}/>
            </div>
          ) : (
            <div>
              <Redirect to="/" />
              <LoadableAuth title="Sign Up or Sign In" btnText="Go Ahead" logInOut={this.logInOut}/>
            </div>
          )}
      </Router>
    );
  }
}

export default App;