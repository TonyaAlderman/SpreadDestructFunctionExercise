const jPDinos = [
    "Velociraptors",
    "Tyrannosaurus Rex",
    "Dilophosaurus"
  ];
  
  function seeDinos(a, ...b){
    console.log(a);
    console.log(b);
  }
  seeDinos(...jPDinos);

  console.log("============");
  
  const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
  };
  
  seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
  }
  seeCharacters(jPCharacters); 