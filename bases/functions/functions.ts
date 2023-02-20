(() => {

    const hero:string = 'Flash';

    function returnName():string {
        return hero;
    }

    const astivateSignal = ():string => {
        return 'Activated!';
    }

    console.log(typeof astivateSignal);

})()