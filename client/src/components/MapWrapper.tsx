import React from 'react';
import MapContainer from "./MapContainer";
import {usePosition} from 'use-position';
import { time } from 'console';
import IIncident from "../interfaces/IIncident";

interface IProps{
    markerData: IIncident[];
  }
const MapWrapper: React.FC<IProps> = ({markerData}) => {

    let lat : Number = 29.6481044;
    let long : Number = -82.34400542;
    const { latitude, longitude, timestamp, accuracy } = usePosition(true);
    if (latitude && longitude) {
        lat = latitude;
        long = longitude;
    }
    let coords = {latitude: lat, longitude: long}
    return (
        <MapContainer coords={coords} markers={markerData}></MapContainer>
    )
}

export default MapWrapper;