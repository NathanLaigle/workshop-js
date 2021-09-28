// function person(args) {
//   const { prenom, nom, pseudo, age } = args;
//   this.nom = nom;
//   this.prenom = prenom;
//   this.pseudo = pseudo;
//   this.age = age || 'Non renseigné';
//   this.getFullName = () => {
//     return `Full name : ${this.prenom} ${this.nom} (${this.pseudo})`;
//   };
//   this.getInitial = () => {
//     const nom = this.nom.charAt(0);
//     const prenom = this.prenom.charAt(0);

//     return `${nom}${prenom}`;
//   };
// }

// const Jules = new person({
//   prenom: 'Jules',
//   nom: 'LEMAIRE',
//   pseudo: 'jules77',
// })

class Personne {
  constructor(args) {
    const { prenom, nom, pseudo, age } = args;
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.age = age || 'Non renseigné';
  }

  getFullName() {
    return `Full name : ${this.prenom} ${this.nom} (${this.pseudo})`;
  }

  getInitial() {
    const nom = this.nom.charAt(0);
    const prenom = this.prenom.charAt(0);

    return `${nom}${prenom}`;
  }
}
const Jules = new Personne({
  prenom: 'Jules',
  nom: 'LEMAIRE',
  pseudo: 'jules77',
});
const Paul = new Personne({
  prenom: 'Paul',
  nom: 'LEMAIRE',
  pseudo: 'paul44',
});

console.log(Jules.getFullName());
console.log(Paul.getFullName());

Jules.pseudo = 'jules44';

/**
 * Avec fonction :
 *
 * person.prototype.age = "non renseiné"
 *
 */

Jules.age = 30;

console.log('Jules after update : ', Jules.getFullName());

console.log('Age de Jules : ', Jules.age);

console.log(Jules.getInitial());

const Robert = {
  prenom: 'Robert',
  nom: 'LEPREFET',
  pseudo: 'rob77',
  numClient: 1,
  getFullName() {
    return `Full name : ${this.prenom} ${this.nom} (${this.pseudo})`;
  },
};

console.log(Robert.getFullName());

class Client extends Personne {
  constructor(args) {
    const { prenom, nom, pseudo, age, numClient } = args;
    super({ nom, prenom, pseudo, age });
    this.numClient = numClient;
  }

  static getInfo() {
    return `Client info : ${this.prenom} ${this.nom} (${this.numClient})`;
  }
}

console.log('with call : ', Client.getInfo.call(Robert));

const Steve = new Client({
  prenom: 'Steve',
  nom: 'LUCAS',
  pseudo: 'steve44',
  numClient: 'A01',
});

console.log(Steve.getFullName());
console.log('with call : ', Client.getInfo.call(Steve));
