

/* class producto {
    constructor(id, tipo, nombre, precio){
        this.id = parseInt(id);
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    sumarIva () {
        this.precio = this.precio + (this.precio * 0.20);
    }
}

const productos = [];

productos.push(new producto("1", "pasta", "espaguetis", "60"));     
productos.push(new producto("2", "pasta", "fettuccines", "70"));    
productos.push(new producto("3", "pasta", "macarrones", "80"));     
productos.push(new producto("4", "pasta", "rigatonis", "90"));      
productos.push(new producto("5", "salsa", "portuguesa", "80"));     
productos.push(new producto("6", "salsa", "pomarola", "90"));       
productos.push(new producto("7", "salsa", "bolognesa", "100"));     
productos.push(new producto("8", "salsa", "filetto", "70"));        

for (const producto of productos) {
    producto.sumarIva();
    console.log(producto);
}

alert("Bienvenido a Pasta Linda");
alert("Elige las pastas y las salsas que deseas");


const salsas = productos.filter((elem) => elem.tipo.includes('salsa'));
const pastas = productos.filter((elem) => elem.tipo.includes('pasta'));

console.log(salsas);
console.log(pastas);

const salsaElegida = salsas.map((el) => el.nombre);
const pastaElegida = pastas.map((el) => el.nombre);

let salsaAcomprar;
let cantidadSalsa;
let pastaAcomprar;
let cantidadPasta;
let salsaEleccion;
let pastaEleccion;

while (continuarCiclo = true ) {
    continuarCiclo = true;
    salsaAcomprar = parseInt = prompt("Elige la salsa : \n" + salsaElegida + "\n Escribe del 5 al 8 ");
    if ((isNaN(salsaAcomprar) || salsaAcomprar != 5 && salsaAcomprar != 6 && salsaAcomprar != 7 && salsaAcomprar != 8 )) {
            alert("Por favor ingrese un numero del 5 al 8");
    } else {
        break;
    } 
}

while (continuarCiclo = true ) {
    continuarCiclo = true;
    cantidadSalsa = parseInt = prompt("Elige la cantidad: ");
    if (isNaN(cantidadSalsa)) {
        alert("Por favor ingrese un numero entero");
    } else {
        break;
    } 
}


while (continuarCiclo = true ) {
    continuarCiclo = true;
    pastaAcomprar = parseInt = prompt("Elige la pasta : \n" + pastaElegida + "\n Escribe del 1 al 4 ");
    if ((isNaN(pastaAcomprar) || pastaAcomprar != 1 && pastaAcomprar != 2 && pastaAcomprar != 3 && pastaAcomprar != 4 )) {
            alert("Por favor ingrese un numero del 1 al 4");
    } else {
        break;
    } 
}

while (continuarCiclo = true ) {
    continuarCiclo = true;
    cantidadPasta = parseInt = prompt("Elige la cantidad: ");
    if (isNaN(cantidadPasta)) {
        alert("Por favor ingrese un numero entero");
    } else {
        break;
    } 
}  

const calculadora = {
    salsas : function (precio, cantidadSalsa){
                        console.log(precio * cantidadSalsa);
    },
    pastas : function (precio, cantidadPasta){
        console.log(precio * cantidadPasta);
    }
}

console.log(calculadora.salsas(70,3));
console.log(calculadora.pastas(80,4));

console.log(productos.toString());
 */

let nombre = prompt("Por favor ingresa tu nombre:")

let saludo = document.getElementById("saludoConPrompt");

saludo.innerHTML = "<h3> Bienvenido/a <h3>" + nombre;
saludo.style.backgroundColor = "#eeeee4";

let crearDiv = document.createElement("div");
crearDiv.innerHTML = "<p> Como elemento esencial de la Calidad de nuestros productos se encuentra la selección de nuestros Proveedores y Materias primas. Todos nuestros proveedores son evaluados al inicio y a lo largo del tiempo durante el que nos suministran productos, en función de unos exigentes estándares de Calidad, garantizando una materia prima en óptimas condiciones para el proceso productivo.  En algunas ocasiones, se llegan a alcanzar acuerdos de colaboración mutuamente beneficiosos con Partners, favoreciendo la estabilidad de nuestra relación comercial. </p> ";
document.getElementById("info").append(crearDiv); 

let botonsi = document.getElementById("boton-si")
botonsi.addEventListener("click", respuestaClickSi)

function respuestaClickSi(){
    let respuestasi= document.createElement("h4");
    respuestasi.innerHTML = "<h4>Para mas informacion puede  <a href='../pages/contacto.html'> contactarse con nosotros </a></h4>";
    document.getElementById("pregunta-info").append(respuestasi);
}

let botonno = document.getElementById("boton-no")
botonno.addEventListener("click", respuestaClickNo)

function respuestaClickNo(){
    crearDiv.remove();
    respuestasi.remove(); 

}





const productos = [ {id: 1, nombre: "espaguetis", precio: 52},
                    {id: 2, nombre: "fettuccines", precio: 60},
                    {id: 3, nombre: "macarrones", precio: 60},
                    {id: 4, nombre: "rigatonis", precio: 60},
                    {id: 5, nombre: "portuguesa", precio: 60},
                    {id: 6, nombre: "pomarola", precio: 60},
                    {id: 7, nombre: "bolognesa", precio: 60},
                    {id: 8, nombre: "filetto", precio: 100}];


for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.classList.add("items");
    contenedor.innerHTML = `<h3> ID: ${producto.id} </h3>
                            <p> Producto: ${producto.nombre} </p>                     
                            <b> Precio: ${producto.precio} </b><br>
                            <button id="${producto.id}"> Agregar </button>`;
    document.body.append(contenedor);
}

