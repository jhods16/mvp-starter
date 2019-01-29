import React from 'react';

const Key = (props) => {
  return (
    <ul className='key'>
      <button onClick={props.selectByService.bind(this)} value='Needle Exchange'>
        <img src='./images/aqua.png'></img>
        <div onClick={props.selectByService.bind(this)} value='Needle Exchange' className='key_item'>Needle Exchange</div>
      </button>
      <button onClick={props.selectByService.bind(this)} value='Narcan'>
        <img src='./images/purple.png'></img>
        <div onClick={props.selectByService.bind(this)} value='Narcan' className='key_item'>Narcan Dispensing</div>
      </button>
      <button onClick={props.selectByService.bind(this)} value='Methadone'>
        <img src='./images/green.png'></img>
        <div onClick={props.selectByService.bind(this)} value='Methadone' className='key_item'>Methadone Clinic</div>
      </button>
      <button onClick={props.selectByService.bind(this)} value='Suboxone'>
        <img src='./images/yellow.png'></img>
        <div onClick={props.selectByService.bind(this)} value='Suboxone' className='key_item'>Suboxone Clinc</div>
      </button>
      <button onClick={props.selectByService.bind(this)} value='NA Meeting'>
        <img src='./images/pink.png'></img>
        <div onClick={props.selectByService.bind(this)} value='NA Meeting' className='key_item'>NA/AA Meeting</div>
      </button>
      <button onClick={props.selectByService.bind(this)} value='Other Meeting'>
        <img src='./images/blue.png'></img>
        <div onClick={props.selectByService.bind(this)} value='Other Meeting' className='key_item'>Other Support Meeting</div>
      </button>
      <button className='nav' style={{fontFamily: 'monospace'}} value='Show All' onClick={props.selectByService.bind(this)}><b>Show All</b></button>
      <button className='nav' style={{fontFamily: 'monospace'}} onClick={props.changeForm}>{props.currentForm ? <b>Add a Resource</b> : <b>View Map</b> }</button>
    </ul>
  )
}


export default Key;