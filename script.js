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
var redMarker = L.AwesomeMarkers.icon({
    icon: 'info-sign',
    markerColor: 'red'
});

// Function to update the info box content
function updateInfoBox(content) {
    document.getElementById('info-content').innerHTML = content;
}

// Add a red marker for Mendoza
var markerMendoza = L.marker([-32.8895, -68.8458], {icon: redMarker}).addTo(map);
markerMendoza.bindPopup('<b>Mendoza</b>');
markerMendoza.on('click', function() {
    updateInfoBox('<h2>Mendoza</h2><p>Details about Mendoza.</p>');
});

// Add other markers and bind popups with hyperlinks to documents
var marker1 = L.marker([-15.7833, -47.8667], {icon: redMarker}).addTo(map);
marker1.bindPopup('<a href="document1.pdf" target="_blank">Document 1</a>');
marker1.on('click', function() {
    updateInfoBox('<h2>Marker 1</h2><p>Details about Marker 1.</p>');
});

var marker2 = L.marker([-23.5505, -46.6333], {icon: redMarker}).addTo(map); // Example coordinates for São Paulo
marker2.bindPopup('<a href="document2.pdf" target="_blank">Document 2</a>');
marker2.on('click', function() {
    updateInfoBox('<h2>Marker 2</h2><p>Details about Marker 2.</p>');
});
