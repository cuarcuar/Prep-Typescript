"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'Without LastName'}`;
    };
    const name = fullName('Cesar');
    console.log({ name });
})();
