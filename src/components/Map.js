import React from 'react';
import "./Map.css"
import { MapContainer as LeafletMap, TileLayer, useMap} from "react-leaflet";
import {showDataOnMap} from "../util";

function Map({countries, casesType, center, zoom}) {
  return (
    <div className='map'>
        <LeafletMap center={center} zoom={zoom}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <ChangeMapView center={center} zoom={zoom} />
            {showDataOnMap(countries, casesType)}
        </LeafletMap>
    </div>
  );
}

function ChangeMapView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

export default Map;