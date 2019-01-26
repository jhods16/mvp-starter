import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import api_key from '../../../maps.config.js';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Map google={this.props.google}>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: api_key
})(MapContainer)
