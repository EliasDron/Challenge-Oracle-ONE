// Encriptacion vocales
var encriptacionA = "ai";
var encriptacionE = "enter";
var encriptacionI = "imes";
var encriptacionO = "ober";
var encriptacionU = "ufat";

const mensaje = document.querySelector(".mensaje");
const resultado = document.querySelector(".resultado");

function btnEncriptar(){
	const textoEncriptado = encriptador(mensaje.value);
	resultado.value = textoEncriptado;
	resultado.style.backgroundImage = "none";
	mensaje.value = "";
}

function encriptador(texto) {
	//Encriptacion del texto
	texto = texto.toLowerCase();
	var textoEncriptado ="";
	for (var posicion = 0; posicion < texto.length; posicion++) {
		if (texto[posicion] == "a") {
			textoEncriptado = textoEncriptado + encriptacionA;

		}else if (texto[posicion] == "e") {
			textoEncriptado = textoEncriptado + encriptacionE;

		}else if (texto[posicion] == "i") {
			textoEncriptado = textoEncriptado + encriptacionI;

		}else if (texto[posicion] == "o") {
			textoEncriptado = textoEncriptado + encriptacionO;

		}else if (texto[posicion] == "u") {
			textoEncriptado = textoEncriptado + encriptacionU;

		}else{
			textoEncriptado = textoEncriptado + texto[posicion];
		}
	}
	return textoEncriptado;
}

function btnDesencriptar(){
	const textoDesencriptado = desencriptador(mensaje.value);
	resultado.value = textoDesencriptado;
	resultado.style.backgroundImage = "none";
	mensaje.value = "";

}

function desencriptador(texto) {
	//Desencriptacion del texto
	texto = texto.toLowerCase();
	var textoDesencriptado ="";
	for (var posicion = 0; posicion < texto.length; ) {
		if (texto[posicion] == "a") {
			textoDesencriptado = textoDesencriptado + texto[posicion];
			posicion = posicion + encriptacionA.length;
			continue;

		}else if (texto[posicion] == "e") {
			textoDesencriptado = textoDesencriptado + texto[posicion];
			posicion = posicion + encriptacionE.length;
			continue;

		}else if (texto[posicion] == "i") {
			textoDesencriptado = textoDesencriptado + texto[posicion];
			posicion = posicion + encriptacionI.length;
			continue;

		}else if (texto[posicion] == "o") {
			textoDesencriptado = textoDesencriptado + texto[posicion];
			posicion = posicion + encriptacionO.length;
			continue;

		}else if (texto[posicion] == "u") {
			textoDesencriptado = textoDesencriptado + texto[posicion];
			posicion = posicion + encriptacionU.length;
			continue;

		}else {
			textoDesencriptado = textoDesencriptado + texto[posicion];
			posicion++;
		}
	}
	return textoDesencriptado;
}

function btnCopiar(){
	resultado.select();
	navigator.clipboard.writeText(resultado.value);
	resultado.value = "";
	alert("Texto copiado");
}