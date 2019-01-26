import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import api_key from '../../../maps.config.js';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.closeInfoWindow = this.closeInfoWindow.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showInfoWindow: true,
    })
  }

  closeInfoWindow() {
    this.setState({
      showInfoWindow: false,
    })
  }

  render() {
    return (
      <Map style={{width: '95%', height: '100%', margin: 'auto'}} google={this.props.google} onClick={this.closeInfoWindow}>
        <InfoWindow
          visible={this.state.showInfoWindow}
          marker={this.state.activeMarker}
          onClick={() => {console.log('click')}}
        >
          <div>
            <h3>Current Location</h3>
          </div>
        </InfoWindow>
        <Marker onClick={this.onMarkerClick}></Marker>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: api_key
})(MapContainer)
