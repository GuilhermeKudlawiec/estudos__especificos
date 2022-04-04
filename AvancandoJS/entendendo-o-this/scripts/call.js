/*
function.call(this, arg1, arg2)
call = chamar.
retornar o this do contexto que eu enviar.
*/

this.name = `Kakashi`

const classe = {
    sayMyName: function (sobrenome) {
        //console.log(this.name) -> Está em outro contexto. 
        this.sobrenome = sobrenome 
        console.log(this.name, this.sobrenome) // Hatake
    }
}
classe.sayMyName.call(this, `Hatake!`) // Kakashi 