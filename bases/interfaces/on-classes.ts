(() => {
  interface Speakers {
    name: string;
    boxName: string;
    timeUsed: number;
    hasGreatSound(name: string): boolean;
  }

  interface Headphones {
    brand: string;
  }

  class Music implements Speakers, Headphones {
    constructor(
      public name: string,
      public boxName: string,
      public timeUsed: number,
      public brand: string
    ) {}

    hasGreatSound(name: string): boolean {
      return true;
    }
  }

  
})();
