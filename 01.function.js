console.log('01 Functions');

const n1 = 10;
const n2 = 20;

const additionner = (n1, n2) => n1 + n2;

const res = additionner(n1, n2);

console.log('res 1 :', res);

const somme = additionner;

const res2 = somme(n1, n2);

console.log('res 2 :', res2);

const multipplication = (n1, n2) => n1 * n2;

const res3 = multipplication(n1, n2);

console.log('res 3 :', res3);

const afficherOperation = (nomOperation, operation, n1, n2) => {
  console.log(`${nomOperation}(${n1}, ${n2}) = `, operation(n1, n2));
};

afficherOperation('Somme', somme, 20, 40);

afficherOperation('Multiplication', multipplication, 10, 20);

afficherOperation('Soustraction', (n1, n2) => n1 - n2, 15, 5);
