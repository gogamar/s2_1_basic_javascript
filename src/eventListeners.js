import { add, randomNumber, Person, printNumbers, printAfter3Seconds } from "./arrowFunctions.js";
import { potConduir, compararNums, classificarNumero, trobarMaxim, parOImpar } from "./ternary.js";
import { processar, subtract, multiply, divide, calculadora, esperarISaludar, processarElements, includeInPhrase, processarCadena, printString, encryptString } from "./callbacks.js";
import { combineArrays, suma, createObject, copyObject, modifyCopy, assignVariables, showData, mergeObjects } from "./restSpread.js";
import { squareArray, onlyEvenNumbers, findHigherTen, reduceToSum, filterAndSum, everyHigherTen, someHigherTen } from "./arrayTransformations.js";

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

  document.getElementById("joinArraysButton").addEventListener("click", () => {
    const array1 = document
      .getElementById("array1")
      .value.split(",")
      .map((element) => element.trim());
    const array2 = document
      .getElementById("array2")
      .value.split(",")
      .map((element) => element.trim());
    console.log(combineArrays(array1, array2));
  });

  document.getElementById("sumAllNumbersButton").addEventListener("click", () => {
    const numbers = document
      .getElementById("numbersToSum")
      .value.split(",")
      .map((num) => parseInt(num));
    console.log(suma(...numbers));
  });

  // Rest and spread exercises event listeners

  let original = null;
  let copy = null;

  const buttonCreate = document.getElementById("createObjectButton");
  const buttonCopy = document.getElementById("copyObjectButton");
  const buttonModifyCopy = document.getElementById("modifyCopyButton");
  const buttonCheckOriginal = document.getElementById("checkOriginalButton");

  const nameInput = document.getElementById("objectName");
  const ageInput = document.getElementById("objectAge");

  buttonCreate.addEventListener("click", () => {
    const name = nameInput.value;
    const age = parseInt(ageInput.value);
    original = createObject(name, age);
    console.log("El primer objecte creat és:", original);

    toggleButtons([buttonCreate], [buttonCopy]);
    toggleInputs(true);
  });

  // Copying the object
  buttonCopy.addEventListener("click", () => {
    copy = copyObject(original);
    console.log("La copia creada és:", copy);

    toggleButtons([buttonCopy], [buttonModifyCopy]);
    toggleInputs(false);
    populateInputs(copy.name, copy.age);
  });

  // Modifying the copied object
  buttonModifyCopy.addEventListener("click", () => {
    const copyName = nameInput.value;
    const copyAge = parseInt(ageInput.value);
    copy = modifyCopy(copyName, copyAge, copy);
    console.log("La copia modificada és:", copy);

    toggleButtons([buttonModifyCopy], [buttonCheckOriginal]);
  });

  // Check out the original object
  buttonCheckOriginal.addEventListener("click", () => {
    console.log("L'objecte original és:", original);
    console.log("L'objecte copiat i modificat és:", copy);

    resetForm();
  });

  // Helper to show/hide buttons
  const toggleButtons = (hideButtons, showButtons) => {
    hideButtons.forEach((button) => button.classList.add("d-none"));
    showButtons.forEach((button) => button.classList.remove("d-none"));
  };

  // Helper to disable/enable inputs
  const toggleInputs = (disabled) => {
    nameInput.disabled = disabled;
    ageInput.disabled = disabled;
  };

  // Helper to populate input fields with values
  const populateInputs = (name, age) => {
    nameInput.value = name;
    ageInput.value = age;
  };

  // Reset the form and state
  const resetForm = () => {
    toggleButtons([buttonCheckOriginal], [buttonCreate]);
    toggleInputs(false);
    nameInput.value = original.name;
    ageInput.value = original.age;
  };

  // Destructuring exercise
  const buttonDestructure = document.getElementById("destructureButton");
  buttonDestructure.addEventListener("click", () => {
    const array = document
      .getElementById("arrayToDestructure")
      .value.split(",")
      .map((element) => element.trim());

    assignVariables(array);
  });

  // Array as argument
  const buttonArrayArgument = document.getElementById("arrayArgumentButton");
  buttonArrayArgument.addEventListener("click", () => {
    const name = document.getElementById("nameArray").value;
    const age = parseInt(document.getElementById("ageArray").value);
    const city = document.getElementById("cityArray").value;
    const array = [name, age, city];

    console.log("Array passat com a argument:", array);
    showData(...array);
  });

  // Object as argument
  const buttonObjectArgument = document.getElementById("objectArgumentButton");
  buttonObjectArgument.addEventListener("click", () => {
    const personalData = {
      name: document.getElementById("nameObject").value,
      age: parseInt(document.getElementById("ageObject").value),
    };
    console.log("Dades personals:", personalData);

    const professionalData = {
      profession: document.getElementById("professionObject").value,
      experience: document.getElementById("experienceObject").value,
    };
    console.log("Dades professionals:", professionalData);
    console.log("Dades fusionades:", mergeObjects(personalData, professionalData));
  });

  // Array of squares
  const buttonSquares = document.getElementById("squaresButton");
  buttonSquares.addEventListener("click", () => {
    const arrayText = document.getElementById("arrayToSquare").innerText;
    const array = JSON.parse(arrayText);

    console.log("Aquests números son els seus quadrats:", squareArray(array));
  });

  // Array of only even numbers
  const buttonEvenNumbers = document.getElementById("evenNumbersButton");
  buttonEvenNumbers.addEventListener("click", () => {
    const arrayText = document.getElementById("arrayToEven").innerText;
    const array = JSON.parse(arrayText);

    // console.log(`Aquests números son parells: ${onlyEvenNumbers(array)}`);
    console.log("Aquests números son parells:", onlyEvenNumbers(array));
  });

  // Find higher than 10
  const buttonHigherTen = document.getElementById("higherTenButton");
  buttonHigherTen.addEventListener("click", () => {
    const arrayText = document.getElementById("arrayToFind").innerText;
    const array = JSON.parse(arrayText);

    console.log("El primer número major a 10:", findHigherTen(array));
  });

  // Reduce to sum
  const buttonReduce = document.getElementById("reduceButton");
  buttonReduce.addEventListener("click", () => {
    const arrayText = document.getElementById("arrayToReduce").innerText;
    const array = JSON.parse(arrayText);

    console.log("La suma de tots els números és:", reduceToSum(array));
  });

  // Filter, multiply and sum
  const buttonFilterSum = document.getElementById("filterSumButton");
  buttonFilterSum.addEventListener("click", () => {
    const arrayText = document.getElementById("arrayToFilter").innerText;
    const array = JSON.parse(arrayText);

    console.log("La suma dels números >=10 multiplicats per 2 és:", filterAndSum(array));
  });

  // Find greater than 10 with every and some
  const buttonEverySome = document.getElementById("everySomeButton");
  buttonEverySome.addEventListener("click", () => {
    const arrayText = document.getElementById("arrayEverySome").innerText;
    const array = JSON.parse(arrayText);

    console.log("Tots els números son majors a 10?", everyHigherTen(array));
    console.log("Algun número és major a 10?", someHigherTen(array));
  });
};
