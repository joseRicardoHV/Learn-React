const tecnologias = ['HTML','CSS','JS','REACT','GO','python']

// forEach ya sabe la longirud del arreglo que va a iterar

tecnologias.forEach(function(tech){
    console.table(tech)
})

// map genera un nuevo arreglo m,as utilizado con react
const nuevoArray = tecnologias.map(function(tecnologia){
    return "soy:"+tecnologia
})
console.table(nuevoArray)

// for of practico me gusto por simple
for (let  tecno of tecnologias) {
    console.log('Tecnologia:',tecno)
}