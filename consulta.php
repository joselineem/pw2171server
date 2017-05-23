<?php
include("utilerias.php");
	$conexion=conecta();
	$consulta=sprintf("select * from usuarios order by usuario");
	$resultado= mysql_query($consulta);
	$tabla="<table border=1>";
	$tabla.="<tr>";
	$tabla.="<th>Usuario</th>";
	$tabla.="<th>Nombre</th>";
	$tabla.="<th>Departamento</th>";
	$tabla.="<th>Vigencia</th>";
	$tabla.="<th>Acción</th>";
	$tabla.="</tr>";
	if(mysql_num_rows($resultado)>0){ //Hay registros
		//cada vuelta de while es asignacion y si se puede es dvd y si no ps no. mysql_fetch_array cambia el tipo a array asociativo de cada "renglon" en el archivo hasta terminar
		while($registro=mysql_fetch_array($resultado)){
			$tabla.="<tr>";
			$tabla.="<td>".$registro["usuario"]."</td>";
			$tabla.="<td>".$registro["nombre"]."</td>";
			$tabla.="<td>".$registro["departamento"]."</td>";
			$tabla.="<td>".$registro["vigencia"]."</td>";
			$tabla.="<td><a href='guardabaja.php?txtUsuario=".$registro["usuario"]."'>Baja</a> </td>";
			$tabla.="<td><a href='cambio.php?txtUsuario=".$registro["usuario"]."'>Cambio</a> </td>"; //signo de interrogación para el primer parametro y del segundo en adelante es con &
			$tabla.="</tr>";
			//print($registro["usuario"]."<br>");
		}
	}else{//no hay registros
		$table.="<tr><td colspan=6>Sin registros</td></tr>";
	}
	$tabla.="</table>";
	print($tabla);
?>