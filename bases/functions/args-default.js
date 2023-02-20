"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        return `${firstName} ${lastName || 'Without LastName'}`;
    };
    const name = fullName('Cesar');
    console.log({ name });
})();
