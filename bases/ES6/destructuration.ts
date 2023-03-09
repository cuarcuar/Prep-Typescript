(() => {

    type Dogs = {
        primis: string,
        segus: string,
        tercis: string
    }

    const dogs:Dogs = {
        primis: 'Jumbobo',
        segus: 'Chirrischurris',
        tercis: 'Bombony'
    }

    /* const { primis, tercis } = dogs;

    console.log(primis.toUpperCase(), tercis.toLowerCase()) */

    const printFav = ({primis}:Dogs) => {
        console.log(primis);
    }

    printFav(dogs);
    

    const avengersArray:string[] = ['Cap', 'Ironman', 'Hulk'];

    const [ , ironman, ] = avengersArray;
    console.log(ironman);
    

})()