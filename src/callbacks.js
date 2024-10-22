// exercise 1
export const processar = (num, callback) => {
  return callback(num);
};

// exercise 2
export const calculadora = (num1, num2, callback) => {
  return callback(num1, num2);
};

// additional callbacks for exercise 2
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;

// exercise 3
export const esperarISaludar = (nom, callback) => {
  setTimeout(() => {
    callback(nom);
  }, 2000);
};

// exercise 4
export const processarElements = (array, callback) => {
  array.forEach((element) => {
    callback(element);
  });
};

// additional callback for exercise 4
export const includeInPhrase = (element) => console.log(`${element} és màgic`);

// exercise 5
export const processarCadena = (cadena, callback) => {
  const cadenaMajuscules = cadena.toUpperCase();
  callback(cadenaMajuscules);
};

// additional callback for exercise 5
export const printString = (string) => {
  console.log(string);
};

export const encryptString = (string) => {
  const encryptedString = string
    .split("")
    .map((char) => {
      const index = string.indexOf(char);
      return index * 7 + char;
    })
    .join("");
  console.log(encryptedString);
};
