import React from 'react';
import "./Map.css"
import { MapContainer as LeafletMap, TileLayer, useMap} from "react-leaflet";
import Leaflet from 'leaflet';
import {showDataOnMap} from "../util";

function Map({countries, casesType, center, zoom}) {
    // set the bounds of the map
    const southWest = Leaflet.latLng(-90, -260)
    const northEast = Leaflet.latLng(90, 260)
    const bounds = Leaflet.latLngBounds(southWest, northEast)
    return (
        <div className='map'>
            <LeafletMap center={center} zoom={zoom} maxBounds={bounds} maxBoundsViscosity={1.0}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <ChangeMapView center={center} zoom={zoom}/>
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
  );
}

// set the bounds when choosing different nations
function ChangeMapView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    map.options.minZoom = 1.5;
    return null;
}

export default Map;