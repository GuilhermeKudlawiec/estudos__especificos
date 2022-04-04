// context function inside a function
// não pega o this que está no contexto global

this.name = `Jack`

function age(age) {
    function birthYear(age) {
        const year = 2019 - age
        console.log(this.name, year)
    }
    birthYear(age)
}
age(23)
