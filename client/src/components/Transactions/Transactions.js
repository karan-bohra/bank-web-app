import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLevelUpAlt, faLevelDownAlt } from '@fortawesome/free-solid-svg-icons';

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <b>Transactions</b>
        </ListGroupItem>
        <ListGroupItem>
          <b>Dec, 31, 02:00 PM</b>
          <FontAwesomeIcon icon={faLevelDownAlt} className="mr-2"/>
          Cras justo odio
        </ListGroupItem>
        <ListGroupItem>
          <b>Dec, 31, 02:00 PM</b>
          <FontAwesomeIcon icon={faLevelUpAlt} className="mr-2"/>
          Cras justo odio
        </ListGroupItem>
        <ListGroupItem>
          <b>Dec, 31, 02:00 PM</b>
          <FontAwesomeIcon icon={faLevelUpAlt} className="mr-2"/>
          Cras justo odio
        </ListGroupItem>
        <ListGroupItem>
          <b>Dec, 31, 02:00 PM</b>
          <FontAwesomeIcon icon={faLevelDownAlt} className="mr-2"/>
          Cras justo odio
        </ListGroupItem>
        <ListGroupItem>
          <b>Dec, 31, 02:00 PM</b>
          <FontAwesomeIcon icon={faLevelUpAlt} className="mr-2"/>
          Cras justo odio
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default Transactions;