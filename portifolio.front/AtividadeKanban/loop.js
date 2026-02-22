

for(let i = 0; i < 5; i = i + 1) {
    console.log(i)
}


const frutas = ['maçã', 'laranja', 'banana']

frutas.forEach(function(fruta) {
    console.log(fruta)
})

frutas.forEach((fruta) => {
    console.log(fruta)
})


const numeros = [1,2,3,4]
const quadrado = numeros.map(function(numero) {
    return numero * numero
})

console.log(quadrado)


function dizerOi() {
    console.log('Olá mundo!')
}

dizerOi()

function saudacao(nome) {
    console.log(`Olá ${nome}`)
}

saudacao('Karol')

function somar(x, y){
    return x + y
}

console.log(somar(3, 4))
