const villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach((ville) => {
  console.log(ville);
});

console.log(
  'Toutes les ville ont un A ?',
  villes.every((ville) => ville.includes('a'))
);

console.log(
  'Au moins une ville contient un "-" ?',
  villes.some((ville) => ville.includes('-'))
);

console.log(
  'Villes sans "-" ni " " : ',
  villes.filter((ville) => !ville.includes('-') && !ville.includes(' '))
);

const villeFinissantParS = villes.filter((ville) => {
  const lastLetter = ville.split('')[ville.length - 1];
  return lastLetter == 's';
});

villeFinissantParS.forEach((ville, index) => {
  villeFinissantParS[index] = ville.toUpperCase();
});

console.log('Villes finissant par un "s" et en majuscule', villeFinissantParS);
