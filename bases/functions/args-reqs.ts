(() => {

    const fullName = (firstName:string, lastName:string):string => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Cesar', 'Alvarez');

    console.log({name});
    

})()