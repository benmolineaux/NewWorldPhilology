s// Initialize the map centered on South America with a specific zoom level
var map = L.map('map').setView([-38.7833, -47.8667], 3.7); // Coordinates roughly center of South America

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

// Add markers and bind popups with hyperlinks to documents
var marker1 = L.marker([-38.8684, -73.2514]).addTo(map);
marker1.bindPopup('<a href="documents/LecturasAraucanas.pdf" target="_blank">Isolate: Mapudungun — Valdivia 1910</a>').openPopup();

var marker2 = L.marker([-23.5505, -46.6333]).addTo(map); // Example coordinates for São Paulo
marker2.bindPopup('<a href="documents/document2.pdf" target="_blank">Document 2</a>').openPopup();

var marker2 = L.marker([-32.8895, -68.8458]).addTo(map); // Example coordinates for Mendoza
marker2.bindPopup('<a href="documents/Millcayac.pdf" target="_blank">Huarpe:Millcayac – Valdivia 1607</a>').openPopup();

