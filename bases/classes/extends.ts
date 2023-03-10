(() => {

    class Avenger {
        constructor(
            public name:string,
            public realName: string
        ){
            console.log('Constructor Avenger llamado');
            
        }

        protected getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name:string,
            realName:string,
            public isMutant?:boolean
        ){
            super(name, realName);
            console.log('Constructor Xmen');
        }

        get fullName(){
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name:string){

            if (name.length < 5 ) throw new Error("El nombre debe ser mayor de 5 letras");
            
            this.name = name;
        }


        public getNameXmen (){
            console.log(super.getFullName());
        }
    }

    // const wolverine = new Xmen('Wolverine', 'Logan');

    // wolverine.getNameXmen();

})()