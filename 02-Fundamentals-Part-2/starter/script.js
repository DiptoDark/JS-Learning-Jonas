'use strict';
/*function logger() {
  console.log("My name is dipto");
}
//calling/running/invoking function

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 4);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 5);
console.log(appleOrangeJuice);

const calcAge2 = (birthYear) => 20237 - birthYear;
const age2 = calcAge2(1991);

(birthYear1, firstName) => {
  const age = 2034 - birthYear1;
  const retirement = 65 - age;
  return retirement;
};

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphine = calcAverage(85, 54, 41);
const scorekoalas = calcAverage(23, 34, 27);

console.log(scoreDolphine);

function checkWinner(scoreDolphine, scorekoalas) {
  if (scoreDolphine >= scorekoalas * 2) {
    console.log("dolp");
    return console.log(`dolphon wins`);
  }
}

*/

// const friends = ["Dipto", "Rangon", "Tariqul"];
// console.log(friends[0]);
// console.log(friends.length);
// friends[1] = "Momo";

// friends.push("Hemal");
// friends.pop();
// console.log(friends);

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [123, 23, 45];
// const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// const kickMe = function (nokicks) {
//   return nokicks * 2;
// };

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Islam",
// };
// const namekey = "name";
// console.log(jonas.firstName);
// console.log(jonas['firstName'+ namekey]);

// if(jonas[interestedIn]){
//   console.log()
// }

// // calAge: function() {
// //   console.log(this.firstName);
// //   return
// // };

// getSummary: function(){
// return `$`
// }

// const marik = {
//   firstName: "Marik",
//   lastName: "Miller",
//   height: 1.69,
//   weight: 78,
//   calBMI: function () {
//     this.bmi = this.height * this.weight;
//     return this.bmi;
//   }
// };
// console.log(`${}`);

// for(let rep = 1; rep <= 10, rep ++){
//   console.log('llll')
// }

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

for (let bill = 1; bill <= 10; bill++) {
  let tip = bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.2;
  tips.push(tip);
  console.log('tips');
  console.log();
  let test = 'tess';
  let ab = 'tt';
}
