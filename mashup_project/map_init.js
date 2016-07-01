function initMap() {
  // map initialization 
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: vancouverLatlng
  });

  // // DOM listeners
  // let openMarker
  // var mapDiv = document.getElementById('map');

  // function closeOpenMarkers() {
  //   if (openMarker) {
  //     openMarker.close()
  //   }
  // }

  // function mapcloseOpenMarkers() {
  //   google.maps.event.addDomListener(mapDiv, 'click', function() {
  //     closeOpenMarkers()
  //   });
  // };

  // info windows 
  function infowindowTemplate(title, text, link) {
    return '<div id="content">' +
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">' + title + '</h1>'+
    '<div id="bodyContent">'+
    '<p>' + text + '</p>'+
    '<p><a target="_blank" href=' + link + '>'+
    link + '</a></p>'+
    '</div>'+
    '</div>';
  }

  let hawksworthInfo = new google.maps.InfoWindow({
    content: infowindowTemplate(hawksworthTitle, hawksworthText, hawksworthLink)
  });

  let bluewatercafeInfo = new google.maps.InfoWindow({
    content: infowindowTemplate(bluewatercafeTitle, bluewatercafeText, bluewatercafeLink)
  });

  let laquerciaInfo = new google.maps.InfoWindow({
    content: infowindowTemplate(laquerciaTitle, laquerciaText, laquerciaLink)
  });

  let cioppinosInfo = new google.maps.InfoWindow({
    content: infowindowTemplate(cioppinosTitle, cioppinosText, cioppinosLink)
  });

  let thepeartreeInfo = new google.maps.InfoWindow({
    content: infowindowTemplate(thepeartreeTitle, thepeartreeText, thepeartreeLink)
  });

  let lecrocodileInfo = new google.maps.InfoWindow({
    content: infowindowTemplate(lecrocodileTitle, lecrocodileText, lecrocodileLink)
  });

  let zestInfo = new google.maps.InfoWindow({
    content: infowindowTemplate(zestTitle, zestText, zestLink)
  });

  let cheftonyseafoodInfo = new google.maps.InfoWindow({
    content: infowindowTemplate(cheftonyseafoodTitle, cheftonyseafoodText, cheftonyseafoodLink)
  });

  // markers 
  let hawksworthMarker = new google.maps.Marker({
    position: hawksworthLatlng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Hawksworth'
  });
  hawksworthMarker.addListener('click', function() {
    closeOpenMarkers()
    hawksworthInfo.open(map, hawksworthMarker)
    openMarker = hawksworthInfo;
  });

  let bluewatercafeMarker = new google.maps.Marker({
    position: bluewatercafeLatlng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Blue Water Cafe'
  });
  bluewatercafeMarker.addListener('click', function() {
    closeOpenMarkers()
    bluewatercafeInfo.open(map, bluewatercafeMarker)
    openMarker = bluewatercafeInfo;
  });

  let laquerciaMarker = new google.maps.Marker({
    position: laquerciaLatlng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'La Quercia'
  });
  laquerciaMarker.addListener('click', function() {
    closeOpenMarkers()
    laquerciaInfo.open(map, laquerciaMarker)
    openMarker = laquerciaInfo;
  });

  let cioppinosMarker = new google.maps.Marker({
    position: cioppinosLatlng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Cioppino\'s'
  });
  cioppinosMarker.addListener('click', function() {
    closeOpenMarkers()
    cioppinosInfo.open(map, cioppinosMarker)
    openMarker = cioppinosInfo;
  });
  
  let thepeartreeMarker = new google.maps.Marker({
    position: thepeartreeLatlng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'The Pear Tree'
  });
  thepeartreeMarker.addListener('click', function() {
    closeOpenMarkers()
    thepeartreeInfo.open(map, thepeartreeMarker)
    openMarker = thepeartreeInfo;
  });

  let lecrocodileMarker = new google.maps.Marker({
    position: lecrocodileLatlng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Le Crocodile'
  });
  lecrocodileMarker.addListener('click', function() {
    closeOpenMarkers()
    lecrocodileInfo.open(map, lecrocodileMarker)
    openMarker = lecrocodileInfo;
  });
  
  let zestMarker = new google.maps.Marker({
    position: zestLatlng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Zest'
  });
  zestMarker.addListener('click', function() {
    closeOpenMarkers()
    zestInfo.open(map, zestMarker)
    openMarker = zestInfo;
  });
  
  let cheftonyseafoodMarker = new google.maps.Marker({
    position: cheftonyseafoodLatlng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Chef Tony Seafood'
  });
  cheftonyseafoodMarker.addListener('click', function() {
    closeOpenMarkers()
    cheftonyseafoodInfo.open(map, cheftonyseafoodMarker)
    openMarker = cheftonyseafoodInfo;
  });

  

   
}