/* let js = 'amazing';
console.log(40 + 8 + 23 - 10);
console.log("Jonas");

let firstName = "Bob";
console.log(firstName); */

// IF/ELSE STATEMENT //
/*const age = 15;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}
*/
let century
const birthYear = 2012;
if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
}
console.log(century)
// CONDITIONAL EXPRESSION
const age = 15;
const drink = age >= 18 ? 'wine 🍷' : 'awa 💦';
console.log(drink);

// SWITCH STATEMENT //
const day = 'monday';

switch (day) {
    case 'monday':
        console.log('dormir');
        break
    case 'tuesday':
        console.log('work');
        break
}