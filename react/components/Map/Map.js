import React from 'react';
import { render } from 'react-dom';

import './Map.styl';

const { Map, TileLayer, Marker, Popup } = window.ReactLeaflet;

export const Test = React.createClass({

  constructor: function () {
    //super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    };
  },

  componentDidMount: function () {},

  render () {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
});

export default Test;
