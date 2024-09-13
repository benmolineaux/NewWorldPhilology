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

// Create a custom red marker using DivIcon
var redDivIcon = L.divIcon({
    className: 'custom-div-icon',
    html: "<div style='background-color: red; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;'></div>",
    iconSize: [20, 20],
    iconAnchor: [10, 10]
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
var markerMendoza = L.marker([-32.8895, -68.8458], { icon: redDivIcon }).addTo(map);
markerMendoza.bindPopup('<a>Millcayac</a>');
markerMendoza.on('click', function() {
    updateInfoBox('documents/Millcayac.html');
});

// Add other markers and bind popups with hyperlinks to documents
var marker1 = L.marker([-31.534167, -68.526111]).addTo(map);
marker1.bindPopup('<a>Allentiac</a>');
marker1.on('click', function() {
    updateInfoBox('documents/Allentiac.html');
});

var marker2 = L.marker([-54.933385, -67.591667]).addTo(map);
marker2.bindPopup('<a>Yahgan</a>');
marker2.on('click', function() {
    updateInfoBox('documents/Yahgan.html');
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

var marker5 = L.marker([-52.776752, -69.290994]).addTo(map); // Example coordinates for São Paulo
marker5.bindPopup('<a>Selk\'nam</a>');
marker5.on('click', function() {
    updateInfoBox('documents/Selknam.html');
});

var marker6 = L.marker([-43.863889, -69.04722]).addTo(map); // Example coordinates for São Paulo
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

var marker9 = L.marker([-35.7989, -61.918386]).addTo(map); // Example coordinates for São Paulo
marker9.bindPopup('<a>Querandí</a>');
marker9.on('click', function() {
    updateInfoBox('documents/Het.html');
});

var marker10 = L.marker([-35.334986, -65.836618]).addTo(map); // Example coordinates for São Paulo
marker10.bindPopup('<a>Gününa Yajich</a>');
marker10.on('click', function() {
    updateInfoBox('documents/GununaYajich.html');
});

var marker11 = L.marker([-27.2564, -55.5433]).addTo(map); // Example coordinates for São Paulo
marker11.bindPopup('<a>Classical Guaraní</a>');
marker11.on('click', function() {
    updateInfoBox('documents/Guarani.html');
});

var marker12 = L.marker([-31.173144, -63.605339]).addTo(map); // Example coordinates for São Paulo
marker12.bindPopup('<a>Comechingón</a>');
marker12.on('click', function() {
    updateInfoBox('documents/Comechingon.html');
});

var marker13 = L.marker([-27.224938, -67.577070]).addTo(map); // Example coordinates for São Paulo
marker13.bindPopup('<a>Kakán</a>');
marker13.on('click', function() {
    updateInfoBox('documents/Kakan.html');
});

var marker14 = L.marker([-32.360226, -65.050563]).addTo(map); // Example coordinates for São Paulo
marker14.bindPopup('<a>Sanavirón</a>');
marker14.on('click', function() {
    updateInfoBox('documents/Sanaviron.html');
});

var marker14 = L.marker([-29.00, -61.00]).addTo(map); // Example coordinates for São Paulo
marker14.bindPopup('<a>Abipón</a>');
marker14.on('click', function() {
    updateInfoBox('documents/Abipon.html');
});

var marker15 = L.marker([-23.00, -69.00]).addTo(map); // Example coordinates for São Paulo
marker15.bindPopup('<a>Kunza</a>');
marker15.on('click', function() {
    updateInfoBox('documents/Kunza.html');
});

var marker16 = L.marker([-43.19, -70.19]).addTo(map); // Example coordinates for São Paulo
marker16.bindPopup('<a>Teushen</a>');
marker16.on('click', function() {
    updateInfoBox('documents/Teushen.html');
});

var marker17 = L.marker([-17.00, -68.50]).addTo(map); // Example coordinates for São Paulo
marker17.bindPopup('<a>Central Aymara</a>');
marker17.on('click', function() {
    updateInfoBox('documents/Aymara.html');
});

var marker18 = L.marker([-12.74, -75.81]).addTo(map); // Example coordinates for São Paulo
marker18.bindPopup('<a>Jaqaru</a>');
marker18.on('click', function() {
    updateInfoBox('documents/Jaqaru.html');
});

var marker19 = L.marker([-20.92, -66.33]).addTo(map); // Example coordinates for São Paulo
marker19.bindPopup('<a>South Bolivia Quechua</a>');
marker19.on('click', function() {
    updateInfoBox('documents/SouthBoliviaQuechua.html');
});