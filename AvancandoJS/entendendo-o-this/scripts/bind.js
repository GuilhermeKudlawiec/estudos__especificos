/*
 bind = ligar.
 retorna a função chamada, porém ligada ao contexto que lhe foi passado.
 bound function.
*/

this.name = `Vegeta`

function sayMyName (age) {
    this.age = age
    console.log(this.name, this.age)
}

sayMyName(10)

sayMyName.bind(this)(20) 
// mudei o coxtexto e chamei a função.

