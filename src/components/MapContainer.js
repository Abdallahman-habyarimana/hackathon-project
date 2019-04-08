import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "50%",
  height: "40%"
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
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
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: 43.6761256,
          lng: -79.4097139
        }}
      >
        <Marker
          name={"The Pour House"}
          onClick={this.onMarkerClick}
          title={"Chris and Renata will be drinking here"}
          position={{ lat: 43.676041, lng: -79.403844 }}
        />
        <Marker
          name={"School"}
          onClick={this.onMarkerClick}
          title={"George Brown College"}
          position={{ lat: 43.676326, lng: -79.41051 }}
        />
        <Marker
          name={"The Green Room"}
          onClick={this.onMarkerClick}
          title={"Peter will be drinking here"}
          position={{ lat: 43.656823, lng: -79.4089527 }}
        />
        <Marker
          name={"Insomnia"}
          onClick={this.onMarkerClick}
          title={"Chloe will be drinking here"}
          position={{ lat: 43.665107, lng: -79.4130197 }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
            <h6>{this.state.selectedPlace.title}</h6>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBqLt0dATSX7fhlrC3Ka-T2jalVrPIKyeQ"
})(MapContainer);
