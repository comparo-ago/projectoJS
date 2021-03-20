//variables constantes funciones


/*function precioDia(){
    let ingNom = prompt("ingrese su Nombre:");
    let ingApe = prompt("Ingrese su Apellido:");
    let nombreCompleto = ingApe +" "+ingNom
    let estadia = prompt("ingrese los dias de estadia: ");
    const precioNoche= 5000;
    let precioTotal = estadia * precioNoche;
    alert("este es el costo :$"+ precioTotal+" "+ nombreCompleto);
    
}
precioDia();*/
//Incorporar Objetos
/*class cliente{
    constructor(entradaNombre, entradaEdad, entradaDNI, nuevaEstadia){
        this.nombre = entradaNombre.toUpperCase();
        this.edad = parseInt(entradaEdad);
        this.dni =parseInt(entradaDNI);
        this.estadia = parseInt(nuevaEstadia);
        this.saludo = alert("Hola"+" "+ this.nombre);
    }
}
let entradaNombre = prompt("Ingrese su Nombre y Apellido");
let entradaEdad = prompt("Ingrese su Edad");
let entradaDNI = prompt("Ingrese su DNI");
let nuevaEstadia = prompt("Ingrese sus Días de estadía: ");

let persona1 = new cliente(entradaNombre,entradaEdad,entradaDNI,nuevaEstadia);
let buscarPropiedad = "estadia"
for(let nombrePropiedad in persona1){
    if (buscarPropiedad == nombrePropiedad){
        alert(persona1[nombrePropiedad]);
    }
}
if (entradaEdad >18 ){
    alert("Estas viejardo che");
}
else if(entradaEdad == 18){
    alert("bienvenido!");
}
else if(entradaEdad <18){
    alert("Anda a tomar danonino...");
}

const productos = [{ id: 1,  producto: "Cabaña1", precio: 5000 },
                  {  id: 2,  producto: "Cabaña2", precio: 5500 },
                  {  id: 3,  producto: "Cabaña3", precio: 6000},
                  {  id: 4,  producto: "Cabaña4", precio: 7500}];

const buscarCabaña = productos.find(producto => producto.id === 3); 
console.log(buscarCabaña);

const baratos = productos.filter(producto => producto.precio < 10000); 
console.log(baratos);

const aumentos = productos.map(producto => producto.precio += 2000);
console.log(aumentos);

const orden = productos.sort((b, a) => b - a);  
console.log(orden);*/
//STORAGE Y JSON//
let nombre = {
    name: "Matias Agobian",
    age: 31
};

let nombre_serialized = JSON.stringify(nombre);


localStorage.setItem('nombre', nombre_serialized);

let nombre_deserialized = JSON.parse (localStorage.getItem ("nombre"));

console.log(nombre_deserialized);

/*var elementosDiv = document.getElementsByTagName ("div");
var segundoParrafo = document.getElementById ("ilusion");
var elemento = document.createElement("h2");
var contenido = document.createTextNode("This is an Ilusion")
elemento.appendChild(contenido)
elemento.setAttribute("align","center")
document.getElementById("datos").appendChild(elemento);

let elemento2 = document.createElement("li");
contenido2 = document.createTextNode ("Nuevo Texto")
elemento2.appendChild(contenido2);
//let padre = document.getElementsByTagName("li")[0].parentNode;  

let padre = document.getElementById("lista");
primerElemento = document.getElementsByTagName("li")[1];
padre.insertBefore(elemento2, primerElemento);

let segundoElemento = document.getElementById("primero");
segundoElemento.innerHTML = ("No tan solo es una <i class ='foo'>ilusion</i>");
padre.replaceChild(elemento2, primerElemento);
    padre.removeChild(segundoElemento);
*/

// agregar eventos

/*document.getElementById("fname").onclick =  mostrarAlert;
function mostrarAlert(){
	alert('Escribiste algo?');
}*/
/*let arrayCabañas = ["cab1","cab2","cab3","cab4","cab5"];
arrayCabañas.forEach(cabaña => {
    let creasElInput = document.createElement('input');
    creasElInput.type = "radio";
    creasElInput.id = cabaña;
    let creasElLabel = document.createElement('label');
    creasElLabel.for = cabaña;
    creasElLabel = cabaña;
    let div = document.querySelector('#insertarAca');
    div.append(creasElLabel, creasElInput);
});*/


//agregar jquery

// agregar animaciones 

$("body").prepend('<h3>BIENVENIDOS!!!</h3>');
$("h3").fadeOut(10000);

