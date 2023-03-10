(() => {

  class Apocalipsis {

    static instance:Apocalipsis;

    private constructor(
        public name: string
        ) {}

    static callApocalipsis():Apocalipsis{
        if(!Apocalipsis.instance) Apocalipsis.instance = new Apocalipsis('Soy el apocalipsis, uno y ya');

        return Apocalipsis.instance;
    }

    changeName(newName:string):void{
        this.name = newName;
    }

  }

  // Llamado el principio singleton, se pone privado el constructor para que solo sea la clase la que pueda acceder a ella, se crea una instancia de tipo apocalipsis
  // que solamente se va a instancear la primera vez que se llame el metodo callApocalipsis.

  const apocalipsis = Apocalipsis.callApocalipsis();
  apocalipsis.changeName('Nomas soy yo CUARCUAR');

  console.log(apocalipsis);
  



  /* const apocalipsis = new Apocalipsis('Soy el apocalipsis... Uno y ya');

  console.log(apocalipsis); */
  

})();
