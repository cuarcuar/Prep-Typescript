"use strict";
(() => {
    const fullName = (firstName, ...restNames) => {
        return `${firstName} ${restNames.join(' ')}`;
    };
    const superman = fullName('Cesar', 'Alvarez', 'Rojas');
    console.log({ superman });
})();
