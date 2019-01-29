import React from 'react';

const ServiceInfo = (props) => (
  <div>
    <h3>{props.infoContent.name}</h3>
    {props.infoContent.phone ? 
    <p>Phone: {props.infoContent.phone} </p> : null}
    {props.infoContent.email ? 
    <p>Email: {props.infoContent.email} </p> : null}
    {props.infoContent.website ? 
    <p>Website: {props.infoContent.website} </p> : null}
    {props.infoContent.insurance ? 
    <p>Insurance: {props.infoContent.insurance} </p> : null}
    {props.infoContent.acceptingPts ?
      (props.infoContent.acceptingPts === 'yes' ? 
    <p>Accepting Patients: <span style={{color: 'green', fontWeight: 'bold'}}>{props.infoContent.acceptingPts}</span></p> :
      <p>Accepting Patients: <span style={{color: 'red', fontWeight: 'bold'}}>{props.infoContent.acceptingPts}</span></p>) : null}
  </div>
)

export default ServiceInfo;