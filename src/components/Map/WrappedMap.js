import React from 'react'
import WrappedMap from './Map'; 

export default function MapMain(props) {
    return (
        <div style={{height: '90vh', width: '80vw', margin: '10%'}}>
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
                libraries=geometry,drawing,places&key=API_KEY`}
                loadingElement={<div style={{height: "100%"}}/>}
                containerElement={<div style={{height: "100%"}}/>}
                mapElement={<div style={{height: "100%"}}/>}
            />
        </div>
    )
}