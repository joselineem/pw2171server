const rq = require('electron-require');
const main = rq.remote('./main.js');
// $significa alias o sobrenombre y aquí es de jquery
const $ = require("jquery");
function validausuario(){
	$.ajax({
		url: '/../php/validausuario.php',
 	 	dataType: 'json',
 	 	success: function(data) {
 	 		if(data.respuesta==true){
 	 			alert("cosas hihi");
 	 		}

 	 	},
 	 	error(a,b,c){
  		alert("Usuario o contraseña incorrectos :( ");
	})
$("#btnEntrar").on("click",validausuario);