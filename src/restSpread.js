// exercise 1
export const combineArrays = (array1, array2) => {
  const combinedArray = [...array1, ...array2];
  return combinedArray;
};

// exercise 2
export const suma = (...numbers) => {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
};

// exercise 3
export const createObject = (name, age) => ({ name, age });

export const copyObject = (object) => ({ ...object });

export const modifyCopy = (name, age, object) => ({ ...object, name, age });

// exercise 4
export const assignVariables = (array) => {
  const [first, second, ...rest] = array;
  console.log(`El primer element es: ${first}`);
  console.log(`El segon element es: ${second}`);
  console.log(`La resta es: ${rest}`);
};

// exercise 5
export const showData = (name, age, city) => {
  console.log(`Nom: ${name}, Edat: ${age}, Ciutat: ${city}`);
};

// exercise 6
export const mergeObjects = (object1, object2) => {
  return { ...object1, ...object2 };
};
