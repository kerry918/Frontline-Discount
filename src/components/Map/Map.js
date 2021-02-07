import React from "react"; 
// import {GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api"; 
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"; 
import mapStyles from "./mapStyles"; 

const center = {
    lat: 43.6532,
    lng: -79.3832,
};

const options = {
    styles: mapStyles

}

export class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: [], 
            isLoaded: false, 
            error: null,
            lat: null, 
            lng: null, 
            selectedPark: null, 
        };
    }

    componentDidMount(props) {
        const location = "Tim Hortons"
        const fields = "photos,formatted_address,name,opening_hours,rating,geometry"
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input="+ location +"&inputtype=textquery&fields="+ fields + "&locationbias=circle:2000@43.6532,-79.3832&key=AIzaSyDJQhRMFHH_zvZq47MDFoiNKqPOGXg2P6A"
        fetch(proxyurl + url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true, 
                        location: result.candidates,
                        lat: result.candidates.geometry.location.lat, 
                        lng: result.candidates.geometry.location.lng
                    }); 
                }, 
                (error) => {
                    this.setState({
                        isLoaded: true, 
                        location: error
                    })
                }
            )
    }
    

    render(props){
        console.log(this.state.location); 
        // console.log(this.state.lat); 
        const { error, location, isLoaded, lat, lng } = this.state; 
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading ... </div>
        } else {
            return (
                <div>
                    <GoogleMap 
                        defaultZoom={12}
                        defaultCenter={center}
                        defaultOptions={options}
                    >
                        <Marker 
                            key={1}
                            position={{
                                lat:43.6532, 
                                lng: -79.3832
                            }}
                            onClick={() => {
                                this.setState({
                                    selectedPark: "yes"
                                })
                            }}
                        />

                        {this.state.selectedPark && (
                            <InfoWindow
                                position={{
                                    lat: 43.6532, 
                                    lng: -79.3832
                                }}
                                onCloseClick={() => {
                                    this.setState({
                                        selectedPark: null
                                    })
                                }}
                            >
                                <div>
                                    Park details
                                    <h2>Starbucks</h2>
                                    <p>Description</p>
                                    <p>Open</p>
                                </div>
                            </InfoWindow>
                        )}
                    </GoogleMap>
                </div>
            ); 
        }
    }
}

const WrappedMap = withScriptjs(withGoogleMap(Map)); 

export default WrappedMap;  