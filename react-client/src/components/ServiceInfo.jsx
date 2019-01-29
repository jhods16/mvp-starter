import React from 'react';

const ServiceInfo = (props) => (
  <div>
    <h3>{props.infoContent.name}</h3>
    {props.infoContent.phone ? 
    <p>Phone: {props.infoContent.phone} </p> : null}
    {props.infoContent.email ? 
    <p>Email: <a href={`mailto:${props.infoContent.email}`}l>{props.infoContent.email}</a> </p> : null}
    {props.infoContent.website ? 
    <p>Website: <a href={props.infoContent.website} target='_blank'>{props.infoContent.website}</a></p> : null}
    {props.infoContent.insurance ? 
    <p>Insurance: {props.infoContent.insurance} </p> : null}
    {props.infoContent.acceptingPts ?
      (props.infoContent.acceptingPts === 'yes' ? 
    <p>Accepting Patients: <span style={{color: 'green', fontWeight: 'bold'}}>{props.infoContent.acceptingPts}</span></p> :
      <p>Accepting Patients: <span style={{color: 'red', fontWeight: 'bold'}}>{props.infoContent.acceptingPts}</span></p>) : null}
  </div>
)

export default ServiceInfo;