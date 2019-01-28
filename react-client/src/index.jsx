import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MapContainer from './components/Map.jsx';
import ServiceInfo from './components/ServiceInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      services: [],
      unfilteredServices: [],
      serviceType: '',
    }
    this.selectByService = this.selectByService.bind(this);
  }

  selectByService(e) {
    let type = e.target.getAttribute('value');
    let filteredServices;
    let unfilteredServices = this.state.unfilteredServices;

    console.log(this.state.unfilteredServices)
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
      <ServiceInfo selectByService={this.selectByService}/>
      <MapContainer services={this.state.services}></MapContainer>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));