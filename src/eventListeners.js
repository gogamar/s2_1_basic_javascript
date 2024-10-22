import { add, randomNumber, Person, printNumbers, printAfter3Seconds } from "./arrowFunctions.js";
import { potConduir, compararNums, classificarNumero, trobarMaxim, parOImpar } from "./ternary.js";
import { processar, subtract, multiply, divide, calculadora, esperarISaludar, processarElements, includeInPhrase, processarCadena, printString, encryptString } from "./callbacks.js";

const callbackMap = {
  potConduir,
  classificarNumero,
  add,
  subtract,
  multiply,
  divide,
  printAfter3Seconds,
  includeInPhrase,
  printString,
  encryptString,
};

export const setupEventListeners = () => {
  document.getElementById("addButton").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    console.log(add(num1, num2));
  });

  document.getElementById("randomButton").addEventListener("click", () => {
    console.log(randomNumber());
  });

  document.getElementById("greetButton").addEventListener("click", () => {
    const name = document.getElementById("personName").value;
    if (name) {
      const person = new Person(name);
      person.greet();
    } else {
      console.log("Si us plau introdueix un nom.");
    }
  });

  const fromNumberInput = document.getElementById("fromNumber");
  const toNumberInput = document.getElementById("toNumber");

  const updateToNumber = () => {
    const fromValue = parseInt(fromNumberInput.value);
    const toValue = parseInt(toNumberInput.value);
    if (toValue < fromValue) {
      toNumberInput.value = fromNumberInput.value;
    }
  };

  fromNumberInput.addEventListener("input", updateToNumber);
  toNumberInput.addEventListener("input", updateToNumber);

  document.getElementById("printNumbersButton").addEventListener("click", () => {
    const fromNumber = parseInt(fromNumberInput.value);
    const toNumber = parseInt(toNumberInput.value);

    if (!isNaN(fromNumber) && !isNaN(toNumber) && fromNumber <= toNumber) {
      const numbersArray = [];
      for (let i = fromNumber; i <= toNumber; i++) {
        numbersArray.push(i);
      }
      printNumbers(numbersArray);
    } else {
      console.log("Si us plau introdueix dos números.");
    }
  });

  document.getElementById("waitButton").addEventListener("click", () => {
    const message = document.getElementById("messageText").value;
    printAfter3Seconds(message);
  });

  document.getElementById("potConduirButton").addEventListener("click", () => {
    const age = parseInt(document.getElementById("age").value);
    console.log(potConduir(age));
  });

  document.getElementById("compararNumsButton").addEventListener("click", () => {
    const number1 = parseInt(document.getElementById("number1").value);
    const number2 = parseInt(document.getElementById("number2").value);
    console.log(compararNums(number1, number2));
  });

  document.getElementById("classificarNumButton").addEventListener("click", () => {
    const number = parseInt(document.getElementById("n").value);
    console.log(classificarNumero(number));
  });

  document.getElementById("maxNumButton").addEventListener("click", () => {
    const a = parseInt(document.getElementById("nummaxa").value);
    const b = parseInt(document.getElementById("nummaxb").value);
    const c = parseInt(document.getElementById("nummaxc").value);
    console.log(`El número més gran es el ${trobarMaxim(a, b, c)}`);
  });

  document.getElementById("parOImparButton").addEventListener("click", () => {
    const numbers = document
      .getElementById("numbers")
      .value.split(",")
      .map((num) => parseInt(num));
    parOImpar(numbers);
  });

  document.getElementById("processarButton").addEventListener("click", () => {
    const num = parseInt(document.getElementById("numToProcess").value);
    const callbackName = document.getElementById("callbackName").value;
    const callback = callbackMap[callbackName];

    if (callback) {
      const result = processar(num, callback);
      console.log(result);
    } else {
      console.error("Cap callback seleccionat");
    }
  });

  document.getElementById("calculadoraButton").addEventListener("click", () => {
    const num1 = parseInt(document.getElementById("numMath1").value);
    const num2 = parseInt(document.getElementById("numMath2").value);
    const callbackName = document.getElementById("mathCallback").value;
    const callback = callbackMap[callbackName];

    if (callback) {
      const result = calculadora(num1, num2, callback);
      console.log(result);
    } else {
      console.error("Cap callback seleccionat");
    }
  });

  document.getElementById("esperarSaludarButton").addEventListener("click", () => {
    const nom = document.getElementById("nomPersona").value;
    const person = new Person(nom);
    // Arrow function to keep the context of 'this'
    const callback = () => person.greet();
    esperarISaludar(nom, callback);
  });

  document.getElementById("processElementsButton").addEventListener("click", () => {
    const elements = document
      .getElementById("elsToProcess")
      .value.split(",")
      .map((element) => element.trim());
    const callbackName = document.getElementById("processElementsCallback").value;
    const callback = callbackMap[callbackName];
    processarElements(elements, callback);
  });

  document.getElementById("processStringButton").addEventListener("click", () => {
    const phrase = document.getElementById("stringToProcess").value;
    const callbackName = document.getElementById("processStringCallback").value;
    const callback = callbackMap[callbackName];
    processarCadena(phrase, callback);
  });
};
