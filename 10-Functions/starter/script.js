'use strict';
// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 200) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(bookings);
//   bookings.push(booking);
// };
// createBooking('LD222');

// const flight = 'LD112';
// const dipto = {
//   name: 'Dipto islam',
//   passport: 1234,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'HL111';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 1235) {
//     alert('Check IN');
//   } else {
//     alert('Shoot that bitch!');
//   }
// };

// checkIn(flight, dipto);
// console.log(flight);
// console.log(dipto);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher-order function

// const transformer = function (str, fn) {
//   console.log(`Original string = ${str}`);
//   console.log(`Transformed string = ${fn(str)} `);
//   console.log(`Transformed by = ${fn.name} `);
// };

// //Input

// transformer('Accelosys is going to be an unicorn', upperFirstWord);
// transformer('Accelosys is going to be an unicorn', oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('dipto');

const qaterAirways = {
  airline: 'Qater Airways',
  iataCode: 'QA',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

qaterAirways.book(221, 'Dipto');
qaterAirways.book(221, 'Sejuti');

const book = qaterAirways.book;

const biman = {
  airline: 'biman',
  iataCode: 'BM',
  booking: [],
};

book.call(biman, 223, 'Dipto');
console.log(biman);
