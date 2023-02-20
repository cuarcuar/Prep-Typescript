(() => {

    const fullName = (firstName:string, lastName?:string, upper:boolean = false):string => {
        return `${firstName} ${lastName || 'Without LastName'}`;
    }

    const name = fullName('Cesar');

    console.log({name});
    

})()