import { getCenter } from 'geolib';
import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';



function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({});

    console.log(selectedLocation)

    const coordinates = searchResults.map(result => ({
        latitude: result.lat,
        longitude: result.long,
    }))

    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        lat: center.latitude,
        lng: center.longitude,
        zoom: 13,
    });

    const defaultLatLng = {
        lat: center.latitude,
        lng: center.longitude,
    };

    const CustomMarker = ({ text }) =>
        <div onClick={() => setSelectedLocation(text)} className='cursor-pointer'>
            <p className='text-xs font-bold'>{text}</p>

        </div>

    const APIKEY = '';

    return (
        <div className='w-full h-full'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: APIKEY }}
                defaultCenter={defaultLatLng}
                defaultZoom={viewport.zoom}
                onChange={(nextViewport) => setViewport(nextViewport)}
            >
                {searchResults.map(result =>
                (
                    <CustomMarker
                        key={result.lat}
                        lat={result.lat}
                        lng={result.long}
                        text={result.title}
                    />
                ))}
            </GoogleMapReact>
        </div>

    )
}

export default Map