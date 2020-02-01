import React from 'react';
import MapContainer from "./MapContainer";
import {usePosition} from 'use-position';
import { time } from 'console';


const MapWrapper = () => {
    
    let lat : Number = 29.6481044;
    let long : Number = -82.34400542;
    const { latitude, longitude, timestamp, accuracy } = usePosition(true);
    if (latitude && longitude) {
        lat = latitude;
        long = longitude;
    }
    let coords = {latitude: lat, longitude: long}
    return (
        <MapContainer coords={coords}></MapContainer>
    )
}

export default MapWrapper;