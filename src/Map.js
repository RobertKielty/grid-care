import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import './Map.css';
import './App.css';

class Map extends Component {
    render() {
	const coords = {
	    lat: 53.43333,
	    lng: -7.95
	};
	return (
	    <div className="Map">
		<h3 className="componentHeader">Area</h3>
		<Gmaps width={'400px'}
		       height={'300px'}
		       lat={coords.lat}
		       lng={coords.lng}
		       zoom={12}
		       loadingMessage={'Incident Map Location being loaded'}
		       params={{v: '3.25', key: 'AIzaSyB0-AM6hG5OYL22cuIMylgSFCSBxwOO958'}}
		       onMapCreated={this.onMapCreated}>
		    <Marker lat={coords.lat}
			    lng={coords.lng}
			    draggable={true}
			    onDragEnd={this.onDragEnd} />
		    <InfoWindow lat={coords.lat}
				lng={coords.lng}
				content={'GRID ALERT HERE!'}
				onCloseClick={this.onCloseClick} />
		    <Circle lat={coords.lat}		
			    lng={coords.lng}
			    radius={500}
			    onClick={this.onClick} />
		</Gmaps>
	    </div>
	);
    }
}

export default Map;
