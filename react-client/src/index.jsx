import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/DisplayedMarkers.jsx';
import Map from './components/Map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
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
      <Map className='map'></Map>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));