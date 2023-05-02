
function validarRut() {
var rut = document.getElementById('rut').value;
// Validar formato del RUT
if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut)){ 
alert("Formato de RUT inválido (ej:180610-1)");
return false;
}

// Validar dígito verificador
var dv = rut.charAt(rut.length - 1);
var rut = rut.substring(0, rut.length - 2);
var suma = 0;
var factor = 2;

for (var i = rut.length - 1; i >= 0; i--) {
suma += factor * rut.charAt(i);
factor = factor === 7 ? 2 : factor + 1;
}

var dvEsperado = 11 - (suma % 11);
dv = dv == "k" ? 10 : dv == "K" ? 10 : dv;
if (dvEsperado != dv){ alert("RUT inválido");}else{
alert("RUT válido");
}
}

// Valida Marca y modelo API
function mostrarMarcaSeleccionada() {
    const select = document.getElementById("marca");
    const marcaSeleccionada = select.value;

const url = 'https://api.api-ninjas.com/v1/cars?make=' + marcaSeleccionada + '&limit=20';
const API_KEY = "tS9DnF+5UN7dSK5GBnV9Lg==cP1WeeOdItfzI4C0" // Esta es la clave para poder usar api ninja
let options = {
        method: 'GET',
        headers: { 'x-api-key': API_KEY } // Usar la key para poder usar la api
    }
fetch(url,options)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    const modeloInput = document.getElementById('modelo');
    modeloInput.innerHTML = ""; // Limpiamos los modelos anteriores
    data.forEach(dataObj => {
        const option = document.createElement('option');
        option.value = dataObj.make + " " + dataObj.model + " " +dataObj.highway_mpg;
        option.text =dataObj.make + " " + dataObj.model  + " " +dataObj.highway_mpg;
        modeloInput.add(option);
    });
    })
    .catch(error => console.error(error));
    }
