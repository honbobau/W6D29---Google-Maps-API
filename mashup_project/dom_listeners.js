// DOM listeners
let openMarker
var mapDiv = document.getElementById('map');

function closeOpenMarkers() {
  if (openMarker) {
    openMarker.close()
  }
}

function mapcloseOpenMarkers() {
  google.maps.event.addDomListener(mapDiv, 'click', function() {
    closeOpenMarkers()
  });
};