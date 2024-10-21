// exercise 1
const add = (a, b) => a + b;
console.log(add(4, 5));

// exercise 2
const randomNumber = () => Math.floor(Math.random() * 101);
console.log(randomNumber());

// exercise 3
class Person {
  constructor(name) {
    this.name = name;
  }

  greet = () => console.log(`Hola, ${this.name}`);
}

const marc = new Person("Marc");

marc.greet();

// exercise 4
const printNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    (() => {
      console.log(arr[i]);
    })();
  }
};

const numbers = [1, 2, 3, 4, 5];
printNumbers(numbers);

// exercise 5
const printAfter3Seconds = () => {
  setTimeout(() => console.log("Hola, després de 3 segons"), 3000);
};

printAfter3Seconds();
