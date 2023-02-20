(() => {

    const fullName = (firstName:string, ...restNames:string[]):string => {
        return `${firstName} ${restNames.join(' ')}`;
    }

    const superman = fullName('Cesar', 'Alvarez', 'Rojas');

    console.log({superman});
    
})()