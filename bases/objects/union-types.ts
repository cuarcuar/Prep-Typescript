(() => {

  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getPowers?: () => string;
  };

  let myCustomVar:string|number|Hero = 'Cesar';

  console.log(typeof myCustomVar);
  
})();
