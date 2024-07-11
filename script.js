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

var marker2 = L.marker([-54.933556, -67.591028]).addTo(map); // Example coordinates for São Paulo
marker2.bindPopup('<a>Yámana</a>');
marker2.on('click', function() {
    updateInfoBox('documents/Yahgan.html');
});
