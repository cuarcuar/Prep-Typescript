(() => {
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getPowers?: () => string;
  }

  let reverseFlash: Hero = {
    name: "Edward Trhone",
    powers: ["Velocidad", "Viaje en el tiempo"],
  };

  let superman: Hero = {
    name: "Clark kent",
    age: 60,
    powers: ["Rayos x, Fuerza"],
  };
})();
