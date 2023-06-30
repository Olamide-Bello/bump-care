import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    Input,
    Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'

import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState, useEffect } from 'react'

// const center = { lat: 48.8584, lng: 2.2945 }

function MapContainer() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyBaALWcoyQjgvTKTB7BtM6C3kddtePabe8',
        libraries: ['places'],
    })

    const [map, setMap] = useState(/** @type google.maps.Map */(null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [center, setCenter] = useState({})

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
                setCenter(pos)
            })
        }
    }, [])
    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()

    if (!isLoaded) {
        return <p>loading</p>
    }


    async function calculateRoute() {
        if (originRef.current.value === '' || destiantionRef.current.value === '') {
            return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destiantionRef.current.value,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destiantionRef.current.value = ''
    }

    return (
        <Flex
            position='relative'
            flexDirection='column'
            alignItems='center'
            margin='auto'
            h='100vh'
            w='95vw'
            overflow='hidden'
        >
            <Box position='absolute' left={0} top={0} h='100%' w='100%'>
                {/* Google Map Box */}
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                    onLoad={map => setMap(map)}
                >
                    <Marker position={center} />
                    {directionsResponse && (
                        <DirectionsRenderer directions={directionsResponse} />
                    )}
                </GoogleMap>
            </Box>
            <Box
                p={4}
                borderRadius='lg'
                m={4}
                bgColor='white'
                shadow='base'
                minW='container.md'
                zIndex='1'
            >
                <HStack spacing={2} justifyContent='space-between'>
                    <Box flexGrow={1}>
                        <Autocomplete>
                            <Input type='text' placeholder='Origin' ref={originRef} />
                        </Autocomplete>
                    </Box>
                    <Box flexGrow={1}>
                        <Autocomplete>
                            <Input
                                type='text'
                                placeholder='Destination'
                                ref={destiantionRef}
                            />
                        </Autocomplete>
                    </Box>

                    <ButtonGroup>
                        <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
                            Calculate Route
                        </Button>
                        <IconButton
                            aria-label='center back'
                            icon={<FaTimes />}
                            onClick={clearRoute}
                        />
                    </ButtonGroup>
                </HStack>
                <HStack spacing={4} mt={4} justifyContent='space-between'>
                    <Text>Distance: {distance} </Text>
                    <Text>Duration: {duration} </Text>
                    <IconButton
                        aria-label='center back'
                        icon={<FaLocationArrow />}
                        isRound
                        onClick={() => {
                            map.panTo(center)
                            map.setZoom(15)
                        }}
                    />
                </HStack>
            </Box>
        </Flex>
    )
}

export default MapContainer

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