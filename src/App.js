import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Map from './Map';
import MadiraNavBar from './MadiraNavBar';
import Details from './incident/Details';
import Personel from './incident/Personel';
import './App.css';

class App extends Component {
    
    render() {
	const gridInstance = (
	    <Grid fluid>
		<Row>
		    <MadiraNavBar />
		</Row>
		<Row>
		    <Col xs={12} md={3}><Map /> </Col>
		    <Col xs={12} md={3}><Details /></Col>
		    <Col xs={12} md={3}>Personel</Col>
		</Row>
	    </Grid>
	);

	return (
	    <div className="App">
		<div>
		    {gridInstance}
		</div>
	    </div>
	);
    }
}

export default App;
