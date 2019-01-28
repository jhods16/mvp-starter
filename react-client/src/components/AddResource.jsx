import React from 'react';

const AddResource = (props) => (
  <form>
    <h2>Add a Resource</h2><br></br>
    Name:
    <input type='text' name='name'></input><br></br>
    Type of Service:
    <select name='type'>
      <option>Subxone Clinic</option>
      <option>Methadone Clinic</option>
      <option>Narcan Dispensing</option>
      <option>Needle Exchange/Drop Off</option>
      <option>NA/AA Meeting</option>
      <option>Other Support Meeting</option>
    </select><br></br>
    Address: 
    <input type='text' name='address'></input><br></br>
    Phone: 
    <input type='text' name='phone'></input><br></br>
    Email: 
    <input type='text' name='email'></input><br></br>
    Website: 
    <input type='text' name='website'></input><br></br>
    Insurance Accepted:  <br></br>
    <input type='checkbox' value='Blue Shield'/>Blue Shield<br></br>
    <input type='checkbox'/>UnitedHealth Group<br></br>
    <input type='checkbox'/>Anthem<br></br>
    <input type='checkbox'/>Aetna<br></br>
    <input type='checkbox'/>Cigna<br></br>
    <input type='checkbox'/>Medicare<br></br>
    <input type='checkbox'/>Medi-cal<br></br>
    Accepting Patients: 
    <select name='acceptingPts'>
      <option>yes</option>
      <option>no</option>
    </select>
  </form>
)

export default AddResource;