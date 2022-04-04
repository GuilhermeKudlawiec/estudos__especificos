//Scope Global
this.name = `Diana`
console.log(this) //Contexto: window

///

//Scope Local
function sayMyName() {
    console.log(this.name) //Ñ consiguirá acessar
}
sayMyName()

const user = {
    name: `Goku`,
    sayMyName: function() {
        console.log(this.name)
        console.log(this) //Contexto: User
    }
}
user.sayMyName()

///

