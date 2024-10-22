// exercise 1
export const squareArray = (arr) => {
  return arr.map((num) => num * num);
};

// exercise 2
export const onlyEvenNumbers = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

// exercise 3
export const findHigherTen = (arr) => {
  return arr.find((num) => num > 10);
};

// exercise 4
export const reduceToSum = (arr) => {
  return arr.reduce((acc, num) => acc + num, 0);
};

// exercise 5
export const filterAndSum = (arr) =>
  arr
    .filter((num) => num >= 10)
    .map((num) => num * 2)
    .reduce((sum, num) => sum + num, 0);

// exercise 6
export const everyHigherTen = (arr) => {
  return arr.every((num) => num > 10);
};

export const someHigherTen = (arr) => {
  return arr.some((num) => num > 10);
};
