/**
 * Fonction pour additionner deux nombres
 * @param {number} a - Le premier nombre
 * @param {number} b - Le second nombre
 * @returns {number} - La somme des deux nombres
 */
function additionner(a, b) {
  return a + b;
}

// Exemple d'utilisation
const resultat = additionner(5, 3);
console.log("Le résultat de l'addition est : " + resultat);

// Exemple d'utilisation avec des nombres négatifs
const resultatNegatif = additionner(-5, -3);
  console.log("Le résultat de l'addition avec des nombres négatifs est : " + resultatNegatif);

// Exemple d'utilisation avec des nombres décimaux
  const resultatDecimal = additionner(2.5, 3.7);
console.log("Le résultat de l'addition avec des nombres décimaux est : " + resultatDecimal);

// Exemple d'utilisation avec des nombres décimaux et négatifs
const resultatDecimalNegatif = additionner(-2.5, -3.7);
console.log("Le résultat de l'addition avec des nombres décimaux et négatifs est : " + resultatDecimalNegatif);