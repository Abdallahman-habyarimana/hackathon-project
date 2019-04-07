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
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 43.6761256,
          lng: -79.4097139
        }}
      >
        <Marker
          name={"whgit re chris is"}
          onClick={this.onMarkerClick}
          title={"The marker`s title will appear as a tooltip."}
          position={{ lat: 43.676041, lng: -79.403844 }}
        />
        <Marker
          name={"da skool"}
          onClick={this.onMarkerClick}
          title={"The marker`s title will appear as a tooltip."}
          position={{ lat: 43.676326, lng: -79.41051 }}
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
  apiKey: "AIzaSyBqLt0dATSX7fhlrC3Ka-T2jalVrPIKyeQ"
})(MapContainer);
