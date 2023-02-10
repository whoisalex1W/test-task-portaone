const showLetter = () => {
  let textArea = document.getElementById("input-text").value.split(" ");
  let mapResults = "";

  for (const element of textArea) mapResults += checkFirstUniqueLetter(element);
  document.getElementById("result-input").value =
    checkFirstUniqueLetter(mapResults);
};

const checkFirstUniqueLetter = (str) => {
  let map = new Map();
  Array.from(str).forEach((element) => {
    if (element) {
      let val = map.get(element);
      map.set(element, !val ? 1 : val + 1);
    }
  });

  for (const element of map) {
    if (element[1] === 1) {
      return element[0];
    }
  }
};
