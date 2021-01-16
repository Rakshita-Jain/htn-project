import '../App.css';
import React, { useState, useEffect } from 'react';

export const Map = () => {
  const [userAddress, setUserAddress] = useState("");
  const [coordinates, setCoordinates] = useState({latitude: "43.793607699999995" , longitude: "-79.3284823"});
  const [isAddressVisible, setAddressVisiblitly] = useState(false);

  useEffect(() =>{
    console.log(coordinates.latitude + "" + coordinates.longitude)
    getUserAddress();
  }, [coordinates])

  const getLocation = async () => {
    if (navigator.geolocation) {
      // navigator.geolocation.getCurrentPosition(getCoordinates, handelLocationError);
     
      await navigator.geolocation.getCurrentPosition( (position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        setAddressVisiblitly(true);
      });

    } else
      alert("Geolocation is not supported by this browser.");
  }

 const getUserAddress = async () => {
  
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=AIzaSyDu4BYAiI5YwgKcxGaoPxElCcbQZSy1OK8`);
  const data = await response.json();
  setUserAddress(data.results[0].formatted_address);
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

      <button onClick={()=> getLocation()}>Get coordinates</button>
      <h4>Coordinates</h4>
      <p>Latitude: {coordinates.latitude}</p>
      <p>Longitude: {coordinates.longitude}</p>
      <h4>Google Maps Geocoding</h4>
      <p>Address: { isAddressVisible ? userAddress : "" }</p>
      <img src={`https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap\
      &markers=size:mid%7Ccolor:red%7C${coordinates.latitude},${coordinates.longitude}&key=AIzaSyDu4BYAiI5YwgKcxGaoPxElCcbQZSy1OK8`}
      alt="Your Location on Google Maps"/>

    </div>
  );
}
