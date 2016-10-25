import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import logo from './logo.svg';

class MadiraNavBar extends Component {
    
    render() {
	function handleSelect(selectedKey) {
	    alert('selected ' + selectedKey);
	};
	const navBarInstance = (
	    <Navbar>
		<Navbar.Header>
		    <Navbar.Brand left>
			<img src={logo} className="App-logo" alt="ESB Networks Logo" />
		    </Navbar.Brand>
		    <Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
		    <Nav>
			<NavItem valign="center"><h3>CERT - Coordinated Emergency Response Tool</h3></NavItem>
		    </Nav>
		</Navbar.Collapse>
	    </Navbar>
	);
	
	return (
	    <div>
		{navBarInstance}
	    </div>
	    
	);
    }
}

export default MadiraNavBar;
