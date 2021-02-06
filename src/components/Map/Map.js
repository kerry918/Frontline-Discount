import React from "react"; 
// import {GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api"; 
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"; 
import mapStyles from "./mapStyles"; 

const center = {
    lat: 43.6532,
    lng: -79.3832,
};

const options = {
    styles: mapStyles
}

function Map() {
    return (
        <GoogleMap 
            defaultZoom={12}
            defaultCenter={center}
            defaultOptions={options}
        />
    ); 
}

const WrappedMap = withScriptjs(withGoogleMap(Map))


export default WrappedMap; 