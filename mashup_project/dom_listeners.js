// DOM listeners
let openMarker
var mapDiv = document.getElementById('map');

// closes markers
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

// handles checkboxes
if ($('#hawksworth').prop('checked') === false) {
  hawksworthMarker.close()
}