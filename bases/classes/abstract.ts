(() => {

    abstract class Mutant{
        constructor(
            public name:string,
            public realName:string
            ){}
    }

    // No se puede tener una instancia de una clase abstracta, sirve para implementar en otras classes las propiedades que esperamos (Es como un cascaron)
    // const wolverine = new Mutant('Wolverine', 'Logan');

    class Xmen extends Mutant {}
    class Villian extends Mutant {}

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');

    // console.log(wolverine);
    // console.log(magneto);

    // Tambien sirve para revisar las propiedades de la misma clase abstracta 

    const printName = ( character:Mutant ) => {

        console.log(character.name);

    }

    // printName(wolverine);
    

})()