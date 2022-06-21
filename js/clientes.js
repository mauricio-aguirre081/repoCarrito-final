const clientes = [
    {
        nombre: "Carlos",
        direccion: "Cafayate - Barrio 2",
        producto_preferido: "bolognesa"
    },
    {
        nombre: "Roberto",
        direccion: "Cafayate - Barrio 5",
        producto_preferido: "rigatonis"
    },
    {
        nombre: "Lorena",
        direccion: "Cafayate - Barrio 5",
        producto_preferido: "macarrones"
    },
    {
        nombre: "Ivana",
        direccion: "Cafayate - Barrio 6",
        producto_preferido: "bolognesa"
    },
    {
        nombre: "Gabriela",
        direccion: "Cafayate - Barrio 2",
        producto_preferido: "bolognesa"
    },
    {
        nombre: "Pablo",
        direccion: "Cafayate - Barrio 5",
        producto_preferido: "filetto"
    },
    {
        nombre: "Gustavo",
        direccion: "Cafayate - Barrio 6",
        producto_preferido: "macarrones"
    },
    {
        nombre: "Mariano",
        direccion: "Cafayate - Barrio 4",
        producto_preferido: "filetto"
    },
    {
        nombre: "Patricia",
        direccion: "Cafayate - Barrio 5",
        producto_preferido: "rigatonis"
    },
    {
        nombre: "Nancy",
        direccion: "Cafayate - Barrio 6",
        producto_preferido: "macarrones"
    },
]

console.log(clientes.length);

//PROBANDO OPERADOR TERNARIO

let compraMacarrones = (clientes.producto_preferido = "macarrones") ? true : false;

console.log(compraMacarrones);

let eleccionMacarrones = [
    ...clientes.find(({producto_preferido}) => producto_preferido ="macarrones") // me salta error
];

console.log(eleccionMacarrones);
