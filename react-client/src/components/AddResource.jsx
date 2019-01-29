import React from 'react';
import $ from 'jquery';

class AddResource extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      type: 'Suboxone',
      location: '',
      phone: '',
      email: '',
      website: '',
      insurance: [],
      acceptingPts: 'yes',
    }
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    $.ajax({
      url: '/addresource',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(this.state),
      success: () => {
        console.log('success')
      },
      error: (err) => {
        console.error(err)
      }
    })
    e.target.reset();
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    let insurances = this.state.insurance;
    if (name === 'insurance') {
      insurances.push(value)
      this.setState({
        [name]: insurances
      });
    } else {
      this.setState({[name]: value});
    }
  }
  
  render() {
    return (
      <form onSubmit={this.submitForm} style={{marginLeft: '50px'}}>
        <h2 style={{marginBottom: '0px'}}>Add a Resource</h2><br></br>
        Name:
        <input style={{marginLeft: '33px'}} className='form' type='text' name='name' onChange={this.handleChange.bind(this)}></input><br></br>
        Type:
        <select style={{marginLeft: '33px'}} className='form' name='type' onChange={this.handleChange.bind(this)}>
          <option className='option' value='Suboxone'>Suboxone Clinic</option>
          <option value='Methadone'>Methadone Clinic</option>
          <option value='Narcan'>Narcan Dispensing</option>
          <option value='Needle Exchange'>Needle Exchange</option>
          <option value='NA Meeting'>NA/AA Meeting</option>
          <option value='Other Meeting'>Other Support Meeting</option>
        </select><br></br>
        Address: 
        <input style={{marginLeft: '10px'}} className='form' type='text' name='location' onChange={this.handleChange.bind(this)}></input><br></br>
        Phone: 
        <input style={{marginLeft: '26px'}} className='form' type='text' name='phone' onChange={this.handleChange.bind(this)}></input><br></br>
        Email: 
        <input style={{marginLeft: '26px'}} className='form' type='text' name='email' onChange={this.handleChange.bind(this)}></input><br></br>
        Website: 
        <input style={{marginBottom: '6px', marginLeft: '10px'}} className='form' type='text' name='website' onChange={this.handleChange.bind(this)}></input><br></br>
        Insurance Accepted:  <br></br>
        <input style={{marginTop: '10px'}} className='form' type='checkbox' name='insurance' onChange={this.handleChange.bind(this)} value='Blue Shield'/>Blue Shield<br></br>
        <input className='form' type='checkbox' name='insurance' onChange={this.handleChange.bind(this)} value='UnitedHealth Group'/>UnitedHealth Group<br></br>
        <input className='form' type='checkbox' name='insurance' onChange={this.handleChange.bind(this)} value='Anthem'/>Anthem<br></br>
        <input className='form' type='checkbox' name='insurance' onChange={this.handleChange.bind(this)} value='Aetna'/>Aetna<br></br>
        <input className='form' type='checkbox' name='insurance' onChange={this.handleChange.bind(this)} value='Cigna'/>Cigna<br></br>
        <input className='form' type='checkbox' name='insurance' onChange={this.handleChange.bind(this)} value='Medicare'/>Medicare<br></br>
        <input className='form' type='checkbox' name='insurance' onChange={this.handleChange.bind(this)} value='Medi-cal'/>Medi-cal<br></br>
        Accepting Patients: 
        <select className='form' name='acceptingPts' onChange={this.handleChange.bind(this)}>
          <option value='yes'>yes</option>
          <option value='no'>no</option>
        </select><br></br>
        <button className='form' type='submit'>Add New Resource</button>
      </form>
    )
  }
}
export default AddResource;