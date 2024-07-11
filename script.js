// Initialize the map centered on South America with a specific zoom level
var map = L.map('map').setView([-33.4372, -69.5885], 3.5); // Coordinates for Mendoza

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
    //markerColor: 'red'
//});

// Add a marker for Mendoza
//var markerMendoza = L.marker([-32.8895, -68.8458], {icon: redMarker}).addTo(map); // Coordinates for Mendoza
//markerMendoza.bindPopup('<b>Huarpe:Millcayac – Valdivia 1607</b>').openPopup();

// Add markers and bind popups with hyperlinks to documents
var marker1 = L.marker([-15.7833, -47.8667]).addTo(map);
marker1.bindPopup('<a href="document1.pdf" target="_blank">Document 1</a>').openPopup();

//var marker2 = L.marker([-23.5505, -46.6333]).addTo(map); // Example coordinates for São Paulo
//marker2.bindPopup('<a href="document2.pdf" target="_blank">Document 2</a>').openPopup();
