import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin} from "@fortawesome/free-solid-svg-icons";
import { color } from '@chakra-ui/react';


const pinStyle={
  borderRadius: '10px',
  color: '#FC6F92',
  position: 'absolute',
  transform: 'translateZ(0) translate(-50%, -50%)',
  backfaceVisibility: 'hidden'
}
const FacilityPin = () => {
    return(
      <div className='pin'>
        <FontAwesomeIcon style={pinStyle} icon={faLocationPin} size='2x'/>
      </div>
    )
}
export default FacilityPin