
import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const MapContainer = (props: any) => {
  console.log(props.coords);
  const [center, setCenter] = useState({ lat: props.coords.latitude, lng: props.coords.longitude });
  const [zoom, setZoom] = useState(14);
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCnEVlvmx-XTp7YlfeUr48kFqbTxoZfzD4' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Icon
          lat={29.6481044}
          lng={-82.34400542}
          text="My Marker"
          name='exclamation circle'
          size='big'
          
        />
      </GoogleMapReact>
    </div>
  );
}

export default MapContainer;

// export const usePosition = () => {
//   const [position, setPosition] = useState({});
//   const [error, setError] = useState(null);

//   const onChange = (coords: any) => {
//     setPosition({
//       latitude: coords.latitude,
//       longitude: coords.longitude,
//     });
//   };
//   const onError = (error: any) => {
//     setError(error.message);
//   };
//   useEffect(() => {
//     const geo = navigator.geolocation;
//     // if (!geo) {
//     //   setError('Geolocation is not supported');
//     //   return;
//     // }
//     let watcher = geo.watchPosition(onChange, onError);
//     return () => geo.clearWatch(watcher);
//   }, []);
//   return { ...position, error };
// }

