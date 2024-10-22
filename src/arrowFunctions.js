// exercise 1
export const add = (a, b) => a + b;

// exercise 2
export const randomNumber = () => Math.floor(Math.random() * 101);

// exercise 3
export class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hola ${this.name}`);
  }
}

// exercise 4
export const printNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    (() => {
      console.log(arr[i]);
    })();
  }
};

// exercise 5
export const printAfter3Seconds = (message) => {
  setTimeout(() => console.log(message), 3000);
};
