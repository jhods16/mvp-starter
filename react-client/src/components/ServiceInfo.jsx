import React from 'react';
import InfoWindow from 'google-maps-react';

const ServiceInfo = (props) => (
  <div>
    { props.service.name }
  </div>
)

export default ServiceInfo;