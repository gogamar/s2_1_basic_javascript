// exercise 1
export const potConduir = (age) => (age >= 18 ? "Pots conduir" : "No pots conduir");

// exercise 2
export const compararNums = (num1, num2) => {
  if (num1 === num2) {
    return "Els dos números són iguals";
  }
  return num1 > num2 ? `${num1} és més gran` : `${num2} és més gran`;
};

// exercise 3
export const classificarNumero = (num) => (num > 0 ? `El número ${num} és positiu` : num < 0 ? `El número ${num} és negatiu` : "El número és zero");

export const trobarMaxim = (a, b, c) => {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
};

// exercise 4
export const parOImpar = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i] % 2 === 0 ? "parell" : "imparell";
    console.log(`${arr[i]} és ${result}`);
  }
};
