(() => {

    const addNumbers = (a:number, b:number):number => a + b;

    const greet = (name:string):string => `Hola ${name}`;
     
    const saveTheWorld = () => `El mundo está salvado`;

    let myFunction: (a:number, b:number) => number;

    myFunction = addNumbers;
    console.log({myFunction});
    

})()