<<<<<<< HEAD
/*import '../App.css';
import React, {useState} from 'react';
=======
import '../App.css';
import React, { useState } from 'react';
>>>>>>> e3b96d4c6d4fd3e47592f1ebf74f017e8b6ff8db

export const Map = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates, handelLocationError);
    } else
      alert("Geolocation is not supported by this browser.");
  }


  const getCoordinates = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }


  const handelLocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
      default:
        alert("An unknown error occured.")
    }
  }

  return (
    <div className="Map">
      <h2>
        Geolocation Test
      </h2>

      <button onClick={getLocation}>Get coordinates</button>
      <h4>Coordinates</h4>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      <h4>Google Maps Geocoding</h4>
      <p>Address: {userAddress}</p>
      <img src={`https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap\
      &markers=size:mid%7Ccolor:red%7C${latitude},${longitude}&key=AIzaSyDu4BYAiI5YwgKcxGaoPxElCcbQZSy1OK8`}
      alt="Your Location on Google Maps"/>

    </div>
  );
<<<<<<< HEAD
*/
=======
}
>>>>>>> e3b96d4c6d4fd3e47592f1ebf74f017e8b6ff8db
