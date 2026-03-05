// tipos de datos

// undefined indefinido
let cliente

console.log(typeof cliente)

// strings o cadenas de textos
const myName = "Ricardo Herrera"
console.log(myName, typeof myName)

//numbers aqui no existe float siemrpe sera tipo number
const numero = 20.20
const numero2 = 333
const numero3 = -50

console.log(numero, typeof numero)
console.log(numero2, typeof numero2)
console.log(numero3, typeof numero3)

// BigInt es para calculos cientificos numeros infinitos 
const numeroGrande = BigInt(293948857287627282929290202020020202020202)
console.log(numeroGrande, typeof numeroGrande)

// Boolean true false
 const descuento = true
 console.log(descuento, typeof descuento)

// Null su tipo aparece como objeto, requiere que se asigne mas adelante se cambie el valor
const promo  = null
console.log(promo, typeof promo)

// Symbol son unicos no se repiten
const primerSymbol = Symbol("ID33")
const segundoSymbol2 = Symbol(33)
console.log(primerSymbol, typeof primerSymbol)
console.log(segundoSymbol2, typeof segundoSymbol2 )





