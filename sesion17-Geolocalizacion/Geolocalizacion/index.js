
function initMap() {
    
    console.log("inicializando mapa");
    const Monumental = { lat: -34.545, lng: -58.4488 };
    const Piramides = {lat: 29.9792, lng: 31.1342};
    const LasVegas = {lat: 36.1673, lng: -115.1485};
   
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: Monumental
    });
    
    const marker = new google.maps.Marker(console.log("El Monumental"),{
      position: Monumental,
      map,
      tittle: "Cancha de River Plate",
    });

    const marker2 = new google.maps.Marker(console.log("Piramides"),{
        position: Piramides,
        map,
        tittle: "Piramides de Egipto"
    });

    const marker3 = new google.maps.Marker(console.log("Las Vegas"),{
        position: LasVegas,
        map,
        tittle: "Las Vegas, Nevada"
    });
  }