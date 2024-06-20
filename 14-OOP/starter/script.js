'use strict';
// 1. New {} empty object is created
// 2. Function is called, this keyword points to the new {} empty object
// 3. {} empty object is linked to a prototype
// 4. Function automatically return {} empty object from the beginning

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
