const producto = {
    nombre: "fabuloso",
    precio: 18,
    disponible: false
}

const cliente = {
    nombre: "Carlos",
    premium: true
}

// const carrito = {
//     cantidad: 1,
//     ...producto  // spread operator aqui se unen en uno solo producto y carrito
// }

// console.log(carrito.nombre)

const {nombre: nombreproducto} = producto

const nuevoObjeto = {
    ...producto,
    ...cliente,
    nombreproducto
}

console.log(nuevoObjeto)