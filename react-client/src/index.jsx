import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MapContainer from './components/Map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      services: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/services', 
      success: (data) => {
        this.setState({
          services: data
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
      {/* <List items={this.state.items}/> */}
      <MapContainer services={this.state.services}></MapContainer>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));