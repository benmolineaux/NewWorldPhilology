// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Set up the OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers and bind popups with hyperlinks to documents
var marker1 = L.marker([51.5, -0.09]).addTo(map);
marker1.bindPopup('<a href="document1.pdf" target="_blank">Document 1</a>').openPopup();

var marker2 = L.marker([51.51, -0.1]).addTo(map);
marker2.bindPopup('<a href="document2.pdf" target="_blank">Document 2</a>').openPopup();
