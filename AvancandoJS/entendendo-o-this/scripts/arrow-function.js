//uma arrow function dentro de uma arrow function acessa o this global.  
 

this.name = `Jack`

const age = (age) => {
    
    //this.name = `Majin Boo` -> acessaria!
    
    const birthYear = (age) => {
        const year = 2019 - age
        console.log(this.name, year)
    }

    birthYear(age)
}

age(23)

// uma arrow function dentro de uma classe acessa o this global.

const dev = {
    funname: () => console.log(this.name)
}

dev.funname()

///