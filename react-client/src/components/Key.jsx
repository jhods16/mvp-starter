import React from 'react';

const Key = (props) => {
  return (
    <ul className='key'>
      <li onClick={props.selectByService.bind(this)} value='Needle Exchange'><img src='./images/squat-marker-cyan.svg'></img>Needle Exchanges & Drop Off</li>
      <li onClick={props.selectByService.bind(this)} value='Narcan'><img src='./images/squat-marker-crimson.svg'></img>Narcan/Naloxone Access</li>
      <li onClick={props.selectByService.bind(this)} value='Methadone'><img src='./images/squat-marker-green.svg'></img>Methadone Clinic</li>
      <li onClick={props.selectByService.bind(this)} value='Suboxone'><img src='./images/squat-marker-yellow.svg'></img>Suboxone Clinc</li>
      <li onClick={props.selectByService.bind(this)} value='NA Meeting'><img src='./images/squat-marker-purple.svg'></img>NA/AA Meeting</li>
      <li onClick={props.selectByService.bind(this)} value='Other Meeting'><img src='./images/squat-marker-orange.svg'></img>Other Support Meeting</li>
    </ul>
  )
}


export default Key;