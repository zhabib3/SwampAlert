
import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon, Button, Menu } from 'semantic-ui-react';

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const MapContainer = (props: any) => {
  const [center, setCenter] = useState({ lat: props.coords.latitude, lng: props.coords.longitude });
  const [zoom, setZoom] = useState(14);

  const selectColor = (id: String, isCrowd: boolean) => {
    return props.selected == id ? 'yellow' : getColor(isCrowd);
  }

  const getColor = (isCrowd: boolean) => {
    if (!isCrowd)
      return 'red';
    return 'blue';
  }

  const changeCenter = (values: any) => {
    values.id == props.selected ? setCenter({lat: values.latitude, lng: values.longitude}) : console.log()
  }
  const Markers = props.markers.map((values: { latitude: any; longitude: any; id: any; isCrowdData: any}) => (
    <Button inverted circular icon
      styles={{ color: 'black'}}
      value={values.id}
      key={values.id}
      lat={values.latitude}
      lng={values.longitude}
      onClick={props.handleOnClickMarker}
    >
      <Icon
        name='exclamation circle'
        color={selectColor(values.id, values.isCrowdData )}
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

