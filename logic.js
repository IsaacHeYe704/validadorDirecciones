var xhttp = new XMLHttpRequest();
var xhttp2 = new XMLHttpRequest();
var lat;
var lng;
var direction = "mi dirección: ";
var responceAddress;

window.onload = function () {
    xhttp2.open("GET", "./file/letras.json", true);
    xhttp2.send();
    xhttp.open("GET", "./file/colombianCities.json", true);
    xhttp.send();
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

xhttp.onreadystatechange = function ()
{
    if (this.readyState === 4 && this.status === 200)
    {
        fillCitySelector1(this.responseText);
    }
};

xhttp2.onreadystatechange = function ()
{
    if (this.readyState === 4 && this.status === 200)
    {
        fillCitySelector2(this.responseText);
    }
};

function fillCitySelector1(jsonResponse) {
    var jsonObject = JSON.parse(jsonResponse);
    var selectOption = "<option value=\"Seleccione\">SELECCIONE UNA CIUDAD</option>";
    for (var i = 0; i < jsonObject.length; i++)
    {
        var city = jsonObject[i];
        selectOption += "<option > " + city.nombre + " </option>";
    }
    document.getElementById("citySelector").innerHTML = selectOption;
}
function fillCitySelector2(jsonResponse) {
    var jsonObject1 = JSON.parse(jsonResponse);
    var selectOption1 = "<option value=\"Seleccione\">SELECCIONE LETRA</option><option value=\" \">NINGUNA</option>";
    for (var i = 0; i < jsonObject1.length; i++)
    {
        var letra = jsonObject1[i];
        selectOption1 += "<option> " + letra.value + " </option>";
    }
    document.getElementById("letra1").innerHTML = selectOption1;
    document.getElementById("letra2").innerHTML = selectOption1;
}

function validarExistencia()
{
    var xhttp3 = new XMLHttpRequest();

    var direccionBuscada = document.getElementById("tipoDeViaSelector").value + "+" + document.getElementById("num1").value + document.getElementById("letra1").value + "+" + document.getElementById("num2").value + document.getElementById("letra2").value + "+" + document.getElementById("num3").value;
    var ciudad = document.getElementById("citySelector").value;
    var loQueSeBusca = "https://maps.googleapis.com/maps/api/geocode/json?address=" + direccionBuscada + ciudad + "&key=AIzaSyAPYVrosQdnYM_hA9ALUN3cVQIF_L3NIxg" + "\"";
    direction = direccionBuscada + ciudad;
    xhttp3.onreadystatechange = function ()
    {
        if (this.readyState === 4 && this.status === 200)
        {
            sacarDireccionGoogle(this.responseText);
        }
    };

    xhttp3.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?address=" + direccionBuscada + "+" + ciudad + "&key=AIzaSyAPYVrosQdnYM_hA9ALUN3cVQIF_L3NIxg", false);
    //alert("https://maps.googleapis.com/maps/api/geocode/json?address="+direccionBuscada+"+"+ciudad+"&key=AIzaSyAPYVrosQdnYM_hA9ALUN3cVQIF_L3NIxg");
    xhttp3.send();
}
function sacarDireccionGoogle(theResponce)
{ 
    var objetoJson = JSON.parse(theResponce);
    responceAddress = objetoJson.results[0].formatted_address.split(",")[0];
    document.getElementById("direccionResponseLable").innerHTML = responceAddress;
    lat = objetoJson.results[0].geometry.location.lat;
    lng = objetoJson.results[0].geometry.location.lng;
    initMap();
    document.getElementById("map").style.display = "block";
    isCorrect();
}
function directionLableUpdate()
{

    document.getElementById("direccionLable").textContent = getvalues();
    document.getElementById("enteredDireccionLable").innerHTML = getvalues();
    document.getElementById("complementLable").innerHTML = document.getElementById("complementoGeneral").value;

    //direction = direccionBuscada + ciudad;
    isCorrect();
}
function getvalues()
{
    var direccionBuscada = "";
    var ciudad = document.getElementById("citySelector").value;
    if (document.getElementById("tipoDeViaSelector").value != "SELECCIONE TIPO DE VIA")
    {
        direccionBuscada += document.getElementById("tipoDeViaSelector").value.toLowerCase() + " " + document.getElementById("num1").value + "";
    }
    if (document.getElementById("letra1").value != "Seleccione")
    {
        direccionBuscada += document.getElementById("letra1").value.toLowerCase() + " #" + document.getElementById("num2").value;
    }
    if (document.getElementById("letra2").value != "Seleccione")
    {
        direccionBuscada += document.getElementById("letra2").value.toLowerCase() + "-" + document.getElementById("num3").value;
    }
//    if(document.getElementById("complemento1").value != "SELECCIONE")
//    {
//        direccionBuscada += " "+document.getElementById("complemento1").value;
//    }


    return direccionBuscada;
}
function isCorrect()
{
    if (document.getElementById("direccionLable").textContent.toLowerCase() == (responceAddress.toLowerCase()))
    {
        document.getElementById("direccionResponseLable").classList.remove('error');
        document.getElementById("direccionLable").classList.add('validated');
        document.getElementById("direccionLable").classList.remove('error');
        document.getElementById("direccionResponseLable").classList.add('validated');

        document.getElementById("statusIconverified").style.display = "block";
        document.getElementById("statusIcon").style.display = "none";
    } else
    {
        document.getElementById("direccionResponseLable").classList.add('error');
        document.getElementById("direccionLable").classList.remove('validated');
        document.getElementById("direccionLable").classList.add('error');
        document.getElementById("direccionResponseLable").classList.remove('validated');

        document.getElementById("statusIconverified").style.display = "none";
        document.getElementById("statusIcon").style.display = "block";

    }
}