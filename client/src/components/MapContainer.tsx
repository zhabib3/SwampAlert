import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  padding: '30%',
};
export class MapContainer extends Component {
  render() {
    return (

      <h1>hi</h1>

    //   <Map google= { this.props.google }
    // zoom = { 14}
    // style = { mapStyles }

    //   >

    // {/* <Marker onClick={this.onMarkerClick}
    //                     name={'Current location'} />
    //             <InfoWindow onClose={this.onInfoWindowClose}>
    //                 <div>
    //                 <h1>{this.state.selectedPlace.name}</h1>
    //                 </div>
    //             </InfoWindow> */}
    //   < /Map>
        
    
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyAK6odaJcv0X2kiGhfFBn3EiNSx25AYXmM")
// })(MapContainer)