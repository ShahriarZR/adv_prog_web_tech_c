// for of loop
const message = "ATP SEC A";

for (const char of message) {
  console.log(char);
}

// for in loop
const person = {
  name: 'Shahriar',
  age: 24,
  city: 'Dhaka'
};
for (const key in person) {
  console.log(person[key]);
}

// for each loop
import { a } from './map.js';
a.forEach((number, index, array) => {
    array[index] = number * 2;
});
console.log(a);