import React, { useState, useEffect } from 'react';
import MapMarker from './MapMarker';

const MarkerContainer = () => {
    console.log("bye");
    let data = [
        {
            lat: 29.6481046,
            lng: -82.34400543
        },
        {
            lat: 29.6481048,
            lng: -82.34400542
        },
        {
            lat: 29.6481042,
            lng: -82.34400541
        },
    ];
    const markers = data.map(values => {
        return(
            <MapMarker coords={values}/>
        );
    });
    return markers;
}

export default MarkerContainer;

