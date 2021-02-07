import React from 'react'
import WrappedMap from './Map'; 

export default function MapMain(props) {
    return (
        <div style={{height: '90vh', width: '100vw'}}>
            <h1><a href="/">
                Back to Main Page{" "}
                <span role="img" aria-label="bear">
                🐻
                </span>
            </a></h1>
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
                libraries=geometry,drawing,places&key=AIzaSyA0V29N5BoeQR7WmmJ0D3C8qe6acXqO8uk`}
                loadingElement={<div style={{height: "100%"}}/>}
                containerElement={<div style={{height: "100%"}}/>}
                mapElement={<div style={{height: "100%"}}/>}
            />
        </div>
    )
}