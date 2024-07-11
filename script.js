// Initialize the map centered on South America with a specific zoom level
var map = L.map('map').setView([-33.7833, -47.8667], 4); // Coordinates roughly center of South America

// Set up the OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define the bounding box for South America
var southAmericaBounds = [
    [-56, -82], // Southwest coordinates (latitude, longitude)
    [15, -30]   // Northeast coordinates (latitude, longitude)
];

// Restrict the map to the South America bounds
map.setMaxBounds(southAmericaBounds);
map.on('drag', function() {
    map.panInsideBounds(southAmericaBounds, { animate: false });
});

// Custom red marker icon
//var redMarker = L.AwesomeMarkers.icon({
  //  icon: 'info-sign',
   // markerColor: 'red'
//});

// Function to update the info box content
function updateInfoBox(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('info-content').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Add a red marker for Mendoza
var markerMendoza = L.marker([-32.8895, -68.8458]).addTo(map);
markerMendoza.bindPopup('<b>Millcayac</b>');
markerMendoza.on('click', function() {
    updateInfoBox('documents/Millcayac.html');
});

// Add other markers and bind popups with hyperlinks to documents
var marker1 = L.marker([-31.534167, -68.526111]).addTo(map);
marker1.bindPopup('<a>Allentiac</a>');
marker1.on('click', function() {
    updateInfoBox('documents/Allentiac.html');
});

var marker3 = L.marker([-38.883333, -73.283333]).addTo(map); // Example coordinates for São Paulo
marker3.bindPopup('<a>Mapudungun</a>');
marker3.on('click', function() {
    updateInfoBox('documents/Mapudungun.html');
});

var marker4 = L.marker([-49.126, -74.413]).addTo(map); // Example coordinates for São Paulo
marker4.bindPopup('<a>Qawasqar</a>');
marker4.on('click', function() {
    updateInfoBox('documents/Qawasqar.html');
});
/*
var marker5 = L.marker([-52.776752, -69.290994]).addTo(map); // Example coordinates for São Paulo
marker5.bindPopup('<a>Selk'nam</a>');
marker5.on('click', function() {
    updateInfoBox('documents/Selknam.html');
});

var marker6 = L.marker([-52, -71.249997]).addTo(map); // Example coordinates for São Paulo
marker6.bindPopup('<a>Tehuelche</a>');
marker6.on('click', function() {
    updateInfoBox('documents/Tehuelche.html');
});

var marker7 = L.marker([-46.5, -74.416667]).addTo(map); // Example coordinates for São Paulo
marker7.bindPopup('<a>Chono</a>');
marker7.on('click', function() {
    updateInfoBox('documents/Chono.html');
});

var marker8 = L.marker([-54.911111, -65.9925]).addTo(map); // Example coordinates for São Paulo
marker8.bindPopup('<a>Haush</a>');
marker8.on('click', function() {
    updateInfoBox('documents/Haush.html');
});

var marker9 = L.marker([-36.4442, -66.503598]).addTo(map); // Example coordinates for São Paulo
marker9.bindPopup('<a>Gününa Küne</a>');
marker9.on('click', function() {
    updateInfoBox('documents/GununaKune.html');
});

var marker10 = L.marker([-35.334986, -65.836618]).addTo(map); // Example coordinates for São Paulo
marker10.bindPopup('<a>Gününa Yajich</a>');
marker10.on('click', function() {
    updateInfoBox('documents/GununaYajich.html');
});
*/
