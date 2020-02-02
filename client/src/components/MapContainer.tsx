
import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon, Button } from 'semantic-ui-react';

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const MapContainer = (props: any) => {


  console.log(props.coords);
  const [center, setCenter] = useState({ lat: props.coords.latitude, lng: props.coords.longitude });
  const [zoom, setZoom] = useState(14);

  const selectColor = (id: String) => {
    return props.selected == id ? 'yellow' : 'black'
  }
  const Markers = props.markers.map((values: { latitude: any; longitude: any; id: any; }) => (
    <Button icon
      value={values.id}
      key={values.id}
      lat={values.latitude}
      lng={values.longitude}
      onClick={props.handleOnClickMarker}
      >
      <Icon
        name='exclamation triangle'
        color={selectColor(values.id)}
        size='big'
      />
    </Button>
  ));

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCnEVlvmx-XTp7YlfeUr48kFqbTxoZfzD4' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {Markers}

      </GoogleMapReact>
    </div>
  );
}

export default MapContainer;

