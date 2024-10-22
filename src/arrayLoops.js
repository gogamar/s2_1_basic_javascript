export const printForEach = (arr) => {
  arr.forEach((item) => {
    console.log(item);
  });
};

export const printForOf = (arr) => {
  for (const item of arr) {
    console.log(item);
  }
};

export const printKeyValue = (obj) => {
  for (const key in obj) {
    console.log(`clau: ${key}, valor: ${obj[key]}`);
  }
};

export const printTillFive = (arr) => {
  for (let num of arr) {
    if (num === 5) {
      console.log(num);
      break;
    }
    console.log(num);
  }
};

export const printIndex = (arr) => {
  for (const [index, name] of arr.entries()) {
    console.log(`Nom: ${name}, Index: ${index}`);
  }
};
