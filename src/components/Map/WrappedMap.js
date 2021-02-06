import React from 'react'
import WrappedMap from './Map'; 

export default function MapMain() {
    return (
        <div style={{height: '90vh', width: '100vw'}}>
            <p>Back to the main page</p>
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