import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Grid,Row,Col} from 'react-bootstrap';
import Map from './Map';
import MadiraNavBar from './MadiraNavBar';
import IncidentDetails from './IncidentDetails';
import './App.css';

class App extends Component {
    
    render() {
	const gridInstance = (
  <Grid fluid>
    <Row>
        <MadiraNavBar />
	<Col xs={12} md={12}>
	  Hi      
	</Col>
    </Row>

    <Row>
      <Col xs={12} md={6}><Map /> </Col>
      <Col xs={12} md={6}><IncidentDetails /></Col>
      <Col xs={12} md={2}><h3> Notified Agency Staff </h3> </Col>
    </Row>

    <Row>
      <Col xs={12} md={12}><h3>Footer</h3></Col>
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
