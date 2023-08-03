import {
    Box,
    Flex,
    HStack,
    IconButton,
    Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import { Spinner } from 'react-bootstrap'
import Lens from './Lens.png'
import Placeholder from './Placeholder.png'
import './MapContainer.css'

import {
    useJsApiLoader,
    GoogleMap,
    MarkerF,
    Autocomplete,
    DirectionsRenderer,
    Marker,
    // InfoWindow,
} from '@react-google-maps/api'
import { useRef, useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'



function MapContainer() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyBaALWcoyQjgvTKTB7BtM6C3kddtePabe8',
        libraries: ['places'],
    })
    const [map, setMap] = useState(/** @type google.maps.Map */(null))
    const directionsResponse = useRef(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [showResults, setShowResults] = useState(false)
    const [center, setCenter] = useState({})
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [hospitals, setHospitals] = useState([])
    const [hospitalPos, setHospitalPos] = useState([])
    const {matches} = useContext(GlobalContext)

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
                setCenter(pos)
                setLat(position.coords.latitude)
                setLng(position.coords.longitude)
            })
        }
    }, [])
    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef()

    if (!isLoaded) {
        return <div className='placeholder-map'><img src={Placeholder} alt='placeholder map' /></div>
    }

    const onMapLoad = (map) => {
        setMap(map)
        const request = {
            // eslint-disable-next-line no-undef
            location: new google.maps.LatLng(lat, lng),
            query: "Hospital",
            fields: ["name", "geometry"],
            keyword: "Hospital",
            // eslint-disable-next-line no-undef
            rankBy: google.maps.places.RankBy.DISTANCE,

        };
        // eslint-disable-next-line no-undef
        let service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results, status) => {
            // eslint-disable-next-line no-undef
            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                setHospitals(results)
            }
        });
        // map.fitBounds(bounds);        

    }
    const getHospitals = async () => {
        let copy = [...hospitalPos]
        for (let i = 0; i < hospitals.length; i++) {
            const hospitalLat = hospitals[i].geometry.location.lat()
            const hospitalLng = hospitals[i].geometry.location.lng()
            copy = [...copy, {
                lat: hospitalLat,
                lng: hospitalLng
            }]
            setHospitalPos(copy)
        }
        // const bounds = new google.maps.LatLngBounds();
        // hospitalPos.forEach(({ position }) => bounds.extend(position));
        // map.fitBounds(bounds);
        setShowResults(true)

    }

    const onBoundChange = () => {
        // eslint-disable-next-line no-undef
        const bounds = new google.maps.LatLngBounds();
        hospitalPos.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    }

    const getDirection = async (desPos) => {
        setDistance('')
        setDuration('')

        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: center,
            destination: desPos,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        })
        directionsResponse.current = results
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
        console.log(directionsResponse)
    }

    const setDirection = (desPos) => {
        directionsResponse.current = null
        setDistance('')
        setDuration('')

        getDirection(desPos)
    }

    async function calculateRoute() {
        if (destinationRef.current.value === '') {
            return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: center,
            destination: destinationRef.current.value,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        })
        directionsResponse.current = results
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    function clearRoute() {
        directionsResponse.current = null
        setDistance('')
        setDuration('')
        destinationRef.current.value = ''
    }

    return (
        <>
            <div className='map-hd'>
                <h5>Expert gynecologists, right at<br /> your fingertips</h5>
                <p>Click the button below to get address and direction to hospital close to you. <br />Got an hospital in mind? use the search box instead.</p>
                <button onClick={getHospitals}>Find Gynecologist around</button>
                <div className='destination'>
                    <Autocomplete>
                        <input type='text' placeholder='Destination' ref={destinationRef} />
                    </Autocomplete>
                    <img onClick={calculateRoute} src={Lens} alt='' />
                </div>
            </div>
            <Flex
                position='relative'
                flexDirection='column'
                alignItems='center'
                margin='30px auto'
                h={matches? '73vw': '100vh'}
                overflow='hidden'
            >
                <Box position='absolute' left={0} top={0} h='100%' w='100%'>
                    {
                        lat === null ? <div className='placeholder-map'><img src={Placeholder} alt='placeholder map' /><Spinner /></div>
                            :
                            <GoogleMap
                                id='map'
                                center={center}
                                zoom={15}
                                mapContainerStyle={{ width: '100%', height: '100%' }}
                                options={{
                                    zoomControl: false,
                                    streetViewControl: false,
                                    mapTypeControl: false,
                                    fullscreenControl: false,
                                }}
                                // onBoundsChanged={onBoundChange}
                                onLoad={map => onMapLoad(map)}
                            >
                                <MarkerF position={center} color="white" label="You" clickable />
                                {showResults &&
                                    hospitalPos.map((hospital) => (
                                        <Marker position={hospital} onClick={() => setDirection(hospital)} />
                                    ))
                                }
                                {directionsResponse && (
                                    <DirectionsRenderer directions={directionsResponse.current} />
                                )}
                            </GoogleMap>
                    }
                </Box>
                {distance &&
                    <Box
                        p={4}
                        borderRadius='10px'
                        m={4}
                        bgColor='white'
                        shadow='base'
                        minW='container.md'
                        zIndex='100'
                    >
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
                }
            </Flex>
        </>
    )
}

export default MapContainer
