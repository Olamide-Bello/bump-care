import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import UserPin from './UserPin'
import './MapContainer.css'

function MapContainer() {
    const [map, setMap] = useState(null)
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [center1, setCenter1] = useState({})
    const apiHasLoaded = (map, mapsApi) => {
        if (map) {
            map.setOptions({
                gestureHandling: 'greedy',
                mapTypeControl: false,
                minZoom: 2,
                mapsApi,
                autoCompleteService: new mapsApi.places.AutocompleteService(),
                placesService: new mapsApi.places.PlacesService(map),
                directionService: new mapsApi.DirectionsService(),
                geoCoderService: new mapsApi.Geocoder(),
                // IbadanLatLng: new mapsApi.LatLng(lat, lng)
            });
            setMap(map)
        }

    };

    const _onChange = () => {
        setCenter1(center1)
    }

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const pos= {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
                setCenter1(pos)
                setLat(position.coords.latitude)
                setLng(position.coords.longitude)
            })
        }
    }, [map])
    console.log(lat)
    console.log(lng)
    console.log(center1)

    return (
        <div className='map-container'>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyBaALWcoyQjgvTKTB7BtM6C3kddtePabe8',
                    libraries: ['places', 'directions']
                }}
                defaultZoom={11} // Supports DP, e.g 11.5
                center={center1}
                onChange={_onChange}
                
                yesIWantToUseGoogleMapApiInternals
                resetBoundsOnResize={true}
                onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
            >
            </GoogleMapReact>
        </div>
    )
}


// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
// import './MapContainer.css'
// import MapAutoComplete from './MapAutoComplete';

// class MapContainer extends Component {

//         state = {
//             autoCompleteService: null,
//             placesService: null,
//             directionService: null,
//             geoCoderService: null,
//             center: [],
//             lat: null,
//             lng: null

//         }
//         // this.handleClick = this.setCurrentLocation.bind(this)



//     apiHasLoaded = ((map, mapsApi) => {
//         this.setState({
//             mapsApi,
//             autoCompleteService: new mapsApi.places.AutocompleteService(),
//             placesService: new mapsApi.places.PlacesService(map),
//             directionService: new mapsApi.DirectionsService(),
//             geoCoderService: new mapsApi.Geocoder(),
//             singaporeLatLng: new mapsApi.LatLng(1.3521, 103.8198)
//         });
//     })

//     componentDidMount() {

//         if ('geolocation' in navigator) {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 this.setState({
//                     center: [position.coords.latitude, position.coords.longitude],
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude
//                 });
//                 console.log(position.coords.latitude)
//             });
//         }

//         console.log(this.state.center)
//         console.log(this.state.lat)
//         console.log(this.state.lng)
//     }


//     // handleSearch = (() => {
//     //     const { mapsApi, directionService, placesService } = this.state;
//     //     const filteredResults = [];

//     //     // 1. Create places request 
//     //     const placesRequest = {
//     //         location: new mapsApi.LatLng(1.3521, 103.8198),
//     //         type: ['restaurant', 'cafe'],
//     //         query: 'ice cream',
//     //         rankBy: mapsApi.places.RankBy.DISTANCE,
//     //         // radius: 30000, 
//     //     };

//     //     // 2. Search for ice cream shops. Returns max 20 results.
//     //     placesService.textSearch(placesRequest, ((response) => {

//     //         // 3. Calculate traveling time for each location
//     //         for (let i = 0; i < response.length; i++) {
//     //             const iceCreamPlace = response[i];
//     //             const { rating, name } = iceCreamPlace;
//     //             const address = iceCreamPlace.formatted_address; // e.g 80 mandai lake...

//     //             // 4. Create direction request for each location
//     //             const directionRequest = {
//     //                 origin: new mapsApi.LatLng(1.3521, 103.8198), // From
//     //                 destination: address, // To
//     //                 travelMode: 'DRIVING',
//     //             };

//     //             // 5. Make Request
//     //             directionService.route(directionRequest, ((result, status) => {
//     //                 if (status !== 'OK') { return }
//     //                 const travellingRoute = result.routes[0].legs[0];
//     //                 const travellingTimeInMinutes = travellingRoute.duration.value / 60;

//     //                 // 6. Places within limit are added to results
//     //                 if (travellingTimeInMinutes) {
//     //                     filteredResults.push(name);
//     //                 }
//     //             }));

//     //             // 7. Return results in state
//     //             this.setState({ searchResults: filteredResults });
//     //         }
//     //         console.log(this.state)
//     //     }));
//     // });

//     render() {
//         return (
//             <div className="map-container">
//                 {/* <MapAutoComplete state={this.state} /> */}
//                 <GoogleMapReact
//                     bootstrapURLKeys={{
//                         key: 'AIzaSyBaALWcoyQjgvTKTB7BtM6C3kddtePabe8',
//                         libraries: ['places', 'directions']
//                     }}
//                     defaultZoom={11} // Supports DP, e.g 11.5
//                     defaultCenter={{ lat: 1.3521, lng: 103.8198 }}
//                     center={this.state.center}
//                     yesIWantToUseGoogleMapApiInternals={true}
//                     onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
//                 >
//                 </GoogleMapReact>
//             </div>
//         );
//     }
// }
export default MapContainer