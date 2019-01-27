import React from 'react';
import { Marker } from 'google-maps-react';

const ServiceMarker = (props) => (
  <Marker position={props.service.location}></Marker>
)

export default ServiceMarker;