/*
- context inside a method.
- method = funções dentro de classes. 
- não pega o this global, somente do obejo pai.
*/

this.name = `Geralt`

const dev = {
    name: `Leon`,
    sayMyName: function () {
        console.log(this.name) //Leon
    } 
}
dev.sayMyName()

