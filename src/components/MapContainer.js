import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '90%',
  height: '80%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
      };
    onMarkerClick = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
     });

    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 43.6761256,
         lng: -79.4097139
        }}
      >
      <Marker
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={''}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBqLt0dATSX7fhlrC3Ka-T2jalVrPIKyeQ'
})(MapContainer);