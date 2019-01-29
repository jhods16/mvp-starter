import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import api_key from '../../../maps.config.js';
import iconBuilder from '../buildIcon.js';
import ServiceInfo from './ServiceInfo.jsx';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      infoContent: '',
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.closeInfoWindow = this.closeInfoWindow.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      activeMarker: marker.position,
      selectedPlace: props,
      showInfoWindow: true,
      infoContent: marker.name
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
          // marker={this.state.activeMarker}
          position={this.state.activeMarker}
          onClick={() => {console.log('click')}}
          onClose={this.closeInfoWindow}
        >
            <ServiceInfo infoContent={this.state.infoContent}/>

        </InfoWindow>
        {this.props.services.map(service => 
          <Marker 
            position={service.location} 
            name={{
              name: service.name, 
              phone: service.phone, 
              email: service.email,
              website: service.website,
              insurance: service.insurance[0],
              acceptingPts: service.acceptingPts,
            }} 
            onClick={this.onMarkerClick} 
            marker={this.props.google.maps}
            icon={iconBuilder(service.type)}
            key={service.name}
           >
            </Marker>)}
        <Marker name={{name: 'Current Location'}} onClick={this.onMarkerClick}></Marker>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: api_key
})(MapContainer)
