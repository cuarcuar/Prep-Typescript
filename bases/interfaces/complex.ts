(() => {
  // La diferencia entre type e interface es que las interfaces pueden ser expandibles y type no

  interface Headphones {
    brand: string;
    microphone: boolean;
    headband: boolean;
    speakers?: Speakers;
    worksOn?(os: string): boolean;
  }

  interface Speakers {
    hasTwo: boolean;
    hasGreatSound: boolean;
    volumeLevel: number;
  }

  const jbl: Headphones = {
    brand: "JBL",
    microphone: true,
    headband: true,
    speakers: {
      hasTwo: true,
      hasGreatSound: true,
      volumeLevel: 100,
    },
  };

  const zk: Headphones = {
    brand: "ZK",
    microphone: true,
    headband: false,
    worksOn(os: string) {
      return false;
    },
  };
})();
