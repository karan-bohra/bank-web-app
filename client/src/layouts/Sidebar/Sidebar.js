import React from 'react';
import { NavItem, Nav } from 'reactstrap';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faLevelUpAlt, faLevelDownAlt, faLock, faArrowsAltH } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  render() {
    return (
      <div className={classNames('sidebar', {'is-open': this.props.isOpen})}>
        <div className="sidebar-header">
          <a color="info" onClick={this.props.toggle} style={{color: '#fff'}} >&times;</a>
          <h3>Bank App Sidebar</h3>
        </div>
        <Nav vertical className="list-unstyled pb-3">
          <NavItem className="sub-menu">
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-2"/>
            <Link to="/">Dashboard</Link>
          </NavItem>          
          <NavItem className="sub-menu">
            <FontAwesomeIcon icon={faLevelDownAlt} className="mr-2"/>
            <Link to="/deposit">Deposit</Link>
          </NavItem>
          <NavItem className="sub-menu">
            <FontAwesomeIcon icon={faLevelUpAlt} className="mr-2"/>
            <Link to="/withdraw">Withdraw</Link>
          </NavItem>
          <NavItem className="sub-menu">
            <FontAwesomeIcon icon={faArrowsAltH} className="mr-2"/>
            <Link to="/transactions">Transactions</Link>
          </NavItem>
        </Nav>
      </div>
      );
  }
}

export default SideBar;