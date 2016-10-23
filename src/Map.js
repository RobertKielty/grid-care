import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import './Map.css';
//        width={'600px'}
//        height={'300px'}

class Map extends Component {
    render() {
	const coords = {
	    lat: 53.43333,
	    lng: -7.95 
	};
    return (
      <div className="Map">
	    <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{v: '3.25', key: 'AIzaSyB0-AM6hG5OYL22cuIMylgSFCSBxwOO958'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'GRID ALERT HERE!'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
      </div>
    );
  }
}

export default Map;
