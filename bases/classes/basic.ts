(() => {

    class Avenger {
        constructor(private name:string, private team:string, public realName:string){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }   
        
        public bio(){
            return `${this.name} (${this.team})`
        }

    }

    const antman: Avenger = new Avenger('antman', 'cap', 'ant' );

    console.log(antman.bio);

})()