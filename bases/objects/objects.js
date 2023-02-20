"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Velocidad', 'Viaje en el tiempo']
    };
    let reverseFlash = {
        name: 'Edward Trhone',
        powers: ['Velocidad', 'Viaje en el tiempo']
    };
    reverseFlash = {
        name: 'Reverse flash',
        powers: ['Malo'],
        getPowers() {
            return this.powers.join(' ');
        }
    };
    let superman = {
        name: 'Clark kent',
        age: 60,
        powers: ['Rayos x, Fuerza']
    };
    let batman = {
        name: 'Bruno diaz',
        age: 33,
        powers: ['Millonario'],
        getPowers() {
            return this.powers.join(', ');
        },
    };
})();
