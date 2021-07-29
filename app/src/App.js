import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FiMapPin } from 'react-icons/fi'

import { FormControl, InputLabel, Input, Button, Label  } from '@material-ui/core';


const MarkerComponent = () =>
  <div>
    <FiMapPin/>
  </div>;

class App extends Component {

  state = {
    lat1: null,
    lang1: null,
    lat2: null,
    lang2: null,
    lat3: null,
    lang3: null,
    markersWereAssigned: false
  }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  assignMarkers = () => {
    this.setState({markersWereAssigned: true})    
  }
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'row' }}>
        <FormControl>
          <label >Coordinates Form </label>
          <div style = {{display: 'flex', flexDirection: 'column', paddingTop: '10px' }}>
            <label >Postion 1</label>
            <Input onChange= { (e) => this.setState({lat1: e.target.value})}/>
            <Input onChange= { (e) => this.setState({lng1: e.target.value})}/>
          </div>
          <div style = {{display: 'flex', flexDirection: 'column',  paddingTop: '10px'}} >
            <label>Postion 2</label>
            <Input onChange= { (e) => this.setState({lat2: e.target.value})}/>
            <Input onChange= { (e) => this.setState({lng2: e.target.value})}/>
          </div>
          <div style = {{display: 'flex', flexDirection: 'column',  paddingTop: '10px'}}> 
            <label>Postion 3</label>
            <Input onChange= { (e) => this.setState({lat3: e.target.value})}/>
            <Input onChange= { (e) => this.setState({lng3: e.target.value})}/>
          </div>
          <Button color={'primary'} style={{display: 'flex', justifyContent: 'center'}}
          onClick = {() => this.assignMarkers()}
          >
            Submit
          </Button>
        </FormControl>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        { this.state.markersWereAssigned &&
        <div>
          <MarkerComponent
            lat={this.state.lat1}
            lng={this.state.lng1}
          />
          <MarkerComponent
            lat={this.state.lat2}
            lng={this.state.lng2}
          />
          <MarkerComponent
            lat={this.state.lat3}
            lng={this.state.lat3}
          />
        </div>
        }
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;
