// Objeto - (parte 2)

var personagem = {
    nome: 'Miss Fortune',
    regiao: 'Águas de Sentina',
    custo: 3 
}

var nomePers = personagem.nome

console.log(nomePers)

var { regiao } = personagem

console.log(regiao)

var { custo: custoCarta } = personagem
console.log(custoCarta)

var personagem = {
    nome: 'Draven',
    regiao: 'Noxus',
    custo: 3,
    novoPer: {
        nome: 'Darius',
        regiao: 'Noxus',
        custo: 6
    }
}

var {novoPer: {nome} } = personagem
console.log(nome)

var { novoPer: { atributo = 'Sobrepujar'} } = personagem
console.log(atributo)

function recebeObj (personagem) {
    console.log(personagem.nome)
    console.log(personagem.regiao)
    console.log(personagem.custo)
}

var objPersonagem = {
    nome: 'Jinx',
    regiao: 'Piltover',
    custo: 4
}

recebeObj(objPersonagem)

function recebeObj ({ nome, regiao, custo, atributo = 'Ataque Rápido'}) {
    console.log(nome)
    console.log(regiao)
    console.log(custo)
    console.log(atributo)
}

var objPersonagem = {
    nome: 'Jinx',
    regiao: 'Piltover',
    custo: 4
}

recebeObj(objPersonagem)

console.log(Object.keys(objPersonagem))

console.log(Object.values(objPersonagem))

var objPersonagem = {
    nome: 'Jinx',
    regiao: 'Piltover',
    custo: 4
}

var props = Object.keys(objPersonagem)
console.log(props)


console.log(props.length)

for (var c = 0; c < props.length; c++) {
    console.log(props[c])
    console.log(objPersonagem[props[c]])
}

for (pos in objPersonagem) {
    console.log(objPersonagem[pos])
}