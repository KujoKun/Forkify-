/*

//Ternary operator

let age = 26;
let beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"


// The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


///////////////////////////////////////
// Arrow functions
funtion sum(a, b){
    return a + b
}
let sum2 =  (a, b) => a + b

function isPositive(number){
    return number >= 0
}

let isPositive2 = number => number >= 0

function randomNumber(){
    return Math.random
}
let randomNumber2 = () => Math.random

document.addEventlistener("Click", function(){
    console.log("Click")
})

document.addEventlistener("Click", () => console.log("Click"))



//For loop
  for (let i = 0; i < arr.length; i++)
//For of loop
const arr = [1, 2, 3]
for (const item of arr) console.log(item);
//For of loop to loop over item.entries
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
It destructs the array into i and el, item and element.
Then it will log the i which is 1,2,3 etc
Then it will log the element, which is the name that is placed in the array.

//forEach loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(function(movement){
  if(movement > 0){
    console.log(`You deposited ${movement} into your bank.`)
  }else{
    console.log(`You withdrew ${movement} from your bank`)
  }
})

//NOTE whenever you reference the object with an access operator (either . or [])
// and use an assignment operator to it, thats enough to declare that property


//For loop vs While loop
///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  }
  
  let rep = 1;
  while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
  }
The Nullish Coalescing Operator (??)

&& Will return the first falsy value or the last value if all of them are truthy.
|| will return the first truthy value of all operators or simply the last value if all of them are falsy
console.log(undefined || null)

//Destructioring 

const arr = [
  [1, 3, 5, 7],
  [2, 4, 6, 8],
];
const [oddArray, evenArray] = arr;
console.log(oddArray);
console.log(evenArray);

//Optional chaining
Will check if the thing exists before calling it

function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
console.log(calcAge1?.(1991) ?? `Function does not exist`) 

//
Trick to change the order of two variables:

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Mutating variables in objects. A + B is already defined, we need to
// change the variables to the incoming object. As A and B is already defined
// we need to start off without let or const. In order to do so, we wrap the
// reassignment in () because if you start off a line wiht {} it expects code block

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//IIEF Immediately Invoked Function Expressions (IIFE)

(function(){
  console.log(`Wow Immediately Invoked Function Expressions (IIFE)`)
})();

(() => console.log(`Wow Immediately Invoked Arrow Function Expressions (IIFE)`))();

//Filter method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);
//reduce
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 0);

console.log(balance);


//Prefixed ++ operator

let a = 10
console.log(a++) //Shows 10, but next time you call the reference it is 11
console.log(a) //Returns 11

let a = 10
console.log(++a) //returns 11

//Conversion from string to number 
console.log(Number("23"))
===
console.log(+"23")

//Parsing
console.log(Number.parseInt('30px')); //30
console.log(Number(parseInt('e23'))); //NAN
console.log(Number.parseInt('2.5rem')); // 2
console.log(Number.parseFloat('2.5rem')); // 2.5
//NAN
console.log(Number.isNaN(20)); //False
console.log(Number.isNaN('20')); //False
console.log(Number.isNaN(+'20X')); //True
console.log(Number.isNaN(23 / 0)); //False
//Finate
consfole.log(Number.isFinite(20)); //True
console.log(Number.isFinite('20')); //False
console.log(Number.isFinite(+'20X')); //False
console.log(Number.isFinite(23 / 0)); //False

//Read value from dom for non standard attributes
console.log(logo.getAttribute('designer'));
console.log(logo.getAttribute('src'));

Promise
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve('You win!');
  } else {
    reject('You lost...');
  }
});
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

API Example
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};
















  */
