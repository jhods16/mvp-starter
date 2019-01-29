import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MapContainer from './components/Map.jsx';
import Key from './components/Key.jsx';
import AddResource from './components/AddResource.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      services: [],
      unfilteredServices: [],
      serviceType: '',
      form: true,
    }
    this.selectByService = this.selectByService.bind(this);
    this.changeForm = this.changeForm.bind(this);
  }

  selectByService(e) {
    let type = e.target.getAttribute('value');
    let filteredServices;
    let unfilteredServices = this.state.unfilteredServices;
    console.log(type)
    if (type === 'Show All') {
      this.setState({
        services: unfilteredServices
      })
    } else {
      if (this.state.unfilteredServices === this.state.services) {
        filteredServices = this.state.services.filter((service) => {
          return service.type === type;
        });
        this.setState({
          services: filteredServices
        });
      } else {
        this.setState({
          services: unfilteredServices
        }, () => {
          filteredServices = this.state.services.filter((service) => {
            return service.type === type;
          });
          this.setState({
            services: filteredServices
          });
        })
      }
    }

  }

  changeForm() {
    console.log('called!')
    this.setState({
      form: !this.state.form
    })
  }

  componentDidMount() {
    $.ajax({
      url: '/services', 
      success: (data) => {
        this.setState({
          services: data,
          unfilteredServices: data,
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
    <div>
      <div className='nav'>
        <button onClick={this.changeForm}>{this.state.form ? 'Add a Resource' : 'View Map' }</button>
      </div>
      {this.state.form === true ?
        <div>
          <Key selectByService={this.selectByService}/>
          <MapContainer services={this.state.services}></MapContainer> 
        </div>: 
        <AddResource changeForm={this.state.changeForm}/>
      }
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));