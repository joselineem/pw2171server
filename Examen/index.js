const rq = require('electron-require');
const main = rq.remote('./main.js');
// $significa alias o sobrenombre y aquí es de jquery
const $ = require("jquery");
var mostrarClima =function(){
	var ciudad = $("#txtCiudad").val();

	if(ciudad == ""){
		alert("Ingrese la ciudad")
		$("#txtCiudad").focus();
		return //Ya no continúa con la función
	}

	var url= "http://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&APPID=4c161114a189a1dab2b3a32e427a4d63";
	
	$.ajax({
		dataType: "json",
		url: url,
		success: function(response){
			if(response.code == 200){//ok.cat
				//$("#txtCiudad").html("");
				$("#imgFoto").show("slow");
				//$("#imgFoto").attr("src",response.data.results[0].thumbnail.path+"."+
										 //response.data.results[0].thumbnail.extension);
				$("#txtLon").html(response.coord[0].lon);
				$("#txtLat").html(response.coord[0].lat);
				$("#txtClima").html(response.weather[0].main);
				$("#txtDescripcion").html(response.weather[0].description);
				$("#txtTemperatura").html(response.main[0].temp);
				$("#txtPresion").html(response.main[0].pressure);
				$("#txtHumedad").html(response.main[0].humidity);
				$("#txtMin").html(response.main[0].temp_min);
				$("#txtMax").html(response.main[0].temp_max);
				
			}
		}
	})
}
//Posiciona el cursor en el cuadro de texto
$("#txtCiudad").focus();
//Evento del boton btnBuscar-click
$("#btnBuscar").on("click", mostrarClima);