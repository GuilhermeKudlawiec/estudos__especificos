// Objetos.

this.nome = 'Powder'

var personagem = {
    nome: 'Jinx',
    série: 'Arcane',
    irmã: () => console.log(this.nome)
}
personagem.irmã()


// Adicionando strings no objeto.

personagem.nomeAntigo = 'Powder'

console.log(personagem.nomeAntigo)

delete personagem.nomeAntigo

console.log(personagem.nomeAntigo)

// Adicionando arrays e objetos no objeto.

personagem.características = ['Leal', 'Inteligente', 'Perigosa']

 console.log(personagem)
 
 personagem.características.push('Rápida')
 
 console.log(personagem)

personagem.habilidades = {
    forca: 10,
    mira: 10,
    movimentacao: 10,
    velocidade: 10
}

console.log(personagem)

// Passando a váriavel como propriedade, com o seu valor.

/*
var Endereço = 'Sumidoro'

var personagemDois = {
    Endereço: Endereço
}

console.log(personagemDois)
*/

var Endereço = 'Sumidoro'
var nome = 'Vi'

var personagemDois = {
    // propriedade com o mesmo nome da váriavel.
    Endereço,
    nome
}

console.log(personagemDois)


// Merge de objetos, união de objetos. 

var Endereço = 'Sumidoro'
var nome = 'Vi'

var personagemDois = {
    // propriedade com o mesmo nome da váriavel.
    nome,
    Endereço
}

var personagemDoisMais = {
    altura: 1.64,
    corCabelo: 'rosa',
    corZóio: 'azul' 
}

var fusão = Object.assign({}, personagemDois, personagemDoisMais)

console.log(fusão)

/*
Object.assign(personagemDois, personagemDoisMais)
console.log(personagemDois)
*/

// Unindo objetos com o spread.

var Endereço = 'Sumidoro'
var nome = 'Vi'

var personagemDois = {
    // propriedade com o mesmo nome da váriavel.
    nome,
    Endereço
}

var personagemDoisMais = {
    altura: 1.64,
    corCabelo: 'rosa',
    corZóio: 'azul' 
}

var fusão = {
    ...personagemDois,
    ...personagemDoisMais
}

console.log(fusão)

// Usando o valor da váriavel como prpriedade.

var propriedadeUm = 'nome'

var personagem = {
    [propriedadeUm]: 'Ecko',
    Endereço: 'Sumidoro'
}

console.log(personagem)

// Usando get para chamar uma função dentro de um objeto, sem usar os: ()

var personagens = [
    {
        nome: 'Jinx',
        corCabelo: 'Azul' 
    },
    {
        nome: 'Vi',
        corCabelo: 'Rosa',
    },
    {
        nome: 'Ecko',
        corCabelo: 'Branco'
    }
]

console.log(personagens[1].nome)

var qualPersonagem = {
    posicao: 0,
    get atual() {
        return personagens[this.posicao]
    },
    set atual(posicao) {
        this.posicao = posicao
    },
    anterior () {
        --this.posicao 
    },
    proximo () {
        ++this.posicao 
    }
}

console.log(qualPersonagem.atual)

qualPersonagem.proximo()
console.log(qualPersonagem.atual)

qualPersonagem.proximo()
console.log(qualPersonagem.atual)

qualPersonagem.anterior()
console.log(qualPersonagem.atual)

qualPersonagem.atual = 0
console.log(qualPersonagem.atual)

qualPersonagem.atual = 2
console.log(qualPersonagem.atual)


// sem o uso do set: atual(2),
// daria um erro, exixte outra function com o mesmo nome.


/*
qual a diferença entre get e set?

Set é usado quando eu passo um valor para function,
get é usado quando eu somente chamo a função,
por conta disso não tem problema as duas ter o mesmo nome.

*/