// objetos: es una coleccion de propiedades, asociasion llave -> valor 

const producto = {
    nombre: "Iphone", // propiedad es todo y ya esta llave= nombre y valor = "Iphone"
    precio: 3333,
    disponible: true
}

console.log(producto, typeof producto)
console.table(producto)

//acceder a objetos ***
console.log(producto.nombre)
console.log(producto.precio)


// Destructuring ***
const { disponible} = producto
console.log(disponible)

const { nombre,precio, } = producto
console.log(nombre)
console.log(precio)


// object Literal Enhacement ***
const autenticado = true 
const usuario = "jose"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.log(nuevoObjeto)

