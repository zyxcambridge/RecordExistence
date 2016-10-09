import '../styles/RootIndex.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import TopNavBar from "./TopNavBar.js"
import Links from "./Links.js"
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import { Collapse } from 'react-bootstrap';
import { Well } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
var Alert = require('react-bootstrap').Alert;
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';






const splashImg = require('../images/ui/general/bg_01.png');
const wellStyles = {maxWidth: 400, margin: '0 auto 10px',bottom:100};

const Home = React.createClass({

  getInitialState() {
    return { showModal: false ,alertVisible: false};
  },

  componentDidMount()
  {
  	this.setState({alertVisible: false});
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },

  handleAlertShow() {
    this.setState({alertVisible: true});
  },

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  },

  render() {


    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
      <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
        <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
        <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
        <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
          <MenuItem eventKey="4.1">Action</MenuItem>
          <MenuItem eventKey="4.2">Another action</MenuItem>
          <MenuItem eventKey="4.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Separated link</MenuItem>
        </NavDropdown>
      </Nav>

      	<nav className="navbarzyx">
    		<Links  />
    		</nav>

      </div>
    );
  }
});

export default Home;