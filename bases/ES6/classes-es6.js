(() => {

    class Avenger {
        name;
        power;

        constructor(name = 'No name', power = 500){
            this.name = name;
            this.power = power;
        }

    }

    class FlyingAvenger extends Avenger {
        flies;

        constructor(name, power){
            super(name, power)
            this.flies = true;
        }
    }

    const hulk = new Avenger('Hulk');
    const falcon = new FlyingAvenger('Falcon', 50);

    console.log(hulk);
    console.log(falcon);

})()