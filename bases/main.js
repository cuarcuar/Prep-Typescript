"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    },
};
const guason = {
    reir: true,
    comer: true,
    llorar: false,
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(name, age, gender, status) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.status = status;
    }
    printBio() {
        console.log(`${this.name} has ${this.age} is a ${this.gender} and is ${this.status}`);
    }
}
(() => {
    let reverseFlash = {
        name: "Edward Trhone",
        powers: ["Velocidad", "Viaje en el tiempo"],
    };
    let superman = {
        name: "Clark kent",
        age: 60,
        powers: ["Rayos x, Fuerza"],
    };
})();
(() => {
    const jbl = {
        brand: "JBL",
        microphone: true,
        headband: true,
        speakers: {
            hasTwo: true,
            hasGreatSound: true,
            volumeLevel: 100,
        },
    };
    const zk = {
        brand: "ZK",
        microphone: true,
        headband: false,
        worksOn(os) {
            return false;
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return a + b;
    };
})();
(() => {
    class Music {
        constructor(name, boxName, timeUsed, brand) {
            this.name = name;
            this.boxName = boxName;
            this.timeUsed = timeUsed;
            this.brand = brand;
        }
        hasGreatSound(name) {
            return true;
        }
    }
})();
//# sourceMappingURL=main.js.map