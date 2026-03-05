// destructuring dos o mas objetos

const producto = {
    nombre: "fabuloso",
    precio: 18,
    disponible: false
}

const cliente = {
    nombre: "Carlos",
    premium: true,
    direccion: {
        calle: "huitlacoche",
        numero: 165
    }
}

const { nombre } = producto
const { nombre: nombrecliente /* renombra variable */, direccion: { calle } /* saca la variable de un objeto adentro de otro objeto */ } = cliente

console.log(nombre)
console.log("Este cliente", nombrecliente, "vive en la calle:", calle)


