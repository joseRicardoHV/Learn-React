// Manipulando Objetos

const producto = {
    nombre: "fabuloso",
    precio: 18,
    disponible: false
}

console.log(producto)
// mopdificar el una propiedad del objeto
producto.disponible = true

// agregar una nueva propiedad a un objeto
producto.imagen = "imagen.png"

// borrar una propiedad de un onjeto
delete producto.precio 


console.table(producto)

// congelar un objeto no lo puedes modificar ni agregar valores ***
Object.freeze(producto)

// seal permite modificar las propiedades de un objeto pero no agregar nuevas
Object.seal(producto)
