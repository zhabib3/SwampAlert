
import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const MapContainer = (props: any) => {


  console.log(props.coords);
  const [center, setCenter] = useState({ lat: props.coords.latitude, lng: props.coords.longitude });
  const [zoom, setZoom] = useState(14);
  let key = 0;
  const Markers = props.markers.map((values: { latitude: any; longitude: any; }) => (
    <Icon
            key={key++}
            lat={values.latitude}
            lng={values.longitude}
            name='exclamation circle'
            size='big'
        />
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

