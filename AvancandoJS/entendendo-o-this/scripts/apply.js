/*
function.apply(this, [arg1, arg2])
retorna o this do contexto que eu enviar.
*/

this.name = "Kratos"
this.age = 25

const classe = {
    nomefun: function (name, age) {
        this.name = name
        this.age = age
        console.log(this.name, this.age) //Geralt, 20
    }
}
classe.nomefun(`Geralt`, 20)

console.log(this.name,this.age) //Kratos, 25.

classe.nomefun.apply(this, ['Atheus',18]) 
//trouxe o this global e alterou os seus valores.

console.log(this.name,this.age)


