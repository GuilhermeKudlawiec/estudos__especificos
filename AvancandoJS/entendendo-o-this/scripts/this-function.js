// context inside a function
// não pega o this global, mas se não estiver no modo estrito, sim!

this.name = "Bulma"

const sayMyName = () => console.log(this.name)
sayMyName()