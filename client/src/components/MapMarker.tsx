import React, { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';

const MapMarker = (props: any) => {
    const [location, setLocation] = useState({ lat: props.coords.latitude, lng: props.coords.longitude });
    console.log("hello");
    return (
        <Icon
            lat={location.lat}
            lng={location.lng}
            name='exclamation circle'
            size='big'
        />
    );
}

export default MapMarker;
