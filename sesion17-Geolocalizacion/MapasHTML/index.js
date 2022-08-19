let marker, map;

// Initialize and add the map
function initMap() {
    // The location of Uluru
    console.log("inicializando mapa");
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru 
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map,
      tittle: "Posicion inicial"
    });
    geoposiciona()
  }
  
  function geoposiciona() {

    if (navigator.geolocation){
        const geoloc = navigator.geolocation
        const options = {timeout: 60000}
        const whatPos = geoloc.watchPosition(centrarmapa, onerror, options)
    } else {
        alert:("Tu navegador no admite geolocalizacion!");
    }
  }

  function centrarmapa(position) {

    const nuevapos = {
      lat : position.coords.latitude,
      lng : position.coords.longitude
    }

    console.log(nuevapos);
    marker.setPosition(nuevapos)
    map.setCenter(nuevapos)
    
  }

  function onerror(error) {

    console.error(Error);
  }