const map = L.map('map').setView([22.9074872,79.07306671], 5);

const titleUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tiles=L.tileLayer(titleUrl,{attribution});

tiles.addTo(map);

L.marker([22.9074872,79.07306671]).addTo(map);


// function onMapClick(e) {
//   var lat = e.latlng.lat;
//   var lng = e.latlng.lng;
  
//   var marker = L.marker([lat, lng]).addTo(map);

//   console.log("Clicked location: Latitude - " + lat + ", Longitude - " + lng);
// }
// // Add click event listener to the map
// map.on('click', onMapClick);


function showLocation(location) {
    // Get user location coordinates (latitude and longitude)
    var lat = location.coords.latitude;
    var lng = location.coords.longitude;
    
    // Create a marker for the user location
    var marker = L.marker([lat, lng]).addTo(map);
    
    // Set the map center to the user location
    map.setView([lat, lng], 13); // Adjust zoom level as needed
  }
  
  function errorHandler(err) {
    console.error('Error obtaining location', err);
  }
  
  // Request user location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, errorHandler);
  } else {
    console.error("Geolocation is not supported by this browser.");
  }