import React from 'react';
import ServiceMarker from './ServiceMarker.jsx';
import ServiceInfo from './ServiceInfo.jsx';

const Services = (props) => (
  <div>
    { props.services.map(service => <ServiceMarker service={service}/>)}
    {/* { props.services.map(service => <ServiceInfo service={service}/>)} */}
  </div>
)

export default Services;