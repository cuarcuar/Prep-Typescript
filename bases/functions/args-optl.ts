(() => {

    const fullName = (firstName:string, lastName?:string):string => {
        return `${firstName} ${lastName || 'Without LastName'}`;
    }

    const name = fullName('Cesar');

    console.log({name});
    

})()