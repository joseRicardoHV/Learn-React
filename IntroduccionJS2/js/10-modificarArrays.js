const tecnologias = ['HTML','CSS','JS','REACT','GO']
console.table(tecnologias)

// cambiar valor 
tecnologias[1] = 'JSX'
console.table(tecnologias)

// si no existe es indice lo agrega
tecnologias[10] = 'PYTHON'

// array metodo push agrega el valor en el siguiente numero del indice existe pero lo muta
// nota siempre toma el ultimo aunque la secuencia allla brincado siempre toma el ultimo
tecnologias.push('DOCKER')
console.table(tecnologias)

//  otra manera de agregarlo sin mutar es haciendo un nuevo arreglo  que no muta 
const  nuevoArreglo = [...tecnologias, 'RUBY'] 
// const  nuevoArreglo = ['RUBY',...tecnologias] // SI RUBY lo pongo al inicio lo agrega al inicio
console.table(nuevoArreglo)


// metodo shift elimina el primer elemento de un arreglo este muta (solo parqa eliminar el primer elemento)
tecnologias.shift()
console.table(tecnologias)

// pero si quiero quitar uno especifico lo podemos hacer con filter y no muta el original
const tecnologias2 = tecnologias.filter(function (tech){
    if (tech !== 'JS'){
        return tech
    }
})
console.table(tecnologias2)

// otra opcion en map, creamos una nueva variable y  cambiar python por c# y no muta
const tecnologias3 = tecnologias2.map(function(tech){
    if (tech === 'PYTHON'){
        return 'C#'
    } else{
        return tech
    }
})
console.table(tecnologias3)