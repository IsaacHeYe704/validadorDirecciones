// Este ejemplo muestra un formulario de dirección, utilizando la función de autocompletar
// de Google places API para ayudar a los usuarios rellenar la información.

var placeSearch, autocomplete, autocomplete_textarea;
var lat=0;
var lng=0;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};
function initMap()
{
    //cracion del mapa
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lng},
        zoom: 17
    });
    //poner el marcador del lugar
    var marker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: map
    });
    
}
function initialize() {
  // Cree el objeto de autocompletado, restringiendo la búsqueda
  autocomplete = new google.maps.places.Autocomplete(
     (document.getElementById('autocomplete')),
      { types: ['geocode'] });
  // Cuando el usuario selecciona una dirección en el menú desplegable,
  // rellena los campos de dirección en el formulario.
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    fillInAddress();
  });
  autocomplete_textarea = new google.maps.places.Autocomplete((document.getElementById('autocomplete_textarea')),
      { types: ['geocode'] }
  );
  google.maps.event.addListener(autocomplete_textarea, 'place_changed', function() {
    fillInAddress_textarea();
  });
}

function fillInAddress_textarea(){

	var place = autocomplete_textarea.getPlace();
  var lat = place.geometry.location.lat(),
    lng = place.geometry.location.lng();
    alert(lat);
	console.log( place.geometry.location.lat() );
	console.log( JSON.stringify(place) );
	$('#autocomplete_textarea').val( place.formatted_address );
}


function fillInAddress() {
  // Obtener los detalles de lugar el objeto de autocompletado.
  var place = autocomplete.getPlace();
  console.log( JSON.stringify(place) );
  lat = place.geometry.location.lat(),
  lng = place.geometry.location.lng();
  initMap();
  document.getElementById("map").style.display = "block";
  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  // Recibe cada componente de la dirección de los lugares más detalles
  // y llena el campo correspondiente en el formulario.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];

    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
      
    }
  }
}



//ubicación geográfica del usuario,

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude);
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
      autocomplete_textarea.setBounds(circle.getBounds());
    });
  }
}
