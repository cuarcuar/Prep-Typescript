(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: "Tony Stark",
    weapon: "Armorsuit",
  };

  const cap: Avenger = {
    name: "Capi",
    weapon: "Scope",
  };

  const thor: Avenger = {
    name: "Odins Son",
    weapon: "God",
  };

  const avengers: Avenger[] = [ironman, cap, thor];

  for (const avenger of avengers) {
    console.log(avenger);
    
  }
})();
